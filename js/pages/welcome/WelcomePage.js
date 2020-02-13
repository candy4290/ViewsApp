/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export function WelcomePage() {
  return (
    <View style={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
      <Text style={styles.text}>欢迎页</Text>
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
