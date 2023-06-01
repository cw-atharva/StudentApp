import {StatusBar} from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

function CommonCarousal(props) {
  const {data, heading, navigation, screenName, examData} = props || {};

  const render = (data, index) => {
    const {image, subjectName, url} = data.item || {};

    const openGoogle = () => {
      Linking.openURL(url);
    };

    return (
      <View style={{marginLeft: 16}}>
        <TouchableOpacity
          onPress={() => {
            if (navigation) {
              navigation?.navigate('ExamSection', {
                screen: screenName,
                params: {
                  examData: examData,
                  index: data.index,
                },
              });
            }

            if (url) {
              openGoogle();
            }
          }}>
          <Image
            source={image}
            style={{width: 302, height: 162}}
            // resizeMode="contain"
          />
          <Text style={{fontSize: 13}}>{subjectName}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{marginTop: 16, marginBottom: 20}}>
      <Text
        style={{marginBottom: 5, marginLeft: 16, fontSize: 22, lineHeight: 28}}>
        {heading}
      </Text>
      <FlatList
        data={data}
        renderItem={render}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default CommonCarousal;
