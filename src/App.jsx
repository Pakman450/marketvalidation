import { useState } from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import Carousel from './components/Carousel/Carousel'
import backGroundImg from '/src/assets/back.jpg'
import backGroundImg1 from '/src/assets/back1.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative h-screen w-full bg-white bg-cover bg-center flex items-center justify-end" style={{ backgroundImage: `url(${backGroundImg1})` }}>
        <div className="absolute inset-0"></div>

        <div className="relative pr-10 lg:pr-20 pb-40 lg:pb-20 ">
          <div className='flex flex-col lg:flex-row'>
            <div className="hero" >
              <div className="hero-content text-right">
                <div className="max-w-lg">
                  <h1 className="text-4xl text-black font-bold">Do you need help with your finances?</h1>
                  <p className="py-6 text-black ">
                    We are setting up a 1-to-1 bugeting consultation service.
                    Sign up below to get notified when we are launching!
                  </p>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                  <button className="btn btn-primary text-black ">Sign up</button>
                  
                </div>
              </div>
 
            </div>
          </div>
        </div>
        
      </div>

    </>
  )
}

export default App
