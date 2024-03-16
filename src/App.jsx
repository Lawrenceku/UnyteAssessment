import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import ProductList from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='bg-[#050505] p-4'>
            <SearchBar/>
        </div>
        <ProductList/>
    </>
  )
}

export default App
