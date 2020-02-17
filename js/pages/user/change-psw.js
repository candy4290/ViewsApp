import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
export function ChangePswPage({navigation}) {
  function changePsw() {
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  }
  return (
    <View>
      <Text>修改密码</Text>
      <Button onPress={changePsw}>提交</Button>
    </View>
  );
}
