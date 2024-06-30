import { useState } from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid justify-items-center '>
    <div className='max-w-max p-[2rem] '>
      <Navbar/>
      <Hero/>
      <Cards/>
    </div>

    </div>

  )
}

export default App
