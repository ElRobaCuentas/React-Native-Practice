import { StyleSheet, Text, View } from 'react-native'
import { BackButtom } from '../../components/BackButtom'

export const LoginScreen = () => {
  return (
    <View  style={styles.container}>
      <BackButtom />
      <Text> LoginScreen </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {  
    flexDirection: 'row',
    alignItems: 'center'
  } 
})

