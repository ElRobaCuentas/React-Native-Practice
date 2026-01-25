import * as React from 'react';         
import 'react-native-gesture-handler'; 

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigations/StackNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { MyProvider } from './src/context/context';




export const App = () => {
  return (
    <SafeAreaProvider>
      <MyProvider>
        <SafeAreaView style={{flex:1}}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </MyProvider>
    </SafeAreaProvider>
  );
};