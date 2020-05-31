import React, {useState, useEffect} from 'react';
import {StatusBar, View, StyleSheet, Platform} from 'react-native';
import {Snackbar} from 'react-native-paper';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import Orientation from 'react-native-orientation-locker';

import Navigator from 'routes';
import {setI18nConfig, t} from 'i18n';
import {selectNetwork} from 'store/selectors/network';

setI18nConfig({isRTL: true, name: 'fa'});
enableScreens();
const isAndroid = Platform.OS === 'android';

const App = () => {
  const {isConnected} = useSelector(selectNetwork);
  const [isMessageDismissed, dismissMessage] = useState(false);
  useEffect(
    () => {
      if (isConnected) {
        dismissMessage(false);
      }
    },
    [isConnected],
  );

  useEffect(() => {
    if (isAndroid) StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('rgba(0,0,0,0)');
    StatusBar.setBarStyle('dark-content');
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Navigator />

        <Snackbar
          style={styles.snackbar}
          visible={!isConnected && !isMessageDismissed}
          onDismiss={() => {}}
          duration={Number.POSITIVE_INFINITY}
          action={{
            label: t('app.ok'),
            onPress: () => {
              dismissMessage(true);
            },
          }}>
          {t('app.offlineMessage')}
        </Snackbar>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  snackbar: {backgroundColor: '#eb5f54'},
});

export default App;
