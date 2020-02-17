import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
export function ForgetPswPage({navigation}) {
  function goChangePsw() {}
  return (
    <View>
      <Text>忘记密码</Text>
      <Button onPress={goChangePsw}>确定</Button>
    </View>
  );
}
