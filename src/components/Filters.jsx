import React, { useState } from 'react'
import './Filters.css'

export default function Filters({onChange}) {
  const [minPrice,setMinPrice] = useState(0)

  const handleRange = (e) => {
    //Aqui algo huele mal
    setMinPrice(e.target.value)
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="range"
        id='price'
        min='0'
        max='1000'
        onChange={handleRange} />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select id="category">
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Spartphones</option>
        </select>
      </div>
    </section>
  )
}
