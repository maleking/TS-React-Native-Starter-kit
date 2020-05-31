import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry, I18nManager} from 'react-native';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Provider as PaperProvider} from 'react-native-paper';
import {enableScreens} from 'react-native-screens';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {persistor, store} from 'store/index';

import App from './app/App';
import themes from 'view/style/themes';
import Loading from 'view/components/Loading';

import {name as appName} from './app.json';

enableScreens();
I18nManager.forceRTL(true);

const Elegant = () => {
  const [theme, setTheme] = React.useState('light');

  function toggleTheme() {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  }

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme],
  );

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <PaperProvider
          theme={themes[theme]}
          settings={{
            icon: props => <MaterialIcons {...props} />,
          }}>
          <App />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Elegant);
