export type ProductProps = {
  id: string
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
  function handleAddToCart() {}
  return (
    <article className='product'>
      <div className='product-content'>
        <div>
          <h3>{title}</h3>
          <p className='product-content'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-action'>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </p>
      </div>
    </article>
  )
}
