import { createStackNavigator } from '@react-navigation/stack';
import { FormularioScreen } from '../screens/buttomScreens/FormularioScreen';
import { Opcional3Screen } from '../screens/buttomScreens/Opcional3Screen';
import { Opcional4Screen } from '../screens/buttomScreens/Opcional4Screen';
import { LogoScreen } from '../screens/login/LogoScreen';
import { LoginScreen } from '../screens/buttomScreens/LoginScreen';


export type RootStackParams = { 
  LogoScreen: undefined;
  LoginScreen: undefined;
  FormularioScreen: undefined;
  Opcional3Screen: undefined;
  Opcional4Screen: undefined;
}


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="LogoScreen" component={LogoScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="FormularioScreen" component={FormularioScreen} />
      <Stack.Screen name="Opcional3Screen" component={Opcional3Screen} />
      <Stack.Screen name="Opcional4Screen" component={Opcional4Screen} />
    </Stack.Navigator>
  );
}