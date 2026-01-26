import { useContext, useState } from 'react'

import { Pressable, StyleSheet, Text, View } from 'react-native'

import { MyCustomHeader } from '../../components/header/MyCustomHeader'
import { MyContext } from '../../context/context'
import { TextInput } from 'react-native-gesture-handler'
import { Spacer } from '../../components/separete/Spacer'

export const ContextScreen = () => {
  
  
  //extraemos los datos y el contexto
  const { state, dispatch } = useContext(MyContext)

  //para guardar lo que escribimos ANTES DE ENVIARLO
  const [textoTemporal, setTextoTemporal] = useState('');

  
  return (

    <View style={styles.container} >

      <MyCustomHeader title='ContextScreen'/>

      <View style={styles.body}>
        {/* <Text> CONTADOR </Text> */}
        
        {/* <View style={styles.containerCounter}>
          <Text style={styles.counter}> {state.contador} </Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={ () => dispatch({type: 'INCREMENTAR'})}
        >
          <Text> INCREMENTAR </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={ () => dispatch({type: 'DECREMENTAR'})}
        >
          <Text> DECREMENTAR </Text>
        </Pressable> */}

        <Spacer  height={32} />


        <Text> INTRODUCIR TITULO </Text>

        <TextInput 
          style={styles.input}
          value={textoTemporal} // el value se asegura que lo que ves en pantalla sea siempre lo que está en textoTemporal
          placeholder='titulo...'
          onChangeText={(texto) => setTextoTemporal(texto)}  //Cada vez que se escribe algo, esta funcion actualiza el borrador.
        />
  
        {/*  
            Cada vez que el usuario (despues de escribir) presione ACTUALIZAR, tomamos lo que hay en el 
            borrador (textoTemporal), lo metemos dentro de payload, el dispatch dispara la orden al reducer,
            el reducer recibe el paquete y posteriormente se actualiza el titulo en toda la aplicacion.  
        */}

        <Pressable
          style={styles.buttonActualizar}
          onPress={ () => {
            dispatch({type: 'CAMBIAR TITULO', payload: textoTemporal})
          }}
        >
          <Text> ACTUALIZAR </Text>
        </Pressable>





      </View>
    </View>


    

  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'black'
  },

  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red'
  },
  containerCounter:{
    borderWidth: 1,
    borderRadius: 5,
    width: 40, 
    marginVertical: 10,
    justifyContent: 'center',
    alignItems:'center'
  },
  counter:{
    fontSize: 20,
  },

  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 10,
    width: 200,
    alignItems: 'center'
  },

  input: { 
      borderWidth: 1, borderColor: '#ccc', width: 200, padding: 10, borderRadius: 5, marginVertical: 10 
  },
  buttonActualizar: { 
      backgroundColor: '#28a745', padding: 15, borderRadius: 8, width: 150, alignItems: 'center' 
  }
})