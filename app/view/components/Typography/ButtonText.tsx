import * as React from 'react';
import {TextProps, StyleSheet} from 'react-native';
import StyledText from './StyledText';

type Props = TextProps & {
  children: React.ReactNode;
};

const ButtonText = (props: Props) => {
  return (
    <StyledText
      family="bold"
      textColor="white"
      {...props}
      style={[styles.text, props.style]}
    />
  );
};

export default ButtonText;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontStyle: 'normal',
    letterSpacing: 0,
  },
});
