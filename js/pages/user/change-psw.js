import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SelfButton from '../../components/SelfButton';
import {connect} from 'react-redux';
import actions from '../../action';
import HeaderBack from '../../components/HeaderBack';

function ChangePswPage({navigation, onLoggedChange}) {
  navigation.setOptions({headerShown: true, headerTitle: '修改密码', headerTitleAlign: 'center',
  headerLeft: () => {
    return <HeaderBack navigation={navigation} />
  }});
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isConfirmFocused, setIsConfirmFocused] = useState(false);

  useEffect(() => {
    console.log('componentDidMount: 组件加载后组件加载');
    return () => {
      console.log('componentWillUnmount: 组件卸载， 做一些清理工作');
    };
  }, []);

  function changePsw() {
    // 模拟修改成功
    console.log('密码：' + password + ',确认密码：' + confirmPassword);
    if (password === confirmPassword) {
      onLoggedChange(true);
    }
  }
  return (
    <SafeAreaView style={styles.pageContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.topSpliter} />
      <View style={styles.mainContainer}>
        <Input
          containerStyle={{marginTop: 20}}
          secureTextEntry={!showPassword}
          value={password}
          placeholder="输入密码"
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          leftIcon={
            <Icon name="lock" size={20} color="rgba(101,104,134,0.9)" />
          }
          leftIconContainerStyle={{
            marginLeft: 10,
            marginRight: 25,
          }}
          rightIcon={
            !isFocused ? (
              <></>
            ) : showPassword ? (
              <TouchableOpacity
                onPress={() => {
                  setShowPassword(val => {
                    return !val;
                  });
                }}>
                <FeatherIcon
                  name="eye"
                  size={20}
                  color="rgba(101,104,134,0.9)"
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setShowPassword(val => {
                    return !val;
                  });
                }}>
                <FeatherIcon
                  name="eye-off"
                  size={20}
                  color="rgba(101,104,134,0.9)"
                />
              </TouchableOpacity>
            )
          }
          inputStyle={{color: '#000'}}
          placeholderTextColor="#B9BBDA"
          onChangeText={value => {
            setPassword(value);
          }}
        />
        <Input
          containerStyle={{marginTop: 15}}
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          placeholder="再次输入密码"
          onFocus={() => {
            setIsConfirmFocused(true);
          }}
          onBlur={() => {
            setIsConfirmFocused(false);
          }}
          leftIcon={
            <Icon name="lock" size={20} color="rgba(101,104,134,0.9)" />
          }
          leftIconContainerStyle={{
            marginLeft: 10,
            marginRight: 25,
          }}
          rightIcon={
            !isConfirmFocused ? (
              <></>
            ) : showConfirmPassword ? (
              <TouchableOpacity
                onPress={() => {
                  setShowConfirmPassword(val => {
                    return !val;
                  });
                }}>
                <FeatherIcon
                  name="eye"
                  size={20}
                  color="rgba(101,104,134,0.9)"
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setShowConfirmPassword(val => {
                    return !val;
                  });
                }}>
                <FeatherIcon
                  name="eye-off"
                  size={20}
                  color="rgba(101,104,134,0.9)"
                />
              </TouchableOpacity>
            )
          }
          inputStyle={{color: '#000'}}
          placeholderTextColor="#B9BBDA"
          onChangeText={value => {
            setConfirmPassword(value);
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
          onPress={changePsw}
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

const mapDispatchToProps = dispatch => ({
  onLoggedChange: isLogged => dispatch(actions.onLoggedChange(isLogged)),
});
export default connect(
  null,
  mapDispatchToProps,
)(ChangePswPage);
