import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { MyCustomHeader } from '../../components/header/MyCustomHeader'
import { useState } from 'react';
import { useMyForm } from '../../hooks/forms/useMyForm';

export const FormularioScreen = () => {


  const { email, password, phone, onChange } = useMyForm({
    email: '',
    password: '',
    phone: '',
  });
  
  const [textoAMostrar, setTextoAMostrar] = useState('');
  
  
  const touchButtom = () => { 
    setTextoAMostrar(` ${email} - ${password} - ${phone}`);
  }
  
  
  return (
    <View style={styles.container}> 
      <MyCustomHeader title='FormularioScreen' />

      <View style={styles.body}> 
        {/*ENTRADA DEL CORREO */}
        <Text>Correo:</Text>
        <TextInput
          style= {styles.input} 
          placeholder='nombre@unmsm.edu.pe'
          onChangeText={(valor) => onChange( valor, 'email')}
          value= {email}
        />
        {/* INPUT DEL PHONE */}
        <Text>Teléfono:</Text>
        <TextInput
          style={styles.input} 
          placeholder='999888777'
          onChangeText={(valor) => onChange(valor, 'phone')} // 4. Conectamos con 'telefono'
          value={phone}
        />

        {/* INPUT DE PASSWORD */}
        <Text>Contraseña:</Text>
        <TextInput
          style={styles.input} 
          placeholder='******'
          secureTextEntry
          onChangeText={(valor) => onChange(valor, 'password')} // 5. Conectamos con 'password'
          value={password}
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
