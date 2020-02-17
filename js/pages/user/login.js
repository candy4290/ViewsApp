/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Button, Input, CheckBox, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {height} from '../../utils/device';
// import axios from '../../axios';
import {doSave, doRemove, doGet} from '../../storage';
export function LoginPage({navigation}) {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    console.log('componentDidMount: 组件加载后');
    getUserNameAndPassword();
    return () => {
      console.log('componentWillUnmount: 组件卸载， 做一些清理工作');
    };
  }, []);
  function login() {
    console.log('用户名：' + userName + '，密码：' + password);
    // axios
    //   .post('/user/login', {
    //     userName,
    //     password,
    //   })
    //   .then(rsp => {
    //     console.log(rsp);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // 模拟登录成功
    saveUserNameAndPassword();
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  }

  function doChecked() {
    setChecked(!checked);
  }

  function doShowPassword() {
    setShowPassword(!showPassword);
  }

  function changeUserName(text) {
    setUserName(text);
  }

  function changePassword(text) {
    setPassword(text);
  }

  function forgetPassword() {
    console.log('忘记密码');
  }
  /**
   * 登录成功后如果记住密码将用户名密码保存至本地
   * 否则将用户名和密码从本地删除
   */
  function saveUserNameAndPassword() {
    if (checked) {
      doSave(
        'loginInfo',
        JSON.stringify({
          userName: userName,
          password: password,
        }),
      );
    } else {
      doRemove('loginInfo');
    }
  }
  /**
   * 从本地获取用户名及密码
   */
  function getUserNameAndPassword() {
    let userInfo;
    doGet('loginInfo', (error, value) => {
      userInfo = value;
      if (userInfo) {
        userInfo = JSON.parse(userInfo);
        setChecked(true);
        setUserName(userInfo.userName);
        setPassword(userInfo.password);
      }
    });
  }

  return (
    <ImageBackground
      source={require('../../../assets/imgs/login/timg.jpeg')}
      style={loginStyle.backgroundImage}>
      <StatusBar barStyle="light-content" />
      <View style={loginStyle.loginPage}>
        <View style={{width: '90%'}}>
          <View>
            <Input
              value={userName}
              placeholder="请输入用户名"
              leftIcon={<Icon name="user" size={24} color="white" />}
              leftIconContainerStyle={{marginLeft: 0, marginRight: 10}}
              inputStyle={{color: 'white'}}
              placeholderTextColor="white"
              onChangeText={changeUserName}
              // errorMessage="invalid"
              // errorStyle={{ position:'absolute', bottom: -25, left: 25 }}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Input
              secureTextEntry={!showPassword}
              value={password}
              placeholder="请输入密码"
              leftIcon={<Icon name="lock" size={24} color="white" />}
              leftIconContainerStyle={{
                marginLeft: 0,
                marginRight: 10,
              }}
              rightIcon={
                showPassword ? (
                  <TouchableOpacity onPress={doShowPassword}>
                    <FeatherIcon name="eye" size={24} color="white" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={doShowPassword}>
                    <FeatherIcon name="eye-off" size={24} color="white" />
                  </TouchableOpacity>
                )
              }
              inputStyle={{color: 'white'}}
              placeholderTextColor="white"
              onChangeText={changePassword}
            />
          </View>
          <View style={loginStyle.operatorContainer}>
            <CheckBox
              title="记住密码"
              checked={checked}
              containerStyle={{
                backgroundColor: 'none',
                borderWidth: 0,
                paddingLeft: 0,
              }}
              textStyle={{color: '#fff'}}
              onPress={doChecked}
            />
            <TouchableOpacity onPress={forgetPassword}>
              <Text style={{color: '#fff'}}>忘记密码?</Text>
            </TouchableOpacity>
          </View>
          <Button
            title="立即登录"
            onPress={login}
            buttonStyle={loginStyle.loginButton}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
const loginStyle = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  loginPage: {
    height: height,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  operatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#fff',
    paddingRight: 10,
  },
  loginButton: {
    borderRadius: 50,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
});
