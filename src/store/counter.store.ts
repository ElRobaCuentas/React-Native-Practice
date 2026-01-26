/*
    Exclusivamente para mi zustand. Lo puedo hacer en en carpeta hooks, pero para
    cuestiones de practica lo haremos dentro de la carpeta store. 
*/

import { create } from "zustand";


interface CounterState {
    count: number;
    incrementar: () => void;
    decrementar: () => void;
}



export const useCounterStore = create<CounterState>( (set) => ({
    
    count: 0,
    incrementar: () => set((state) => ({count: state.count + 1})),
    decrementar: () => set((state) => {
            
        if ( state.count <= 0) {
            return { count: 0}
        } else {
            return { count: state.count - 1 }
        }
    })

})); 