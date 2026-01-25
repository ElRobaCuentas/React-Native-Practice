import { createContext, useReducer } from "react";
import { Action, initialState, MyState, reducerFunction } from "./reducer";


// 1. Definimos que va a viajar por el contexto (tuberias)
interface ContextProps {
    state: MyState;
    dispatch: React.Dispatch<Action>
}

// 2. Creamos la llave
export const MyContext = createContext( {} as ContextProps );


// 3. El cuarto de maquinas (proveedor)
export const MyProvider = ( {children}: any ) => {
    
    const [ state, dispatch ] = useReducer( reducerFunction, initialState )

    return (

        <MyContext.Provider value={{
                state, 
                dispatch
            }}>
                {children}
        </MyContext.Provider>
    )

}