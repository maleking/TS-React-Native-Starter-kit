import React from 'react';
import FastImage, {FastImageProperties} from 'react-native-fast-image';

const Image: React.FC<FastImageProperties> = ({...props}) => (
  <FastImage {...props} />
);
export default Image;
