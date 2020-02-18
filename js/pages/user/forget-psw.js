import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import SelfButton from '../../components/SelfButton';

export function ForgetPswPage({navigation}) {
  const [timer, setTimer] = useState(null);
  const [secondCount, setSecondCount] = useState(59);
  const [mobile, setMobile] = useState(null);
  const [code, setCode] = useState(null);
  useEffect(() => {
    console.log('componentDidMount: 组件加载后');
    navigation.setOptions({headerShown: true, headerTitle: '忘记密码'});
    return () => {
      console.log('componentDidMount: 组件卸载后');
      /* 组件卸载，清除定时器 */
      timer && clearInterval(timer);
    };
  }, []);

  function goChangePsw() {
    // 验证成功，跳转修改密码页
    console.log('mobile:' + mobile + ',code:' + code);
    navigation.navigate('ChangePsw');
  }
  /**
   * 获取验证码
   */
  function getCode() {
    setTimer(
      setInterval(() => {
        setSecondCount(v => {
          if (v <= 0) {
            setTimer(val => {
              clearInterval(val);
              return null;
            });
          }
          return v - 1;
        });
      }, 1000),
    );
  }
  return (
    <SafeAreaView style={styles.pageContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.topSpliter} />
      <View style={styles.mainContainer}>
        <Input
          value={mobile}
          containerStyle={{marginTop: 20}}
          placeholder="手机号码"
          leftIcon={
            <Icon name="mobile1" size={24} color="rgba(101,104,134,0.9)" />
          }
          leftIconContainerStyle={{marginLeft: 10, marginRight: 25}}
          inputStyle={{color: '#000'}}
          placeholderTextColor="#B9BBDA"
          onChangeText={phoneNumber => {
            const newText = phoneNumber.replace(/[^\d]+/, ''); // 将非数字替换为空
            setMobile(newText);
          }}
          keyboardType="numeric" /* 只弹起数字键盘 */
        />
        <Input
          containerStyle={{marginTop: 15}}
          secureTextEntry={true}
          placeholder="验证码"
          leftIcon={
            <Icon name="lock" size={24} color="rgba(101,104,134,0.9)" />
          }
          leftIconContainerStyle={{marginLeft: 10, marginRight: 25}}
          rightIcon={
            timer ? (
              <Text>{secondCount}s后重试</Text>
            ) : (
              <TouchableOpacity onPress={getCode}>
                <Text style={{color: '#B9BBDA'}}>获取验证码</Text>
              </TouchableOpacity>
            )
          }
          rightIconContainerStyle={{marginRight: 18.5}}
          inputStyle={{color: '#000'}}
          placeholderTextColor="#B9BBDA"
          onChangeText={value => {
            setCode(value);
          }}
        />
        <SelfButton
          title={'确定'}
          colors={['#72A4F6', '#63C0FE']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          buttonStyle={{
            height: 39,
            borderRadius: 17.5,
            justifyContent: 'center',
            width: '80%',
            marginLeft: '10%',
            marginTop: 46,
          }}
          onPress={goChangePsw}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  topSpliter: {
    height: 11,
    backgroundColor: '#EFEDEE',
    width: '100%',
  },
  mainContainer: {
    width: '90%',
  },
});
