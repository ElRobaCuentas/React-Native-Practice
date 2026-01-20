import { StyleSheet, Text, View } from 'react-native'
import { FormInputs } from '../../screens/buttomScreens/LoginScreen'
import { Control, Controller } from 'react-hook-form'
import { TextInput } from 'react-native-gesture-handler';

interface Props {
  control: Control<FormInputs>;
  name: keyof FormInputs;
  label: string;
}



export const MyCustomForm = ( {control, name, label}:Props ) => {
  return (


    <View> 
      <Text style={{ marginBottom: 5 }}> {label} </Text>
      <Controller 
        control={control}
        name= {name}
        render= { ({field: {onChange, value}}) => (
          <TextInput 
            style={styles.input}
            onChangeText={onChange}
            value={value}
          />
        ) }
      />
    </View>        
  )
}


const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    height: 50,
    marginBottom: 10,
  },
});