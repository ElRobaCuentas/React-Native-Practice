import { useContext } from 'react'
import { MyCustomHeader } from '../../components/header/MyCustomHeader'
import { MyContext } from '../../context/context'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export const Opcional4Screen = () => {
  
  
  //extraemos los datos y el contexto
  const { state, dispatch } = useContext(MyContext)
  
  return (

    <View style={styles.container} >

      <MyCustomHeader title='Opcional4Screen'/>

      <View style={styles.body}>
        <Text> CONTADOR </Text>
        
        <View style={styles.containerCounter}>
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
})