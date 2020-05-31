import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {StyleSheet} from 'view/components';
const Search = () => {
  return <SafeAreaView style={styles.safeAreaView} />;
};
const styles = StyleSheet.create({
  input: {marginTop: 12},
  safeAreaView: {flex: 1, backgroundColor: 'white'},
});
export default Search;
