import React from 'react';
import {ViewStyle} from 'react-native';

import {View, StyleSheet} from 'view/components';

interface Props {
  progress: number;
  style?: ViewStyle;
  progressColor?: string;
  bgColor?: string;
}

const ProgressBar: React.FC<Props> = ({
  style = {},
  progress = 0,
  progressColor = '#c93126',
  bgColor = 'rgba(255, 255, 255, 0.5)',
}) => {
  const percentage = `${progress}%`;
  return (
    <View style={[styles.progressContainer, {backgroundColor: bgColor}, style]}>
      <View
        style={[
          styles.progress,
          {width: percentage, backgroundColor: progressColor},
        ]}
      />
    </View>
  );
};
export default ProgressBar;
const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 2,
    borderRadius: 20,
  },
  progress: {height: '100%', borderRadius: 20},
});
