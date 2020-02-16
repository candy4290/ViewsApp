/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
export function MyPage({route, navigation}) {
  //   const {name} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
      <Text style={styles.text}>My PAGE</Text>
      <Button
        title={'前往子页面'}
        onPress={() => {
          navigation.navigate('C1', {name: '动态'});
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
