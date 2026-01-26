import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { MyCustomHeader } from '../../components/header/MyCustomHeader'
import { useState } from 'react';
import { useMyForm } from '../../hooks/useMyForm';
import { USER_PROFILE_MOCK, UserProfile } from '../../data/profileMock';
import { USER_AUTH_MOCK } from '../../data/authMock';
import { Spacer } from '../../components/separete/Spacer';

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
  
  const [showError, setShowError] = useState('');


  const [userLogged, setUserLogged] = useState<UserProfile | null>(null);


  const touchButtom = () => { 

    //1. validacion
    if( isEmailValid && isPhoneValid && isPasswordValid) {

      //2. buscamos dentro del mock de autenticación
      const authFound = USER_AUTH_MOCK.find( u =>
          u.email === email &&
          u.phone === phone &&
          u.password === password
      );

      //3. si es que los encontramos traemos los datos del perfil
      if ( authFound ) {
          //4. la unica forma que encajen es por medio del id
          const profile = USER_PROFILE_MOCK.find( u => u.id === authFound.id )

          if (profile) {
            setUserLogged(profile);
            setShowError(''); //el estado inicial sigue estando vacío
          } else {
            setUserLogged(null); //ES IMPOSIBLE QUE ESTE ERROR APAREZCA YA QUE EN AMBOS (authMock y profileMock) hay un id que existe y corresponde a cada objeto
            setShowError('Perfil no encontrado');
          }
      } else {
        setUserLogged(null);
        setShowError('Revisa tus credenciales')
      }
    } else {
      setShowError('Campos invalidos') 
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

        <Spacer height={20}/>

        {
          userLogged && (

            <View style={styles.userDates}> 
              <Text> DATOS DEL USUARIO </Text>

              <Text> { userLogged.names } </Text>
              <Text> { userLogged.lastname } </Text>
              <Text> { userLogged.age } </Text>
              <Text> { userLogged.sex } </Text>
              <Text> { userLogged.rol } </Text>

            </View>
          )  
        } 

        { 
          //solo muestra si no hay ningun usuario logeado (el estado es null) y el estado del error ya no está vacío
          (!userLogged && showError !== '') && (
            <Text> {showError} </Text>
          )
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
    padding: 24,
  },

  input: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10, 
    height: 50,
    width: '70%',
    marginBottom: 10,
    
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

  userDates: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    padding: 10
  }

})
