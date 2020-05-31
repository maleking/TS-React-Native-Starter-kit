import React, {ReactElement} from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  TouchableOpacity,
} from 'react-native';
import { ParagraphExLightError} from 'view/components';
import H4 from './Typography/H4';

export interface Props extends TextInputProps {
  title?: string;
  disable?: boolean;
  style?: object;
  error?: string | undefined;
  clickableErrorText?: string | undefined;
  onErrorTextClick?: () => void;
  leftIcon?: undefined | ReactElement;
  rightIcon?: undefined | ReactElement;
  inputStyle?: object;
}

const Input: React.FC<Props> = ({
  style,
  disable,
  title,
  error,
  clickableErrorText,
  onErrorTextClick,
  inputStyle = {},
  leftIcon,
  rightIcon,
  ...inputProps
}) => {
  return (
    <View style={[styles.container, style]}>
      {title && (
        <H4 style={[styles.title, disable && styles.disableTextColor]}>
          {title}
        </H4>
      )}
      <View style={styles.row}>
        {rightIcon}
        <TextInput
          editable={!disable}
          style={[
            styles.textInput,
            inputStyle,
            !!error && styles.errorBorderColor,
          ]}
          placeholderTextColor="#cacaca"
          {...inputProps}
        />
        {leftIcon}
      </View>
      {error && (
        <View style={styles.helperContainer}>
          <View style={styles.triangle} />
          <View style={styles.helperText}>
            <ParagraphExLightError style={{color: 'white'}}>
              {error}
            </ParagraphExLightError>
            {clickableErrorText && (
              <TouchableOpacity onPress={onErrorTextClick}>
                <ParagraphExLightError
                  style={{fontWeight: 'bold', color: 'white'}}>
                  {' ' + clickableErrorText}
                </ParagraphExLightError>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default Input;
Input.defaultProps = {
  disable: false,
  placeholderTextColor: '#cacaca',
};
const styles = StyleSheet.create({
  container: {width: '100%'},
  errorBorderColor: {borderColor: '#ac1e1d'},
  disableTextColor: {color: '#eee'},
  textInput: {
    minWidth: 50,
    height: 48,
    textAlign: 'right',
    paddingHorizontal: 10,
    textAlignVertical: 'center',
    alignItems: 'center',
    fontFamily: 'Dana-Regular',
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    flex: 1,
  },
  title: {marginBottom: 8, marginLeft: 5},
  helperContainer: {
    height: 23,
    backgroundColor: '#ac1e1d',
    borderRadius: 7,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  helperText: {
    flexDirection: 'row',
  },
  triangle: {
    width: 0,
    height: 0,
    position: 'absolute',
    top: -7,
    left: 13,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 10,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ac1e1d',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderColor: '#4b4bf9',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
});
