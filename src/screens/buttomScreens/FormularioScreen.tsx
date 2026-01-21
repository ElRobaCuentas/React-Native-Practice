import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { MyCustomHeader } from '../../components/header/MyCustomHeader'
import { useState } from 'react';
import { useMyForm } from '../../hooks/forms/useMyForm';

export const FormularioScreen = () => {


  const { 

    email, password, phone, 
    onChange, 
    isEmailValid, isPhoneValid, isPasswordValid,
    onBlurEmail, isEmailTouched,  
    onBlurPhone, isPhoneTouched,
    onBlurPassword, isPasswordTouched,

  } = useMyForm({
    
    email: '',
    password: '',
    phone: '',

  });
  
  const [textoAMostrar, setTextoAMostrar] = useState('');
  
  
  const touchButtom = () => { 

    if( isEmailValid && isPhoneValid && isPasswordValid) {
      setTextoAMostrar(` ${email} - ${phone} - ${password}`);
    } else {
      setTextoAMostrar('Revisa los campos!!');
    }
  }
  
  
  return (
    <View style={styles.container}> 
      <MyCustomHeader title='FormularioScreen' />

      <View style={styles.body}> 

        {/*ENTRADA DEL CORREO */}
        <Text>Correo:</Text>
        <TextInput
          style= {styles.input} 
          // placeholder='nombre@unmsm.edu.pe'
          onChangeText={(valor) => onChange( valor, 'email')}
          onBlur={onBlurEmail}
          value= {email}
        />

        {/*se muestra la condicion solo si el correo es invalido y ya fue tocado */}
        {
          (!isEmailValid && isEmailTouched ) && (
              <Text style={styles.errorText} > Correo no válido </Text>
          )
        }


        {/* INPUT DEL PHONE */}
        <Text>Teléfono:</Text>
        <TextInput
          style={styles.input} 
          // placeholder='999888777'
          onChangeText={(valor) => onChange(valor, 'phone')} // 4. Conectamos con 'telefono'
          onBlur={ onBlurPhone }
          value={phone}

          keyboardType='numeric' //para que muestre el teclado en //! solo números
          maxLength={9}
        />

        {/*si escribió algo o no son 9 numeros, entonces */}
        {
          (!isPhoneValid && isPhoneTouched) && (
            <Text style={styles.errorText} > Deben ser 9 números </Text>
          )
        }


        {/* INPUT DE PASSWORD */}
        <Text>Contraseña:</Text>
        <TextInput
          style={styles.input} 
          // placeholder='******'
          onChangeText={(valor) => onChange(valor, 'password')} // 5. Conectamos con 'password'
          onBlur={ onBlurPassword }
          value={password}
          
          //para que se vean puntitos (...)
          secureTextEntry={true}
        />

        {
          (!isPasswordValid && isPasswordTouched) && (
          <Text style={styles.errorText}> 
            Debe contener letras y numeros en un total de 6 caracteres
          </Text>
        )}

        <Pressable 
          onPress={ touchButtom }
          style={styles.buttomPressable}
          >
          <Text style={{color: 'white'}}> Submit </Text>
        </Pressable>

        {/*SALIDA DEL TEXTO */}

        {
          textoAMostrar.length > 0 && (  <Text style={styles.output}> {textoAMostrar} </Text>  )
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


  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    fontWeight: 'bold'
  },

})
