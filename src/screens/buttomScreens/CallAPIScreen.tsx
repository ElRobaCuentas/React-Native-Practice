import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { MyCustomHeader } from '../../components/header/MyCustomHeader'
import { useImages } from '../../hooks/useImages'
import { Spacer } from '../../components/separete/Spacer';
import { useContext } from 'react';
import { MyContext } from '../../context/context';

export const CallAPIScreen = () => {
  
  const { images, changeDog, changeCat, changeFox } = useImages();


  const { state } = useContext(MyContext);


  const changeImageButton = (id: string) => {
    if ( id === '1' ) return changeDog();
    if ( id === '2' ) return changeCat();
    if ( id === '3' ) return changeFox();
  }


  return (

    <View style={styles.container}>

      <MyCustomHeader title='CallAPIScreen'/>


      <View style={styles.body}>  
        
      <Text> {state.titulo} </Text>

        <Spacer height={24}/>


        <FlatList 
          data = { images }
          keyExtractor={ (item) => item.id }
          showsVerticalScrollIndicator={false} //no hay scroll
          renderItem={ ({item}) => (
            <View style={styles.card}>

              <Text> {item.title} </Text>

              <View style={styles.containerImage}>
                <Image 
                  source={{uri: item.imageUrl}}
                  style={styles.imageFull}
                />
              </View>
              
                <Pressable
                  onPress={() => changeImageButton(item.id)}
                  style={styles.boton}
                >
                  <Text> CAMBIAR </Text>
                </Pressable>
            </View>
          )}
        />
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
    padding: 24,
    borderWidth: 3, 
    borderColor: 'blue',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'black',
    width: '100%',
    borderWidth: 2, 
    height: 200,
    borderRadius: 20,
    marginBottom: 32,
    padding: 8,

  },
  containerImage: {
    height: 150,
    width: 160,            
    borderRadius: 20,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  imageFull: {
    borderRadius: 20,
    height: '100%',
  },

  boton: {
    width: 110,
    height: 30,
    backgroundColor: '#c2daf4', 
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#5387bf',
    justifyContent: 'center',
    alignItems: 'center'
  },
})