import { useEffect, useState } from "react";

interface AnimalImage {
  id: string;
  imageUrl: string;
  title: string;
}




export const useImages = () => {

    /*
        Para guardar la URL de la imagen
        <AnimalImage> -> tipado estricto. Un solo animal (objeto)
        <AnimalImage[]> -> tipado estricto. Una coleccion de muchos animales (lista)
    */

    const [images, setImages] = useState<AnimalImage[]>([])
    
    //funcion para pedir la imagen del perrito a la API
    const getImages = async () => {
      try {
        const [resDog, resCat, resFox] = await Promise.all([
          fetch('https://dog.ceo/api/breeds/image/random'), //perros
          fetch('https://api.thecatapi.com/v1/images/search'), //gatos
          fetch('https://randomfox.ca/floof/'), //zorros
        ]);

        const dataDog = await resDog.json();
        const dataCat = await resCat.json();
        const dataFox = await resFox.json();


        const newList: AnimalImage[] = [

          {id: '1', title: 'PERRO', imageUrl: dataDog.message},
          {id: '2', title: 'GATO', imageUrl: dataCat[0].url},
          {id: '3', title: 'ZORRO' ,imageUrl: dataFox.image},
        ]

        setImages(newList);

      } catch (e) {
      console.log(e); 
      }
    }


    /*  .map() es un metido de JS que recorre un arreglo y CREA UNO NUEVO aplicando una función a cada elemento. 
        -> map nunca modifica el arreglo original. Siempre te entrega una "copia transformada"
          A ESTO ME REFIERO QUE LA CANTIDAD NO CAMBIA, MAS SI EL CONTENIDO. 

        1. ¿Eres el que buscamos? img.id === '1'
        2. Si eres el elegido (Perro): Ejecutamos { ...img, imageUrl: data.message }
           Aqui los .(..img) son vitales: copian todo el pasado de perro (id y titulo) y solo inyectan la foto nueva. 
        3. Si no eres el elegido (Gato/Zorro) simplemente devolvemos img tal cual estaba, es decir, el map devuelve 
        el objeto 
          {id: '2', title: 'GATO', imageUrl: dataCat[0].url}, MISMO GATO
          {id: '3', title: 'ZORRO' ,imageUrl: dataFox.image}, MISMO ZORRO
        TAL CUAL ESTABA

        4. Al final, el objeto nuevo (perro actualizado) y dos objetos viejos (gato y zorro que no cambiaron)
    */

        
    const changeDog = async () => {
      try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const data: any = await res.json(); 
        setImages(prev => prev.map(img => 
          img.id === '1' ? { ...img, imageUrl: data.message } : img
        ));
      } catch (e) { console.log(e); }
    };

    const changeCat = async () => {
      try {
        const res = await fetch('https://api.thecatapi.com/v1/images/search');
        const data: any = await res.json(); 
        setImages(prev => prev.map(img => 
          img.id === '2' ? { ...img, imageUrl: data[0].url } : img
        ));
      } catch (e) { console.log(e); }
    };

    const changeFox = async () => {
      try {
        const res = await fetch('https://randomfox.ca/floof/');
        const data: any = await res.json(); 
        setImages(prev => prev.map(img => 
          img.id === '3' ? { ...img, imageUrl: data.image } : img
        ));
      } catch (e) { console.log(e); }
    };

    useEffect(() => {
        getImages();
    }, []);

    return {
      images,
      getImages,
      changeDog,
      changeCat,
      changeFox
    };
}