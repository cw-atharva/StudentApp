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
    analyzeAnswer(question, answer);
  };

  const analyzeAnswer = async (question, answer) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: `Question: ${question}\nAnswer: ${answer}\n`,
          max_tokens: 100,
          temperature: 0.3,
          n: 1,
          stop: null,
          log_level: 'info',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer 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',
          },
        },
      );

      const completion = response.data.choices[0].text.trim();
      const scoreStart = completion.indexOf('Score:') + 'Score:'.length;
      const scoreEnd = completion.indexOf('\n', scoreStart);
      const score = parseFloat(completion.slice(scoreStart, scoreEnd).trim());
      const normalizedScore = 5 + score * 5;
      setScore(normalizedScore);
      console.log(normalizedScore, '===================');
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleAnalyze = async () => {
    const question = 'what is facebook?';
    const answer =
      'Facebook is a social networking platform founded by Mark Zuckerberg, along with his college roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes. It was launched in February 2004 initially as "Thefacebook" and later renamed as Facebook. Facebook is one of the largest and most popular social media platforms in the world.';

    const result = await analyzeAnswer(question, answer);
    console.log(result, '==================');
    setScore(result);
  };

  return (
    <ScrollView
      style={{paddingVertical: -350, backgroundColor: 'white', flexGrow: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {route.params.examData[route.params.index]}
        </Text>

        {
          <TouchableOpacity
            style={styles.selectButton}
            onPress={handleImageSelection}>
            <Text style={styles.buttonText}>Select Photo</Text>
          </TouchableOpacity>
        }

        <Text>Please upload photo of your written answer</Text>

        {score ? (
          <View style={styles.extractedTextContainer}>
            <Text style={styles.extractedText}>{score}</Text>
          </View>
        ) : null}

        {extractedText && (
          <TouchableOpacity style={styles.selectButton} onPress={handleAnalyze}>
            <Text style={styles.buttonText}>Analyze Answer</Text>
          </TouchableOpacity>
        )}
        {/* 
        {selectedImage && (
          <View style={styles.imageContainer}>
            <Image
              source={{uri: selectedImage}}
              style={styles.selectedImage}
              resizeMode="contain"
            />
          </View>
        )} */}

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
