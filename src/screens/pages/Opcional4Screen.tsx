import { StyleSheet, Text, View } from 'react-native'
import { BackButtom } from '../../components/BackButtom'

export const Opcional4Screen = () => {
  return (
    <View  style={styles.container}>
      <BackButtom />
      <Text>  Opcional4Screen </Text>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {  
    flexDirection: 'row',
    alignItems: 'center'
  } 
})