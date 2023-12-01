import React from 'react'
import Filters from './Filters.jsx'

export default function Header({changeFilters}) {
  return (
  <header>
    <h1>React Shop</h1>
    <Filters onChange={changeFilters} />
  </header>  )
}
