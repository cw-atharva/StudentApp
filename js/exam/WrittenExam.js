import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import TextRecognition from 'react-native-text-recognition';
import axios from 'axios';
import {async} from '@firebase/util';

const API_KEY = `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`;

const WrittenExam = ({route}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [score, setScore] = useState(null);

  const handleImageSelection = async () => {
    const options = {
      mediaType: 'photo',
      saveToPhotos: true,
    };

    const result = await launchImageLibrary(options);
    setSelectedImage(result.assets[0].uri);
    extractTextFromImage(result.assets[0].uri);
  };

  const extractTextFromImage = async imageUri => {
    const result = await TextRecognition.recognize(imageUri);
    setExtractedText(result);
  };

  const analyzeAnswer = async (question, answer) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-002/completions',
        {
          prompt: `Question: ${question}\nAnswer: ${answer}\n`,
          max_tokens: 1,
          temperature: 0.7,
          n: 1,
          stop: null,
          log_level: 'info',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        },
      );

      const completion = response.data.choices[0].text.trim();
      const scoreStart = completion.indexOf('Score:') + 'Score:'.length;
      const scoreEnd = completion.indexOf('\n', scoreStart);
      const score = parseFloat(completion.slice(scoreStart, scoreEnd).trim());
      const normalizedScore = 5 + score * 5;
      setScore(normalizedScore);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  function removeExtraSpaces(str) {
    return str.replace(/\s+/g, ' ').trim();
  }

  function calculateScore(text, keywords) {
    const textLower = removeExtraSpaces(text[0].toLowerCase());
    const matchedKeywords = keywords.filter(keyword =>
      textLower.includes(keyword),
    );
    const score = (matchedKeywords.length / keywords.length) * 100;
    const additonalScore = score > 20 ? 30 : 0;
    return Math.round(score + additonalScore);
  }

  const handleAnalyze = async text => {
    // const result = await analyzeAnswer(
    //   route.params.examData[route.params.index].question,
    //   text[0],
    // );
    // setScore(result);

    const score = calculateScore(
      text,
      route.params.examData[route.params.index].keywords,
    );

    setScore(score);
  };

  return (
    <ScrollView
      style={{paddingVertical: -350, backgroundColor: 'white', flexGrow: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {route.params.examData[route.params.index].question}
        </Text>

        {
          <TouchableOpacity
            style={styles.selectButton}
            onPress={handleImageSelection}>
            <Text style={styles.buttonText}>Select Photo</Text>
          </TouchableOpacity>
        }

        <Text>Please upload photo of your written answer</Text>

        {extractedText?.length > 0 && (
          <TouchableOpacity
            style={styles.selectButton}
            onPress={() => handleAnalyze(extractedText)}>
            <Text style={styles.buttonText}>Analyze Answer</Text>
          </TouchableOpacity>
        )}

        {score && extractedText?.length > 0 ? (
          <View style={styles.extractedTextContainer}>
            <Text style={styles.extractedText}> Score is {score}</Text>
          </View>
        ) : null}

        {extractedText ? (
          <View style={styles.extractedTextContainer}>
            <Text style={styles.extractedText}>{extractedText}</Text>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333333',
  },
  selectButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '100%',
    height: '40%',
    marginTop: 24,
    alignItems: 'center',
  },
  selectedImage: {
    width: '80%',
    height: '100%',
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  extractedTextContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingVertical: 12,
    backgroundColor: 'skyblue',
    opacity: 0.7,
    borderRadius: 40,
  },
  extractedText: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
  },
});

export default WrittenExam;
