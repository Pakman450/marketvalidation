import React from 'react'

export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://placehold.co/400x400"
          className="max-w-sm rounded-lg shadow-2xl" />
        <div className='p-10'>
          <h1 className="text-5xl font-bold">PLACE TEXT HERE</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary text-white">Get Started</button>
        </div>
      </div>
    </div>
  )
}
