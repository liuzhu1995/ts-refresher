import { useCartDispatch, useCartSelector } from '../../store/hooks'
import {
  addToCart,
  removeFromCart,
  type CartItem,
} from '../../store/cart-slice'

export default function CartItems() {
  const dispatch = useCartDispatch()
  const cartItems = useCartSelector((state) => state.cart.items)

  function handleRemoveFromCart(id: number) {
    dispatch(removeFromCart(id))
  }
  function handleAddToCart(cart: CartItem) {
    dispatch(addToCart(cart))
  }
  const totalPrice = cartItems.reduce((prev, current) => {
    return prev + current.price * current.quantity
  }, 0)
  const formatterTotalPrice = totalPrice.toFixed(2)
  return (
    <div id='cart'>
      {cartItems.length === 0 && <p>No item in cart!</p>}

      {cartItems.length > 0 && (
        <ul id='cart-items'>
          {cartItems.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`

            return (
              <li key={item.id}>
                <div className='cart-item-content'>
                  <span>{item.title}</span>
                  <span>{formattedPrice}</span>
                </div>
                <div className='cart-item-actions'>
                  <button
                    className='btn btn-danger'
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className='btn  btn-danger'
                    onClick={() => handleAddToCart(item)}
                  >
                    +
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      )}
      <p id='card-total-price'>
        Cart Total: <strong>${formatterTotalPrice}</strong>
      </p>
    </div>
  )
}
