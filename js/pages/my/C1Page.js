/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import action from '../../action';
function C1Page({route, onTarbarVisible}) {
  //   const {name} = route.params;
  useEffect(() => {
    console.log('componentDidMount: 组件加载后');
    onTarbarVisible(false);
    return () => {
      console.log('componentWillUnmount: 组件卸载， 做一些清理工作');
      onTarbarVisible(true);
    };
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
      <Text style={styles.text}>C1Page</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
});
const mapDispatchToProps = dispatch => ({
  onTarbarVisible: visible => dispatch(action.onTarbarVisible(visible)),
});
export default connect(
  null,
  mapDispatchToProps,
)(C1Page);
