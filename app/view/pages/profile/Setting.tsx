import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const Setting = () => {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]} />
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {flex: 1},
});
