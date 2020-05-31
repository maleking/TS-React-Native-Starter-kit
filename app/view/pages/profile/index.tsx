import React from 'react';
import {View} from 'react-native';


import Profile from './Profile';

export default ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Profile></Profile>
    </View>
  );
};
