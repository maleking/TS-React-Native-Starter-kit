import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import SearchScreen from 'view/pages/search';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
