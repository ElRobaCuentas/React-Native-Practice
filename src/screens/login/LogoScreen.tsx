import { StyleSheet, Text, View } from 'react-native'
import { PrimaryBottom } from '../../components/PrimaryBottom'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../routes/StackNavigator'
import { MyIcons } from '../../components/Icon'



import { Image } from 'react-native';

export const LogoScreen = () => {


  const navigation = useNavigation<NavigationProp<RootStackParams>>();


  return (
    <View  style={ styles.container}>

      <View  style={styles.logoContainer}> 
        <MyIcons name="contrast-outline" size={20}/>
        <Text  style={{fontSize: 20}}> logo </Text>
      </View>

      <Image source={{uri: "https://media.es.wired.com/photos/679f8349207a8a1f88d10a2b/16:9/w_2560%2Cc_limit/apple-maps-gear-1048233858.jpg"}}
        style={styles.image}      
      />

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
        flex: 1,
        padding: 24,
        justifyContent: 'space-between',
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        borderRadius: 5,
        height: 450,
        backgroundColor: '#E0E0E0'
    },

    buttomContainer: {
        gap: 15,
    },
})