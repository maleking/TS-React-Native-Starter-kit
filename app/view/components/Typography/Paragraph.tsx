import * as React from 'react';
import {TextProps, StyleSheet} from 'react-native';
import StyledText from './StyledText';

type Props = TextProps & {
  children: React.ReactNode;
};

const Paragraph = (props: Props) => (
  <StyledText {...props} style={[styles.text, props.style]} />
);

export default Paragraph;

const styles = StyleSheet.create({
  text: {
    fontSize: 8,
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0,
  },
});
