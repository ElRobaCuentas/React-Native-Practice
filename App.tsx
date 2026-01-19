import 'react-native-gesture-handler'; 
import * as React from 'react';         
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/routes/StackNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1 , borderColor: 'blue', borderWidth: 3}}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};