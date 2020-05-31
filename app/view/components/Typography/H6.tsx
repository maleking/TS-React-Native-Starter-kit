import * as React from 'react';
import {TextProps, StyleSheet} from 'react-native';
import StyledText from './StyledText';

type Props = TextProps & {
  children: React.ReactNode;
};

const H6 = (props: Props) => (
  <StyledText {...props} family="medium" style={[styles.text, props.style]} />
);

export default H6;

const styles = StyleSheet.create({
  text: {
    fontSize: 6,
    fontStyle: 'normal',
    letterSpacing: 0,
  },
});
