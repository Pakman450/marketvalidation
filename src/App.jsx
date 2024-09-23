import { useState } from 'react'
import backGroundImg1 from '/src/assets/back1.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl"><span className='font-poppins text-2xl font-bold'>ClearPath Budgeting</span></a>
      </div>
      <div className="relative h-screen w-full bg-white bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${backGroundImg1})` }}>

      <div className="absolute inset-0"></div>

      <div className="relative sm:px-10 lg:px-20 lg:pb-80">
        <div className='flex flex-col lg:flex-row border-black shadow-xl rounded-lg'>
          <div className="hero" >
            <div className="hero-content text-center">
              <div className="max-w-lg">

                <h1 className="text-4xl text-black font-bold">Do you need help with your finances?</h1>
                <p className="py-6 text-black ">
                  We are setting up a 1-to-1 budgeting consultation service.
                  Sign up below to get notified when we are launching!
                  <br/><span className='text-slate-400'>We respect your privacy. We do not share your email to anyone else.</span>
                </p>
                <input type="email" placeholder="Email" className="input input-bordered w-full  lg:max-w-xs lg:mx-5 mb-5" />

                <button className="btn btn-primary text-white">Sign up</button>
                
              </div>
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
