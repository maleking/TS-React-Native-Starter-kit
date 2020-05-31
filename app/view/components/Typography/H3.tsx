import * as React from 'react';
import {TextProps, StyleSheet} from 'react-native';
import StyledText from './StyledText';

type Props = TextProps & {
  children: React.ReactNode;
};

const H3 = (props: Props) => (
  <StyledText {...props} family="demiBold" style={[styles.text, props.style]} />
);

export default H3;

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    fontStyle: 'normal',
    letterSpacing: 0,
  },
});
