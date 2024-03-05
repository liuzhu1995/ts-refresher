import { createPortal } from 'react-dom'
import CartItems from './CartItems'
type CartProps = {
  onClose: () => void
}
export default function Cart({ onClose }: CartProps) {
  return createPortal(
    <>
      <div className='card-backdrop'></div>
      <div id='cart-modal'>
        <h2>Your Cart</h2>
        <div id='cart-actions'>
          <CartItems />
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>,
    document.querySelector('#modal')!
  )
}
