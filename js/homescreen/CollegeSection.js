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

const render = ({item, index}) => {
  const {image, collegeName, url} = item || {};

  const openGoogle = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity
      style={{alignItems: 'center', margin: 16}}
      onPress={openGoogle}>
      <Image source={image} style={{height: 100, width: 100}} />
      <Text style={{marginTop: 4}}>{collegeName}</Text>
    </TouchableOpacity>
  );
};

function CollegeSection(props) {
  const {data, heading} = props;
  return (
    <View style={{marginTop: 20}}>
      <Text
        style={{
          marginLeft: 16,
          marginBottom: 8,
          fontSize: 22,
          lineHeight: 28,
          color: 'black',
        }}>
        {heading}
      </Text>
      <FlatList data={data} renderItem={render} numColumns={3} />
    </View>
  );
}

export default CollegeSection;
