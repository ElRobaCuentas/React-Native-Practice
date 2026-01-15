import { StyleSheet, Text, View } from 'react-native'
import { BackButtom } from '../../components/BackButtom'

export const FormularioScreen = () => {
  return (
    <View style={styles.container}>
      <BackButtom />
      <Text> FormularioScreen </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {  
    flexDirection: 'row',
    alignItems: 'center'
  } 
})

