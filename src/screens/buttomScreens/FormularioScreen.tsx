import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { MyCustomHeader } from '../../components/header/MyCustomHeader'
import { useState } from 'react';

export const FormularioScreen = () => {


  const [textoEscrito, setTextoEscrito] = useState('');
  
  const [textoAMostrar, setTextoAMostrar] = useState('');
  
  
  const touchButtom = () => { 
    setTextoAMostrar(textoEscrito)
  }
  
  
  return (
    <View style={styles.container}> 
      <MyCustomHeader title='FormularioScreen' />

      <View style={styles.body}> 
        {/*ENTRADA DEL TEXTO */}
        <TextInput
          style= {styles.input} 
          placeholder='Escribir...'
          onChangeText={(valor) => setTextoEscrito(valor)}
          value= {textoEscrito}
        />

        <Pressable 
          onPress={ touchButtom }
          style={styles.buttomPressable}
          >
          <Text style={{color: 'white'}}> Submit </Text>
        </Pressable>

        {/*SALIDA DEL TEXTO */}

        {
          textoAMostrar.length > 0 && (  <Text style={styles.output}> Escribiste: {textoAMostrar} </Text>  )
        }
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },

  input: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10, 
    height: 50,
    width: '70%',
    marginBottom: 10
  },

  buttomPressable: {
    backgroundColor: 'blue',
    borderRadius: 10,
    height: 50,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  output: {
    marginTop: 30,
  },

})
