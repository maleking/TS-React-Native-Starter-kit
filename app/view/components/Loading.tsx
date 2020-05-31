import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

import colors from 'view/style/theme';
interface Props {
  size?: number | 'small' | 'large' | undefined;
  color?: string;
}
const Loading: React.FC<Props> = ({size, color}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
Loading.defaultProps = {
  color: colors.colors.primary,
  size: 'small',
};
export default Loading;
