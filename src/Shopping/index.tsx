import Header from './components/Header'
import Shop from './components/Shop'
import Product from './components/Product'
import { type ProductProps } from './components/Product'
const DUMMY_PRODUCTS: ProductProps[] = []
export default function Shopping() {
  return (
    <>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </>
  )
}
