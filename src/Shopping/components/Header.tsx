import { useState } from 'react'
import { useCartDispatch, useCartSelector } from '../../store/hooks'
import { fetchTodo } from '../../store/todos-slice'
import Cart from './Cart'

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false)
  const dispatch = useCartDispatch()
  const totalQuanity = useCartSelector((state) =>
    state.cart.items.reduce((prev, current) => {
      return prev + current.quantity
    }, 0)
  )
  function handleOpenCartClick() {
    setCartIsVisible(true)
  }

  function handleCloseCartClick() {
    setCartIsVisible(false)
  }
  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id='main-header'>
        <div id='main-title'>
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart({totalQuanity})</button>
          <button onClick={() => dispatch(fetchTodo())}>Fetch</button>
        </p>
      </header>
    </>
  )
}
