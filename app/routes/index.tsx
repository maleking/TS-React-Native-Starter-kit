import React, {useEffect} from 'react';
import color from 'color';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {useTheme} from 'react-native-paper';

import Home from './home';
import Profile from './profile';
import Search from './search';
import AuthNavigator from 'routes/auth';

import {Linking} from 'react-native';
import {useDispatch} from 'react-redux';
import {isAuthenticated} from 'store/reducers/user';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const _checkDeepLinking = (event, dispatch) => {
  let {url} = event;
  let params = url.split('?')[1];
  if (params === 'type=plan&success=true') {
    console.log('sucess');
    dispatch(isAuthenticated());
  } else if (params === 'type=plan&success=false') {
    console.log('error');
  }
};
const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#c93126',
        inactiveTintColor: color('#c93126')
          .alpha(0.2)
          .rgb()
          .string(),
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
const Router = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  useEffect(() => {
    Linking.addEventListener('url', event =>
      _checkDeepLinking(event, dispatch),
    );
    return () => {
      Linking.removeEventListener('url', event =>
        _checkDeepLinking(event, dispatch),
      );
    };
  }, []);

  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={TabNavigation} />
        <Stack.Screen name="Login" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
