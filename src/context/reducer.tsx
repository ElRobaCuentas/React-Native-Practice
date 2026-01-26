import { act } from "react";

export interface AnimalImage {
  id: string;
  imageUrl: string;
  title: string;
}

//state
export interface MyState {
    // contador: number;
    titulo: string; 


    //para las imagenes
    images: AnimalImage[];


}

export const initialState:MyState = {
    // contador: 0,
    titulo: '---',
    images: [], 
}

//action
export type Action = 
    // | { type: 'INCREMENTAR' }
    // | { type : 'DECREMENTAR' }
    | { type : 'CAMBIAR TITULO', payload: string }

    | { type : 'CARGAR IMAGENES', payload: AnimalImage[] }
    | { type : 'ACTUALIZAR IMAGENES', payload: { id: string, newUrl: string } }





/*  reducerFunction
    - recibe el dato actual (state) y una accion (action)
    - devuelve (return) el estado nuevo   
*/

export const reducerFunction = (state: MyState , action: Action) => {

    switch (action.type) {
        
        // case 'INCREMENTAR':
        //     return { 
        //         ...state, 
        //         contador: state.contador + 1 
        //     };

        // case 'DECREMENTAR':
        //     return { 
        //         ...state, 
        //         contador: state.contador - 1 
        //     };

        case 'CAMBIAR TITULO':
            return {
                ...state,
                titulo: action.payload 
            };
        
        //Esta tiene la misma finalidad de lo anterior, cargar imagenes y cambiar si presiono el botón, pero 
        //por detrás hay algo más agregado, la capacidad de la MEMORIA. Ahora, con el contexto podrá recordar 
        //la última imagen.

        case 'CARGAR IMAGENES':
            return {
                ...state,
                images: action.payload
            };

        case 'ACTUALIZAR IMAGENES':
            return {
                ...state,
                images: state.images.map( img => img.id === action.payload.id ? { ...img, imageUrl: action.payload.newUrl } : img )
            }
        default:
            return state; // Si no es ninguna, devuelve el estado sin cambios
    }
}

//sobre el .(..state) : Significa "manten el resto de datos igual". Si no lo pones, al cambiar el titulo, 
//borrarías el contador por accidente.  