import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { MyCustomHeader } from '../../components/header/MyCustomHeader'
import { useState } from 'react'

export const Opcional3Screen = () => {
  
  //para guardar la URL de la imagen
  const [dogImage, setDogImage] = useState(null)
  
  //funcion para pedir la imagen del perrito a la API
  const getDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const datos = await response.json();
      setDogImage(datos.message)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (

    <View  style={styles.container}>

      <MyCustomHeader title='Opcional3Screen'/>
     
      <View style={styles.body}>    

        <View style={styles.imageContainer}>
          { dogImage ? (
            <Image
                source={{uri: dogImage}} 
                style={styles.imagenReale}
                resizeMode="contain"
              /> ) : ( <Text> FOTO: </Text> )}
        </View>

        <Pressable
          style={styles.boton}
          onPress={ getDogImage }
        >
          <Text> TRAER IMAGEN </Text>
        </Pressable>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer:{
    height: 400,
    width: '100%', 
    backgroundColor: '#7c7a7a', 
    marginBottom: 20,
    borderRadius: 10,
  },
  imagenReale: {
    height: '100%',
  } ,
  boton: {
    backgroundColor: '#007AFF', // Azul clásico
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
})