import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { PrimaryBottom } from '../../components/PrimaryBottom'

export const Login = () => {
  return (
    <View  style={ globalStyles.container }>

      <View  style={globalStyles.logoContainer}> 
        <View style={globalStyles.logoIcon}/>
        <Text  style={{fontSize: 20}}> logo </Text>
      </View>

      <View style={ globalStyles.image}/>



    <View  style= {globalStyles.buttomContainer}> 
      <PrimaryBottom
        label='LOGIN'
        onPress={ () => {} }
        color='#0276f3'
        textColor='white'
      />
      <PrimaryBottom 
        label='FORMULARIO'
        onPress={ () => {} }
        textColor='#007AFF'
        border
      />
      <PrimaryBottom 
        label='Opcional 3'
        onPress={ () => {} }
        color="#8E8E93"
        textColor='white'
      />
      <PrimaryBottom
        label='Opcional 4'
        onPress={ () => {} }
        color="#8E8E93" 
        textColor='white'
      />
    </View>




    </View>
  )
}