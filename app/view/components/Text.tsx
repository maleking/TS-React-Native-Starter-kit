import React from 'react';
import {TextProps, StyleSheet, Text as RNText} from 'react-native';
interface Props extends TextProps {
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'buttonWhiteText'
    | 'outlineButtonRedText'
    | 'button'
    | 'dana8Pt'
    | 'paragraph'
    | 'placeHolder';
}

const Text: React.FC<Props> = ({type = 'h1', style = {}, ...props}) => {
  return (
    <RNText
      {...props}
      style={[
        props.style,
        styles.text,
        type === 'h1' && styles.h1,
        type === 'h2' && styles.h2,
        type === 'h3' && styles.h3,
        type === 'h4' && styles.h4,
        type === 'h5' && styles.h5,
        type === 'h6' && styles.h6,
        type === 'buttonWhiteText' && styles.buttonWhiteText,
        type === 'outlineButtonRedText' && styles.outlineButtonRedText,
        type === 'button' && styles.button,
        type === 'dana8Pt' && styles.dana8Pt,
        type === 'paragraph' && styles.paragraph,
        styles.extraLightParagraphClikable,
        style,
      ]}
    />
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {writingDirection: 'rtl'},
  buttonWhiteText: {
    fontFamily: 'Dana-Bold',
    fontSize: 14,
    fontStyle: 'normal',
    letterSpacing: 0,
  },
  h1: {
    fontFamily: 'Dana-Bold',
    fontSize: 12,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#000000',
  },
  h2: {
    fontFamily: 'Dana',
    fontSize: 12,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#000000',
  },
  outlineButtonRedText: {
    fontFamily: 'Dana-Medium',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#f16361',
  },
  button: {
    fontFamily: 'Dana-Bold',
    fontSize: 10,
    fontStyle: 'normal',
    letterSpacing: 0,
    color: 'white',
  },
  h3: {
    fontFamily: 'Dana-DemiBold',
    fontSize: 10,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#000000',
  },
  h4: {
    fontFamily: 'Dana-Medium',
    fontSize: 10,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#000000',
  },
  h5: {
    fontFamily: 'Dana-Medium',
    fontSize: 8,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#000000',
  },
  h6: {
    fontFamily: 'Dana-Medium',
    fontSize: 6,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#000000',
  },
  dana8Pt: {
    fontFamily: 'Dana-Regular',
    fontSize: 8,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 30,
    letterSpacing: 0,
    color: '#000000',
  },

  paragraph: {
    fontFamily: 'Dana-Regular',
    fontSize: 8,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0,
    color: '#000000',
  },

  extraLightParagraphClikable: {
    fontFamily: 'Dana-ExtraLight',
    fontSize: 8,
    fontWeight: '200',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#4c4cf9',
  },
});
