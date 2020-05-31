import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {useTheme} from 'react-native-paper';

import ProfileScreen from 'view/pages/profile';

const Stack = createNativeStackNavigator();



const StackNavigator = () => {
  const {colors} = useTheme();

  return (
    <SafeAreaView style={{backgroundColor: colors.background, flex: 1}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
export default StackNavigator;

