import { useCart } from "../hooks/useCart"
import { AddToCartIcon,ClearCartIcon } from "./Icons"
import './Products.css'

export default function Products({ products }) {
  const {cart, addCart, removeFromCart, clearCart} = useCart()

  const checkProductInCart = product => {
    return cart.some(p => p.id === product.id)
  }
  return (
    <main className="products">
      <ul>
        {products.slice(0,10).map(p => {
          const isProductInCart = checkProductInCart(p)
          return (
          <li key={p.id}>
            <img src={p?.thumbnail} alt={p.title} />
            <div>
              <strong>{p.title}</strong> - ${p.price}
            </div>
            <div>
              <button style={{backgroundColor: isProductInCart ? 'red' : '#09f'}} onClick={() => isProductInCart
                ? removeFromCart(p)
                : addCart(p)}
                >
                {isProductInCart
                  ? <ClearCartIcon />
                  :<AddToCartIcon/>
                }
              </button>
            </div>
          </li>
        )})}
      </ul>
    </main>
  )
}
