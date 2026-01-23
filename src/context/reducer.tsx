
//state
export interface State {
    contador: number;
}

export const initialState:State = {
    contador: 0
}

//action
export type Action = 
    | { type: 'INCREMENTAR' }
    | { type : 'DECREMENTAR' }



/*  reducerFunction
    - recibe el dato actual (state) y una accion (action)
    - devuelve (return) el estado nuevo   
*/

export const reducerFunction = (state: State , action: Action): State => {

    switch (action.type) {
        case 'INCREMENTAR': return { contador: state.contador + 1 };
        case 'DECREMENTAR': return { contador: state.contador - 1 };
        default: return state;
    }
}