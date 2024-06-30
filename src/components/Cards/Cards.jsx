import React from 'react'

export default function Cards() {
  return (
    <>
    <div className='md:flex md:justify-evenly grid justify-items-center' >
        <div className="card bg-base-100 max-w-sm sm:w-96 shadow-xl">
            <figure>
                <img
                src="https://placehold.co/600x400"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> Hook 1 </h2>
                <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
            <div className="card bg-base-100 max-w-sm sm:w-96 shadow-xl">
            <figure>
                <img
                src="https://placehold.co/600x400"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Hook 2 </h2>
                <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
            <div className="card bg-base-100 max-w-sm sm:w-96 shadow-xl">
            <figure>
                <img
                src="https://placehold.co/600x400"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Hook 3 </h2>
                <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>

   
    </>
  )
}
