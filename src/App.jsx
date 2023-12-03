import Products from "./components/Products"
import { products as initialProducts } from './mocks/products.json'
import Header from "./components/Header"
import { useFilters } from "./hooks/useFilters"
import Cart from "./components/Cart"
import { CartProvider } from "./context/cart"

function App() {
  const {filters,filterProducts} = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header/>
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  )
}

export default App
