/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import actions from '../../action';
import {Button} from 'react-native-elements';
function HomePage({navigation, onThemeChange}) {
  return (
    <View style={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
      <Text style={styles.text}>HOME PAGE</Text>
      <Button
        title={'go to MyPage'}
        onPress={() => {
          navigation.navigate('My', {name: '动态'});
        }}
      />
      <Button
        title={'修改主题'}
        onPress={() => {
          onThemeChange('red');
        }}
      />
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
  onThemeChange: theme => dispatch(actions.onThemeChange(theme)),
});
export default connect(
  null,
  mapDispatchToProps,
)(HomePage);
