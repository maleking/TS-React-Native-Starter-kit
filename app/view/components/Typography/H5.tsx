import * as React from 'react';
import {TextProps, StyleSheet} from 'react-native';
import StyledText from './StyledText';

type Props = TextProps & {
  children: React.ReactNode;
};

const H5 = (props: Props) => (
  <StyledText {...props} family="medium" style={[styles.text, props.style]} />
);

export default H5;

const styles = StyleSheet.create({
  text: {
    fontSize: 8,
    fontStyle: 'normal',
    letterSpacing: 0,
  },
});
