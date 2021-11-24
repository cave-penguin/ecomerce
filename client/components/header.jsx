import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h1>Online store</h1>
      <Link to="/" id="brand-name">
        GO TO MAIN
      </Link>
      {/* <Link to="/basket" id="order-count"></Link> */}
      <div className="flex">
        <button className="border-2 border-black border-solid m-4" type="button">
          USD
        </button>
        <button className="border-2 border-black border-solid m-4" type="button">
          EUR
        </button>
        <button className="border-2 border-black border-solid m-4" type="button">
          CAD
        </button>
      </div>
    </div>
  )
}

export default Header
