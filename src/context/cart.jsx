import { createContext,useReducer } from "react";

//1. CREAR CONTEXTO:
export const CartContext = createContext()

const initialState = []
const reducer = (state, action) => {
  const {type, payload} = action

  switch (type) {
    case 'ADD_TO_CART':{
      const { id } = payload
      const productInCartIndex = state.findIndex(i => i.id === id)

      if(productInCartIndex >= 0){
        // STRUCTURED CLONE HACE UNA COPIA PROFUNDA DE OBJETOS O ARRAIS
        const newState = structuredClone(state)
        console.log(newState)
        newState[productInCartIndex].quantity += 1
        return newState
      }

      return [
        ...state,
        {
          ...payload,
          quantity: 1
        }
      ]
    }

    case 'REMOVE_FROM_CART':{
      const { id } = payload
      return state.filter(p => pid !== id)
    }

    case 'CLEAR_CART':{
      return initialState
    }

  }
  return state
}

//2. CREAR PROVIDER:
export function CartProvider({children}){
  const [state, dispatch] = useReducer(reducer, initialState)

  const addCart = product => dispatch({
    type:'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type:'REMOVE_FROM_CART',
    payload:product
  })

  const clearCart = () => dispatch({
    type:'CLEAR_CART'
  })
  return (
    <CartContext.Provider value={{
      cart: state,
      addCart,
      clearCart,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}