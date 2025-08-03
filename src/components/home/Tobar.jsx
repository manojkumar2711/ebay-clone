import React from 'react'

function Tobar() {
  return (
    <>
       <div className="navbar bg-base-100 shadow-sm p-0 pl-16 pr-16 m-0 min-h-[0rem]">
  <div className="flex-1 m-0 p-0">
   <ul className="menu menu-horizontal p-0 px-1 ">
      <li className='inline pt-1'>Hi! <a className='inline p-0 link' > Sign in </a> or <a className='inline p-0 link'> register</a></li>
      <ul className='hidden md:inline-flex'>
       <li><a>Daily Deals</a></li>
        <li><a>Brand Outlet</a></li>
         <li><a>Gift Cards</a></li>
          <li><a>Help & Contact</a></li>
          </ul>
      </ul>

  </div>
  <div className="flex-none m-0 p-0">
    <ul className="hidden md:inline-flex menu menu-horizontal p-0 px-1">
      <li><a>Sell</a></li>
      <li>
        <details>
          <summary>Watchlist</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
       <li>
        <details>
          <summary>My eBay</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Watchlist</a></li>
            <li><a>Expand List</a></li>
          </ul>
        </details>
      </li>
    </ul>

    
       <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
      </div>
    </button>


     <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          {/* <span className="badge badge-sm indicator-item">8</span> */}
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>


    </>
  )
}

export default Tobar
