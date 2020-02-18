import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function HeaderBack({navigation}) {
    return (
    <TouchableOpacity style={{paddingLeft: 8, paddingRight: 8}} onPress={() => {
        navigation.goBack();
    }}>
      <Icon name="left" size={19} />
    </TouchableOpacity>
    )
}
