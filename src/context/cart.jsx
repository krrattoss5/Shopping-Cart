import { useContext,useState } from "react";

//1. CREAR CONTEXTO:
export const CartContext = useContext()

//2. CREAR PROVIDER:
export function CartProvider({children}){
  const [cart, setCart] = useState([])

  const addCart = (product) => {
    //check if the product is already in the cart
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if(productInCartIndex >= 0){
      // STRUCTURED CLONE HACE UNA COPIA PROFUNDA DE OBJETOS O ARRAIS
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    setCart(prevState => {[
      ...prevState,
      {
        ...product,
        quantity:1
      }
    ]})

  }
  const clearCart = (product) => {
    setCart([])
  }
  return (
    <CartContext.Provider value={{
      cart,
      addCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}