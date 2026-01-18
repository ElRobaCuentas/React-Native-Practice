import 'react-native-gesture-handler'; 
import * as React from 'react';         
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/routes/StackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';

export const App = () => {
  return (
      <NavigationContainer>
      <StackNavigator />
      </NavigationContainer>
  );
};