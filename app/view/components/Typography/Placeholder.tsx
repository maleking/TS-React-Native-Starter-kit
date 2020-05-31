import * as React from 'react';
import {TextProps, StyleSheet} from 'react-native';
import StyledText from './StyledText';
import {useTheme} from 'react-native-paper';

type Props = TextProps & {
  children: React.ReactNode;
};

const Placeholder = (props: Props) => {
  const {
    colors: {placeholder},
  } = useTheme();
  return (
    <StyledText
      textColor={placeholder}
      {...props}
      style={[styles.text, props.style]}
    />
  );
};

export default Placeholder;

const styles = StyleSheet.create({
  text: {
    fontSize: 8,
    fontStyle: 'normal',
    letterSpacing: 0,
  },
});
