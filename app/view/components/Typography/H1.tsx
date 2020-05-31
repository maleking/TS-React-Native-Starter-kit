import * as React from 'react';
import {TextProps, StyleSheet} from 'react-native';
import StyledText from './StyledText';

type Props = TextProps & {
  children: React.ReactNode;
};

const H1 = (props: Props) => (
  <StyledText {...props} family="bold" style={[styles.text, props.style]} />
);

export default H1;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontStyle: 'normal',
    letterSpacing: 0,
  },
});
