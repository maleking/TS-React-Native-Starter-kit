import * as React from 'react';
import {TextProps, StyleSheet} from 'react-native';
import StyledText from './StyledText';

type Props = TextProps & {
  children: React.ReactNode;
};

const H4 = (props: Props) => (
  <StyledText {...props} family="medium" style={[styles.text, props.style]} />
);

export default H4;

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    fontStyle: 'normal',
    letterSpacing: 0,
  },
});
