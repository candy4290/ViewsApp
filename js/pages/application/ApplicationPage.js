/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {doSave, doRemove, doGet} from '../../storage';
export function ApplicationPage({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
      <Text style={styles.text}>APPLICATION PAGE</Text>
      <Button
        title={'go to MyPage'}
        onPress={() => {
          navigation.navigate('My', {name: '动态'});
        }}
      />
      <Button
        title={'存储token'}
        onPress={() => {
          doSave('Access-Token', 'DSN');
        }}
      />
      <Button
        title={'获取token'}
        onPress={() => {
          doGet('Access-Token');
        }}
      />
      <Button
        title={'删除token'}
        onPress={() => {
          doRemove('Access-Token');
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
