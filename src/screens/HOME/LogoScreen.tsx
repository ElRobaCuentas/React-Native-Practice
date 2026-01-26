import { StyleSheet, Text, View, Image, ScrollView } from 'react-native' // 1. Importar ScrollView
import { NavigationProp, useNavigation } from '@react-navigation/native'

import { PrimaryBottom } from '../../components/buttoms/MyCustomPrimaryBottom'
import { MyIcons } from '../../components/icon/Icon'
import { RootStackParams } from '../../navigations/StackNavigator'
import { Spacer } from '../../components/separete/Spacer'
import { FlatList } from 'react-native-gesture-handler'



interface MenuOptions {
  label: string;
  screen: keyof RootStackParams;
  color?: string;
  textColor: string;
  border?: boolean;
}




export const LogoScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const buttonList:MenuOptions[] = [

    {label: 'LOGIN', screen: 'LoginScreen', color:'#0276f3', textColor:'white'},
    {label: 'FORMULARIO', screen: 'FormularioScreen', color: undefined, textColor:'#007AFF', border: true},
    {label: 'API', screen: 'CallAPIScreen',    color: '#8E8E93', textColor: 'white' },
    {label: 'CONTEXTO', screen: 'ContextScreen',    color: '#8E8E93', textColor: 'white' },
    {label: 'ZUSTAND', screen: 'ZustandScreen', color: '#8E8E93', textColor: 'white' },
  ]

  return (
    <View style={styles.container}>

      <FlatList 
        data = {buttonList}
        keyExtractor={(item) => item.label}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}

        //1. todo lo que va arriba de los botones
        ListHeaderComponent={ () => (
          <View>
            <Spacer height={12} />
            <View style={styles.logoContainer}>
              <MyIcons name="contrast-outline" size={24} />
              <Text style={{ fontSize: 24 }}> logo </Text>
            </View>
            <Spacer height={12} />
            <Image 
              source={{ uri: "https://media.es.wired.com/photos/679f8349207a8a1f88d10a2b/16:9/w_2560%2Cc_limit/apple-maps-gear-1048233858.jpg" }}
              style={styles.image}
            />
            <Spacer height={24} />
          </View>
        )}

        //2. renderizado de cada boton

        renderItem={ ({item}) => (
          <View style={{ marginBottom: 15 }}>
            <PrimaryBottom
              label={item.label}
              onPress={() => navigation.navigate(item.screen)}
              color={item.color}
              textColor={item.textColor}
              border={item.border}
            />
          </View>
        )}
        
        ListFooterComponent={() => 
          <Spacer height={30} />
        }
      />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 24,
    height: 450,
    backgroundColor: '#E0E0E0',
  },
})