import * as React from 'react';
import {TextProps, StyleSheet} from 'react-native';
import StyledText from './StyledText';

type Props = TextProps & {
  children: React.ReactNode;
};

const Dana8Text = (props: Props) => {
  return <StyledText {...props} style={[styles.text, props.style]} />;
};

export default Dana8Text;

const styles = StyleSheet.create({
  text: {
    fontSize: 8,
    fontStyle: 'normal',
    lineHeight: 30,
    letterSpacing: 0,
  },
});
