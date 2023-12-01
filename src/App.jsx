import { useState } from "react"
import Products from "./components/Products"
import { products as initialProducts } from './mocks/products.json'
import Header from "./components/Header"
function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category:'all',
    minPrice:0
  })

  //ESTA LOGICA REPASARLA ENTENDERLA Y APLICARLA
  const fiterProducts = (products) => {
    return products.filter(product => {
      return product.price >= filters.minPrice &&
      (
        filters.category === 'all' ||
        product.category === filters.category
      )
    })
  }

  const filteredProducts = fiterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts} />
    </>
  )
}

export default App
