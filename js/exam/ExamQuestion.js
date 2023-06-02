import {StatusBar} from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {examQuestion} from '../data/examquestion';
import {useState, useRef, useEffect} from 'react';
import QuestionCard from './QuestionCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ExamQuestion({route, navigation}) {
  const [userScore, setUserScore] = useState(0);
  const [queSelected, setQueSelected] = useState(0);
  const [showText, setShowText] = useState('Show my score');

  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    checkUserSignup();
  }, []);

  const checkUserSignup = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData !== null) {
        // User has signed up and data is available
        // navigation.navigate('UserDetails');
        setUserInfo(userData);
      }
    } catch (error) {
      console.log('Error retrieving user data: ', error);
    }
  };

  const handleSignUp = () => {
    navigation.navigate('User');
  };

  const render = ({item, index}) => {
    return (
      <QuestionCard
        item={item}
        index={index}
        setUserScore={setUserScore}
        userScore={userScore}
        setQueSelected={setQueSelected}
        queSelected={queSelected}
      />
    );
  };
  if (userInfo) {
    return (
      <>
        <FlatList
          renderItem={render}
          data={route.params.examData[route.params.index]}
        />
        <Text
          style={{
            alignSelf: 'center',
            backgroundColor: 'skyblue',
            padding: 10,
            color: 'black',
          }}
          onPress={() => {
            queSelected === 10 && setShowText(`Your score is ${userScore}`);
          }}>
          {queSelected === 10
            ? showText
            : 'Please select all question to see score'}
        </Text>
      </>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Unlock Your Exam Success</Text>
        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>
          Join thousands of successful learners
        </Text>
        <Text style={styles.features}>
          - Unlimited access to exam materials{'\n'}- Personalized study
          recommendations{'\n'}- Progress tracking and analytics{'\n'}
        </Text>
      </View>
    );
  }
}

export default ExamQuestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroImage: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  features: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
