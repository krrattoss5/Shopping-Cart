import { useId } from 'react'
import {ClearCartIcon,CartIcon} from './Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'

export default function Cart(){
  const cartCheckboxId = useId()

  const {cart, clearCart, addCart } = useCart()

  const withProducts = cart.length >= 1 ? true : false

  return(
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden/>

      <aside style={{overflow:'scroll'}} className='cart'>
        <ul>
          { withProducts
            ? cart.map(p => (
              <li key={p.id}>
                <img src={p.thumbnail} alt="" />

                <div>
                  <strong>{p.title}</strong> - ${p.price * p.quantity}
                </div>

                <footer>
                  <button>-</button>
                  <small>
                    Qty:{p.quantity}
                  </small>
                  <button onClick={() => addCart(p)}>+</button>
                </footer>

              </li>
            ))
            : 'No products here!'}
        </ul>

        <button onClick={clearCart}><ClearCartIcon /></button>

      </aside>
    </>
  )
}