import React, { useState,useId } from 'react'
import './Filters.css'

export default function Filters({onChange}) {
  const [minPrice,setMinPrice] = useState(0)
  //EL HOOK useId NO FUNCIONA PARA HACER MAPS NI PARA KEYS
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleRange = (e) => {
    //Aqui algo huele mal
    setMinPrice(e.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice:e.target.value
    }))
  }
  
  const handleCategory = (e) => {
    onChange(prevState => ({
      ...prevState,
      category:e.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Price:</label>
        <input type="range"
        id={minPriceFilterId}
        min='0'
        max='1000'
        onChange={handleRange} />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleCategory}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  )
}
