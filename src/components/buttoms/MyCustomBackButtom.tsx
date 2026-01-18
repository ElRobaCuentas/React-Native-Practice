import { NavigationProp, useNavigation } from "@react-navigation/native"
import { Pressable } from "react-native"
import { RootStackParams } from "../../routes/StackNavigator";
import { MyIcons } from "../icon/Icon";


export const BackButtom = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable  onPress={ () => navigation.goBack()} >
        {/* hay otra opcion, la de poner goBack() "mas profesional"
            navigation.goBack() en lugar de usar navigation.navigate('LogoScreen')
          */}
        <MyIcons name="chevron-back-outline" size={30}/>
    </Pressable>
  )
}


