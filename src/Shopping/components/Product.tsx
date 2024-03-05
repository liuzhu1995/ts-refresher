// import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../store/cart-slice'
import { useCartDispatch } from '../../store/hooks'

export type ProductProps = {
  id: number
  title: string
  price: number
  description: string
}
export default function Product({
  id,
  title,
  price,
  description,
}: ProductProps) {
  const dispatch = useCartDispatch()
  function handleAddToCart() {
    dispatch(addToCart({ id, title, price }))
  }
  return (
    <div className='card text-bg-success' style={{ width: '18rem' }}>
      {/* <img src='...' className='card-img-top' alt='...' /> */}
      <div className='card-body'>
        <h5 className='card-title'>Card title</h5>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        <button className='btn btn-primary' onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
