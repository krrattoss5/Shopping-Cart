import { createContext, useState } from "react";

//ESTE ES EL QUE TENEMOS QUE CONSUMIR
export const FiltersContext = createContext()

//ESTE NOS PROVEE DE ACCESO AL CONTEXTO
export function FiltersProvider({children}){
  const [filters,setFilters] = useState({
    minPrice:0,
    category:'all'
  })
  return <FiltersContext.Provider value={{
    filters,
    setFilters
  }}>
    {children}
  </FiltersContext.Provider>
}