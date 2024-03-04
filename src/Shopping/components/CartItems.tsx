type CartItem = {
  id: string
  price: number
  title: string
  quantity: number
}
type CartItemsProps = {
  cartItems: CartItem[]
}

export default function CartItems({ cartItems }: CartItemsProps) {
  function handleRemoveFromCart(id: string) {}
  function handleAddToCart(cart: CartItem) {}
  return (
    <div id='cart'>
      <p>No item in cart!</p>

      {/* <ul id='cart-items'>
        {cartItems.map((item) => {
          const formattedPrice = `$$${item.price.toFixed(2)}`

          return (
            <li key={item.id}>
              <div>
                <span>{item.title}</span>
                <span>{formattedPrice}</span>
              </div>
              <div className='cart-item-actions'>
                <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleAddToCart(item)}></button>
              </div>
            </li>
          )
        })}
      </ul> */}
    </div>
  )
}
