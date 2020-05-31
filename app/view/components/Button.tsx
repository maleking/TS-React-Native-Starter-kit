import React, {ReactElement} from 'react';
import {StyleSheet, TouchableOpacityProps, View} from 'react-native';
import {MText as Text, TouchableOpacity} from './index';
import ButtonText from './Typography/ButtonText';
import {useTheme} from 'react-native-paper';
// import Button10Text from './Typography/Button10Text';
import ButtonOutlineRedText from './Typography/ButtonOutlineRedText';

interface Props extends TouchableOpacityProps {
  color?: string;
  disabled?: boolean | undefined;
  height?: number;
  width?: number;
  icon?: ReactElement;
  title?: string;
  type?: 'Button10' | 'Button' | 'ButtonOutlineRed';
}
const Button: React.FC<Props> = ({
  style = {},
  onPress,
  disabled,
  height,
  width,
  icon,
  type = 'Button',
  title,
  children,
}) => {
  const {colors} = useTheme();

  let Text: ReactElement;
  switch (type) {
    case 'Button':
      Text = (
        <ButtonText style={{color: colors.background}}>{title}</ButtonText>
      );
      break;
    case 'Button10':
      Text = (
        <ButtonOutlineRedText style={{color: colors.background}}>{title}</ButtonOutlineRedText>
      );
      break;
    case 'ButtonOutlineRed':
      Text = (
        <ButtonOutlineRedText style={{color: colors.background}}>
          {title}
        </ButtonOutlineRedText>
      );
      break;
  }
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        // eslint-disable-next-line react-native/no-inline-styles
        {backgroundColor: disabled ? '#fbd8d7' : '#ec2927'},
        {height},
        {width},
        style,
      ]}>
      {Text}
      {icon && <View style={styles.icon}>{icon}</View>}
      {children}
    </TouchableOpacity>
  );
};
export default Button;

Button.defaultProps = {
  type: 'Button',
  disabled: false,
  height: 24,
  width: 78,
};
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginBottom: 8,
    borderRadius: 7,
    backgroundColor: '#ec2927',
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
  },
  icon: {marginHorizontal: 1},
});
