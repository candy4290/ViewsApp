import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import actions from '../../action';

function ChangePswPage({navigation, onLoggedChange}) {
  function changePsw() {
    // 模拟修改成功
    onLoggedChange(true);
  }
  return (
    <View>
      <Text>修改密码</Text>
      <Button title="提交" onPress={changePsw} />
    </View>
  );
}
const mapDispatchToProps = dispatch => ({
  onLoggedChange: isLogged => dispatch(actions.onLoggedChange(isLogged)),
});
export default connect(
  null,
  mapDispatchToProps,
)(ChangePswPage);
