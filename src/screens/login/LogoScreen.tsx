import { StyleSheet, Text, View, Image } from 'react-native'

import { NavigationProp, useNavigation } from '@react-navigation/native'

import { PrimaryBottom } from '../../components/buttoms/MyCustomPrimaryBottom'
import { MyIcons } from '../../components/icon/Icon'
import { RootStackParams } from '../../routes/StackNavigator'
import { Spacer } from '../../components/separete/Spacer'

export const LogoScreen = () => {


  const navigation = useNavigation<NavigationProp<RootStackParams>>();


  return (
    <View  style={ styles.container}>

      <Spacer height={5}/>

      <View  style={styles.logoContainer}> 
        <MyIcons name="contrast-outline" size={20}/>
        <Text  style={{fontSize: 20}}> logo </Text>
      </View>

      <Spacer height={5}/>

      <Image source={{uri: "https://media.es.wired.com/photos/679f8349207a8a1f88d10a2b/16:9/w_2560%2Cc_limit/apple-maps-gear-1048233858.jpg"}}
        style={styles.image}      
      />

      <Spacer height={20}/>

      <View  style= {styles.buttomContainer}> 
        <PrimaryBottom
          label='LOGIN'
          onPress={ () => navigation.navigate('LoginScreen')}
          color='#0276f3'
          textColor='white'
        />
        <PrimaryBottom 
          label='FORMULARIO'
          onPress={ () => navigation.navigate('FormularioScreen')}
          textColor='#007AFF'
          border
        />
        <PrimaryBottom 
          label='Opcional 3'
          onPress={ () => navigation.navigate('Opcional3Screen')}
          color="#8E8E93"
          textColor='white'
        />
        <PrimaryBottom
          label='Opcional 4'
          onPress={ () => navigation.navigate('Opcional4Screen')}
          color="#8E8E93" 
          textColor='white'   
        />
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({

    container: {
      // padding: 24,
      // justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 24,
        borderWidth: 3,
        borderColor: 'red',
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'black',
    },
    image: {
        borderRadius: 5,
        height: 450,
        backgroundColor: '#E0E0E0',
        borderWidth: 3,
        borderColor: 'black',
    },

    buttomContainer: {
        gap: 15,
        borderWidth: 3,
        borderColor: 'black'
    },
})