import React from 'react';
import {ScrollView as RNScrollView, ScrollViewProperties} from 'react-native';
import {withTheme, Theme} from 'react-native-paper';

interface Props extends ScrollViewProperties {
  theme: Theme;
}
const ScrollView: React.FC<Props> = props => {
  const {colors} = props.theme;

  return (
    <RNScrollView
      contentContainerStyle={{backgroundColor: colors.background}}
      {...props}
    />
  );
};
export default withTheme(ScrollView);
