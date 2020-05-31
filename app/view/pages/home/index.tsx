import React from 'react';
import {StyleSheet} from 'react-native';

import {View} from 'view/components';

const Home: React.FC = ({}) => {
  return <View style={styles.mainContainer} />;
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {flex: 1,backgroundColor:'purple'},

});
