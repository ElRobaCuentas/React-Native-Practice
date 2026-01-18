import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MyCustomHeader } from '../../components/header/MyCustomHeader'
import { Controller, useForm } from 'react-hook-form'
import { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { MyCustomForm } from '../../components/forms/MyCustomForm'


export interface FormInputs {
  email: string,
  password: string
}

export const LoginScreen = () => {

  //Para pintar el resultado final
  const [textoAMostrar, setTextoAMostrar] = useState('');


  const { control, handleSubmit } = useForm<FormInputs>({
    // defaultValues:{
    //   email: 'juan.matiasl@unmsm.edu.pe',
    //   pasword: '********'
    // }
  });


  const onSubmit = ( data: FormInputs ) => {
      setTextoAMostrar(`${data.email} / ${data.password}`);
  }

  return (

    <View style={styles.container}>

      <MyCustomHeader title='LoginScreen' />

      <View  style={styles.body}>  

        <MyCustomForm 
          control={control}
          name='email'
          label='Correo'
        />

        <MyCustomForm 
          control={control}
          name='password'
          label='Password'
        />

        <Pressable 
          style={styles.buttomPressable}
          onPress={ handleSubmit(onSubmit)}
        > 
          <Text style={{color: 'white'}}> Submit </Text>
        </Pressable>      

        
        {
          textoAMostrar !== '' && (<Text style={styles.output}> Escribiste: {textoAMostrar} </Text>)
        }

      </View>
    </View>
  )
}



const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
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
    marginTop: 10,
  },
})