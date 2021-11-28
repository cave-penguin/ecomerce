import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from './buttons'

const Header = () => {
  return (
    <div className="flex  justify-between bg-gray-400">
      <div className="flex align-center bg-blue-200">Online store</div>
      <Buttons />
      <Link
        to="/"
        id="brand-name"
        className="border-2 rounded-md border-black border-solid m-4 bg-blue-200"
      >
        MAIN
      </Link>
      {/* <Link to="/basket" id="order-count"></Link> */}
    </div>
  )
}

export default Header
