import React from 'react';
import {StyleSheet, TouchableOpacityProps, View, ViewStyle} from 'react-native';
import {MText as Text} from './index';

interface Props extends TouchableOpacityProps {
  title?: string;
  style?: ViewStyle;
}
const Divider: React.FC<Props> = ({style = {}, title = 'button'}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.line} />
      {!!title && (
        <Text type="h3" style={styles.text}>
          {title}
        </Text>
      )}
      <View style={styles.line} />
    </View>
  );
};
export default Divider;

Divider.defaultProps = {
  title: '',
  style: {},
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  line: {height: 1, backgroundColor: '#707070', flex: 1},
  text: {marginHorizontal: 8},
});
