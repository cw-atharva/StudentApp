import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import CommonCarousal from '../common/CommonCarousal';
import {exam2Data} from '../data/exam2Data';
import {examData} from '../data/examdata';
import {examQuestion} from '../data/examquestion';
import {webQuestion} from '../data/webQuestion';
import {WrittenExamData} from '../data/writtenExamData';
import {writtenQuestion} from '../data/writtenQuestion';

function ExamScreen({navigation}) {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <CommonCarousal
        data={examData}
        heading={'CSE Core Exams'}
        navigation={navigation}
        screenName={'ExamQuestion'}
        examData={examQuestion}
      />
      <CommonCarousal
        data={exam2Data}
        heading={'Web Technology'}
        navigation={navigation}
        screenName={'ExamQuestion'}
        examData={webQuestion}
      />
      <CommonCarousal
        data={WrittenExamData}
        heading={'Written Exams'}
        navigation={navigation}
        screenName={'WrittenExam'}
        examData={writtenQuestion}
      />
    </ScrollView>
  );
}

export default ExamScreen;
