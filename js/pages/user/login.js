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
import {connect} from 'react-redux';
import actions from '../../action';
import LinearGradient from 'react-native-linear-gradient';
import SelfButton from '../../components/SelfButton';
function LoginPage({navigation, onLoggedChange}) {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    console.log('componentDidMount: 组件加载后组件加载');
    // navigation.setOptions({headerShown: false});
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
    onLoggedChange(true);
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
    navigation.navigate('FogetPsw');
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

  function changeFoused() {
    setIsFocused(true);
  }

  function changeNotFoused() {
    setIsFocused(false);
  }

  return (
    <LinearGradient
      colors={['#8AB3D2', '#5B7DAE']}
      style={loginStyle.backgroundImage}>
      <StatusBar barStyle="light-content" />
      <View style={loginStyle.loginPage}>
        <View style={loginStyle.loginContainer}>
          <View>
            <Input
              value={userName}
              placeholder="请输入用户名"
              leftIcon={
                <Icon name="user" size={24} color="rgba(101,104,134,0.9)" />
              }
              leftIconContainerStyle={{marginLeft: 0, marginRight: 10}}
              inputStyle={{color: '#000'}}
              placeholderTextColor="#B9BBDA"
              onChangeText={changeUserName}
              // errorMessage="invalid"
              // errorStyle={{ position:'absolute', bottom: -25, left: 25 }}
            />
            <Input
              containerStyle={{marginTop: 15}}
              secureTextEntry={!showPassword}
              value={password}
              placeholder="请输入密码"
              onFocus={changeFoused}
              onBlur={changeNotFoused}
              leftIcon={
                <Icon name="lock" size={24} color="rgba(101,104,134,0.9)" />
              }
              leftIconContainerStyle={{
                marginLeft: 0,
                marginRight: 10,
              }}
              rightIcon={
                !isFocused ? (
                  <></>
                ) : showPassword ? (
                  <TouchableOpacity onPress={doShowPassword}>
                    <FeatherIcon
                      name="eye"
                      size={24}
                      color="rgba(101,104,134,0.9)"
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={doShowPassword}>
                    <FeatherIcon
                      name="eye-off"
                      size={24}
                      color="rgba(101,104,134,0.9)"
                    />
                  </TouchableOpacity>
                )
              }
              inputStyle={{color: '#000'}}
              placeholderTextColor="#B9BBDA"
              onChangeText={changePassword}
            />
            <View style={loginStyle.operatorContainer}>
              <CheckBox
                title="记住密码"
                checked={checked}
                containerStyle={{
                  backgroundColor: 'none',
                  borderWidth: 0,
                  paddingLeft: 0,
                }}
                uncheckedColor={'#4994ED'}
                textStyle={{color: '#4994ED', fontSize: 11}}
                onPress={doChecked}
              />
              <TouchableOpacity onPress={forgetPassword}>
                <Text style={{color: '#4994ED', fontSize: 11}}>忘记密码?</Text>
              </TouchableOpacity>
            </View>
            <SelfButton
              title={'立 即 登 录'}
              colors={['#72A4F6', '#63C0FE']}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}
              onPress={login}
            />
          </View>
        </View>
        <View style={loginStyle.subBottom1} />
        <View style={loginStyle.subBottom2} />
        <View style={loginStyle.subBottom3} />
      </View>
    </LinearGradient>
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
  loginContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 120,
    paddingBottom: 40,
    marginTop: '-10%',
  },
  subBottom1: {
    width: '75%',
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.7)',
    height: 11,
    marginTop: -5.5,
  },
  subBottom2: {
    width: '70%',
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.3)',
    height: 10,
    marginTop: -5,
  },
  subBottom3: {
    width: '65%',
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.1)',
    height: 9,
    marginTop: -4.5,
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
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});
const mapDispatchToProps = dispatch => ({
  onLoggedChange: isLogged => dispatch(actions.onLoggedChange(isLogged)),
});
export default connect(
  null,
  mapDispatchToProps,
)(LoginPage);
