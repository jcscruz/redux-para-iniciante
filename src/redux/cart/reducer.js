import CartActionTypes from "./action-types"

const initialState = {
    products: [],
    productsTotalPrice: 0,
}

const cartReducer = (state = initialState, action) =>{
    switch(action.type) {
        case CartActionTypes.ADD_PRODUCT:
            //verificar se dentro do state tem o mesmo produto enviado pela action, se sim, armazenar na constante
            const productIsAlreadyInCart = state.products.some((product) => product.id === action.payload.id)
            if(productIsAlreadyInCart){
                return{ 
                    ...state,
                    products: state.products.map((product) => 
                    product.id === action.payload.id
                ? {...product, quantity: product.quantity + 1} : product )
                }
            }
            return{
                // if(state.products.lenth === 0{})
                ...state, products: [...state.products, {...action.payload, quantity: 1}]
            }
        case CartActionTypes.REMOVE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }

        default:
            return state
    }

}

export default cartReducer