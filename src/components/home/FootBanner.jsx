import React from 'react'
import Bn1 from '../../assets/banner/bn1.png'

function FootBanner() {
  return (
    <>
        <div  className="h-96 relative mt-10 mb-10 bg-cover bg-center"
              style={{ backgroundImage: `url(${Bn1})` }} >
                    <div className="w-4/5 mx-auto h-full flex items-center justify-Start">
                      <div className="flex flex-col text-left space-y-4">
                        <h5 className="text-4xl font-bold text-white">
There's a deal for you, too
</h5>
                        <p className="text-lg text-gray-600 max-w-md text-white">
                       Don't miss a chance to save on items you've been looking for.
                        </p>
                        <button className="btn bg-gray-50 text-black rounded-full border-none hover:bg-blue-700 hover:text-white w-fit">
                          Explore Now
                        </button>
                      </div>
                    </div>
                  </div>
    </>
  )
}

export default FootBanner
