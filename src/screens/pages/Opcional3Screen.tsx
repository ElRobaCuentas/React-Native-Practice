import { StyleSheet, Text, View } from 'react-native'
import { BackButtom } from '../../components/BackButtom'

export const Opcional3Screen = () => {
  return (
    <View style={styles.container}>
      <BackButtom />  
      <Text> Opcional3Screen </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {  
    flexDirection: 'row',
    alignItems: 'center'
  } 
})