import * as React from 'react';
import {TextProps, StyleSheet} from 'react-native';
import StyledText from './StyledText';

type Props = TextProps & {
  children: React.ReactNode;
};

const H2 = (props: Props) => (
  <StyledText {...props} family="demiBold" style={[styles.text, props.style]} />
);

export default H2;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontStyle: 'normal',
    letterSpacing: 0,
  },
});
