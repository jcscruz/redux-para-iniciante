import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addProduct: (state, action) => {
            //verificar se dentro do state tem o mesmo produto enviado pela action, se sim, armazenar na constante
            const productIsAlreadyInCart = state.products.some((product) => product.id === action.payload.id)
            if(productIsAlreadyInCart){
                state.products = state.products.map((product) => 
                product.id === action.payload.id
                ? {...product, quantity: product.quantity + 1} : product )  
                return              
            }
            
            state.products = [...state.products, {...action.payload, quantity: 1}]
            
        },
        increaseProduct: (state, action) => {
            console.log('ppppppp')
            state.products = state.products
                .map(p => 
                    p.id === action.payload 
                    ? {...p, quantity: p.quantity + 1} : p)
            return
        },
        decreaseProduct: (state, action) => {
            state.products = state.products
                .map((p) => 
                    p.id === action.payload 
                    ? {...p, quantity: p.quantity - 1} 
                : p
            )
            .filter((product) => product.quantity > 0)
            
            return
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
            return
        }
    }
})

export const { addProduct, increaseProduct, decreaseProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer