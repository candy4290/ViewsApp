/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
export function HomePage({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
      <Text style={styles.text}>HOME PAGE</Text>
      <Button
        title={'go to MyPage'}
        onPress={() => {
          navigation.navigate('My', {name: '动态'});
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
});
