import { useState } from 'react'

interface FormInput {
  email: string, 
  password: string,
  phone: string,
}


export const useMyForm = ( initialState: FormInput ) => {

  const [myForm, setMyForm] = useState(initialState);

  const onChange = (value: string, field: keyof FormInput) => {
      setMyForm({
        ...myForm,
        [field]: value
      });
  };

  return {

    //Properties
    ...myForm,

    //Metodos
    onChange
  
  } 
}