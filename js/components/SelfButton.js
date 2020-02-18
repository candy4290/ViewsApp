import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'react-native-elements';
export default function SelfButton({
  colors,
  start,
  end,
  textStyle,
  buttonStyle,
  title,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        style={buttonStyle || styles.button}>
        <Text style={textStyle || styles.textStyle}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
  },
});
