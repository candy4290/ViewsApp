import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Button} from 'react-native-elements';
import {width, unitWidth, unitHeight} from '../../utils/device';
export function MyPage({route, navigation}) {
  console.log(width);
  //   const {name} = route.params;
  return (
    <ImageBackground
    style={{width: 375 * unitWidth, height: 213.5 * unitHeight}}
    source={require('../../../assets/imgs/my/myTopBg.png')} />

  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
});
