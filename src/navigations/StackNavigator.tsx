import { createStackNavigator } from '@react-navigation/stack';
import { FormularioScreen } from '../screens/buttomScreens/FormularioScreen';
import { CallAPIScreen} from '../screens/buttomScreens/CallAPIScreen';
import { ContextScreen } from '../screens/buttomScreens/ContextScreen';
import { LogoScreen } from '../screens/HOME/LogoScreen';
import { LoginScreen } from '../screens/buttomScreens/LoginScreen';
import { ZustandScreen } from '../screens/buttomScreens/ZustandScreen';


export type RootStackParams = { 
  LogoScreen: undefined;
  LoginScreen: undefined;
  FormularioScreen: undefined;
  CallAPIScreen: undefined;
  ContextScreen: undefined;
  ZustandScreen: undefined;
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
      <Stack.Screen name="CallAPIScreen" component={CallAPIScreen} />
      <Stack.Screen name="ContextScreen" component={ContextScreen} />
      <Stack.Screen name="ZustandScreen" component={ZustandScreen} />
    </Stack.Navigator>
  );
}