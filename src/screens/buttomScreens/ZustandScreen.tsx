import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MyCustomHeader } from '../../components/header/MyCustomHeader'
import { useCounterStore } from '../../store/counter.store'
import { COLORS } from '../../theme/theme';

export const ZustandScreen = () => {

  const {count, incrementar, decrementar} = useCounterStore();



  return (

    <View style={styles.container}>

      <MyCustomHeader title='ZustandScreen' />

      <View style= {styles.body}>

        <Text> CONTADOR: </Text>
        <Text style={styles.counter} > {count} </Text>

        <View style={styles.containerBotones}>

          <Pressable
            onPress={incrementar}
            style={ ({pressed}) => [
                styles.boton,
                {
                  backgroundColor: pressed ? COLORS.pressedButtonOrdinary : 'transparent',
                }
            ]}
          >
            <Text> INCREMENTAR </Text>
          </Pressable>

          <Pressable
            onPress={decrementar}
             style={ ({pressed}) => [
                styles.boton,
                {
                  backgroundColor: (pressed && count > 0) ? COLORS.pressedButtonOrdinary : 'transparent',
                  opacity: count === 0 ? 0.1 : 1

                }
            ]}
          >
            <Text> DECREMENTAR </Text>
          </Pressable>
        </View>
  
      </View>
    
    </View>
  
  )
}


const styles = StyleSheet.create({

  container: {
    flex:1
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  counter: {
    fontSize: 100,
  },

  containerBotones:{
    marginVertical: 20,
    gap: 20,
    flexDirection: 'row'
  },  

  boton: {
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  }

})