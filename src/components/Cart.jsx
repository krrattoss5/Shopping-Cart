import { useId } from 'react'
import {ClearCartIcon,CartIcon} from './Icons'
import './Cart.css'

export default function Cart(){
  const cartCheckboxId = useId()
  return(
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden/>

      <aside className='cart'>
        <ul>
          <li>
            <img src="" alt="" />

            <div>
              <strong></strong>
            </div>

            <footer>
              <button>-</button>
              <small>
                Qty:
              </small>
              <button>+</button>
            </footer>

          </li>
        </ul>

        <button><ClearCartIcon /></button>

      </aside>
    </>
  )
}