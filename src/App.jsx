import Products from "./components/Products"
import { products as initialProducts } from './mocks/products.json'
import Header from "./components/Header"
import { useFilters } from "./hooks/useFilters"
import Cart from "./components/Cart"

function App() {
  const {filters,filterProducts} = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header/>
      <Cart />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
