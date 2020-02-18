import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
export function ForgetPswPage({navigation}) {
  function goChangePsw() {
    navigation.navigate('ChangePsw');
  }
  return (
    <View>
      <Text>忘记密码</Text>
      <Button title="确定" onPress={goChangePsw} />
    </View>
  );
}
