/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
export function WelcomePage({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
      <Text style={styles.text}>欢迎页</Text>
      <Button
        title={'go to MyPage'}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
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
