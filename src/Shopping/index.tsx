import Header from './components/Header'
import Shop from './components/Shop'
import Product from './components/Product'
import { type ProductProps } from './components/Product'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import './shopping-style.scss'
const DUMMY_PRODUCTS: ProductProps[] = [
  {
    id: 1,
    title: 'delectus aut autem',
    price: 10,
    description: 'accusamus beatae ad facilis cum similique qui sunt',
  },
  {
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    price: 10,
    description: 'accusamus beatae ad facilis cum similique qui sunt',
  },
  {
    id: 3,
    title: 'fugiat veniam minus',
    price: 10,
    description: 'accusamus beatae ad facilis cum similique qui sunt',
  },
]

export default function Shopping() {
  // const { items } = useSelector((store) => store.cart)
  return (
    <Provider store={store}>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </Provider>
  )
}
