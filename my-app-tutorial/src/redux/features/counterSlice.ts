import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState:{
        //puede llamarse counter y se puede usar abajo
        value: 0
    },
    reducers:{
        increment: (state) => {
            state.value = state.value +1
            //state.counter +=1
        },
        
        decrement: (state) => {
            state.value = state.value -1
        }
    }
})
// en esta linea el inicialState value seria counter y 0 seria useState(0)
// el reducer seria setCounter
//const [counter, setCounter] = useState(0)

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer