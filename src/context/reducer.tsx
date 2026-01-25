
//state
export interface MyState {
    contador: number;
    titulo: string; 
}

export const initialState:MyState = {
    contador: 0,
    titulo: '---'
}

//action
export type Action = 
    | { type: 'INCREMENTAR' }
    | { type : 'DECREMENTAR' }
    | { type : 'CAMBIAR TITULO', payload: string }



/*  reducerFunction
    - recibe el dato actual (state) y una accion (action)
    - devuelve (return) el estado nuevo   
*/

export const reducerFunction = (state: MyState , action: Action) => {

    switch (action.type) {
        
        case 'INCREMENTAR':
            return { 
                ...state, 
                contador: state.contador + 1 
            };

        case 'DECREMENTAR':
            return { 
                ...state, 
                contador: state.contador - 1 
            };

        case 'CAMBIAR TITULO':
            return {
                ...state,
                titulo: action.payload 
            };

        default:
            return state; // Si no es ninguna, devuelve el estado sin cambios
    }
}

//sobre el .(.state): Significa "manten el resto de datos igual". Si no lo pones, al cambiar el titulo, 
//borrarías el contador por accidente.  