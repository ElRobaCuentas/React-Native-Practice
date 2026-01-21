import { useState } from 'react'

interface FormInput {
  email: string, 
  password: string,
  phone: string,
}



export const useMyForm = ( initialState: FormInput ) => {

  const [myForm, setMyForm] = useState(initialState);

  //estados de validación
    
    //validacion correo
      /*  
        1.¿Por qué useState(false) el estado inicial es falso?
          Cuando abres la pantalla por primera vez, el campo correo está vacío.
          Entonces, ¿Un campo vacío es válido? NO.
          Como no es válido aún, su valor inicial debe ser false
        2.Añadiremos otro estado (pero aun sigue siendo para el apartado de email). 
          Lo que haremos con este otro estado en hacer que el mensaje no aparezca ni bien escribes, 
          ya que es un poco molesto, sino que recién cuando el usuario hace click en otro recuadro, 
          por ejemplo el de telefono (antes de que introduzca datos ahi) ya sabe que anteriormente
          a escrito mal en el campo correo.
        * Para esto necesitamos que el hook sea capaz de recordar si el usuario ya entró y salió del campo
        * y para eso usamos la propiedad onBlur dentro del TextInput
      */
      const [isEmailValid, setIsEmailValid] = useState(false); 
      const [isEmailTouched, setIsEmailTouched] = useState(false); 

    //validacion telefono
      const [isPhoneValid, setIsPhoneValid] = useState(false)
      const [isPhoneTouched, setIsPhoneTouched] = useState(false);
    //validacion contraseña
      const [isPasswordValid, setIsPasswordValid] = useState(false);
      const [isPasswordTouched, setIsPasswordTouched] = useState(false);

  



  const onChange = (value: string, field: keyof FormInput) => {
    
    setMyForm({
      ...myForm,
      [field]: value
    });


    //disparadores de validacion para cada campo (correo, telefono, contraseña)

      //email
        if (field === 'email') validateEmail(value); 
      //phone
        if (field === 'phone') validatePhone(value);
      //password
        if (field === 'password') validatePassword(value);

  };

  //!validar email
    //funcion para validez estricta
    const validateEmail = (email: string) => {

      const hasLength = email.length >= 17;
      const hasPoint = email.includes( '.' );
      const hasDomain = email.endsWith( '@unmsm.edu.pe' );

      // if ( hasLength && hasPoint && hasDomain ) {
      //   setIsEmailValid(true);
      // } else { //supongamos que el usuario pone un correo valido, pero despues de eso borra una letra, entonces ya no es valido, pero una vez que es true (valido) seguira siendo true y no lo cambias, por eso agregamos la linea else
      //   setIsEmailValid(false);
      // }

      //? otra forma de escribir esto es de esta manera, ya que esta linea, ya es, en sí misma
      //? una pregunta logica que devuelve true o false.
      //? es como si en lugar de decir: "Si la rpta es si, anto si o si la rpta es no, anota no" 
      //? simplemente dices "ANOTA LA RESPUESTA"

      setIsEmailValid(hasLength && hasPoint && hasDomain);

    }

    //función para marcar que el campo fue tocado
    const onBlurEmail = () => setIsEmailTouched(true);

  
  //!validar telefono
    //función para valdez estricta
      const validatePhone = (phone:string) => {
        setIsPhoneValid( phone.length === 9 )
      }
    //función para marcar que el campo fue tocado
      const onBlurPhone = () => setIsPhoneTouched(true);

  //!validar contraseña
    //función para validez estricta
      const validatePassword = (password: string) => {
          const hasPassLength = password.length >= 6;

          // OBLIGAR a que contenga almenos un numero
          const hasNumber = /\d/.test(password);

          //OBLIGAR a que contenga al menos una letra
          const hasLetter = /[a-zA-Z]/.test(password);
          
          //? ponemos lo mismo que setIsEmailValid(...)
          setIsPasswordValid(hasPassLength && hasNumber && hasLetter);
      }
    //funcion para marcar el campo que fue tocado
      const onBlurPassword = () => setIsPasswordTouched(true);

  return {

    ...myForm,

    //Properties (estado actual del formulario)
    isEmailValid,
    isEmailTouched,

    isPhoneValid,
    isPhoneTouched,

    isPasswordValid,
    isPasswordTouched,

    //Metodos (funciones que provocan un cambio) ESTAS FUNCIONES SON "PUBLICAS". METODOS QUE LA PANTALLA NECESITA "TOCAR" O DISPARAR
    // validarPhone, validateEmail SON FUNCIONES "PRIVADAS". EL HOOK LO USA PARA PENSAR POR SI MISMO
    onChange,
    onBlurEmail,
    onBlurPhone,
    onBlurPassword,
  
  } 
}