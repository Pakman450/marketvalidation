import { useState } from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import Carousel from './components/Carousel/Carousel'
import backGroundImg from '/src/assets/back.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${backGroundImg})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 ">
          <div className='flex flex-col lg:flex-row'>
            <div className="hero" >
              <div className="hero-content text-center">
                <div className="max-w-lg">
                  <h1 className="text-7xl font-bold">Hello there</h1>
                  <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Sign up</button>
                  
                </div>
              </div>
              
            </div>
            <Carousel/>
          </div>
        </div>
        
      </div>

    </>
  )
}

export default App
