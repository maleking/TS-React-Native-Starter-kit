import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import HomeScreen from 'view/pages/home';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
