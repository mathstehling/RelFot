import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SplashScreen,
  LoginScreen,
  FormScreen,
  ImageSignalingScreen,
  ImageEQPScreen,
  FinishScreen,
} from '../screens';

export const ModelNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="ImageSignaling" component={ImageSignalingScreen} />
      <Stack.Screen name="ImageEQP" component={ImageEQPScreen} />
      <Stack.Screen name="Finish" component={FinishScreen} />
    </Stack.Navigator>
  );
};
