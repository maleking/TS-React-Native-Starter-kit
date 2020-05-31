import * as React from 'react';
import {TextProps, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

import StyledText from './StyledText';

type Props = TextProps & {
  children: React.ReactNode;
};

const ButtonOutlineRedText = (props: Props) => {
  const {
    colors: {error},
  } = useTheme();
  return (
    <StyledText
      textColor={error}
      family="medium"
      {...props}
      style={[styles.text, props.style]}
    />
  );
};

export default ButtonOutlineRedText;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontStyle: 'normal',
    letterSpacing: 0,
  },
});
