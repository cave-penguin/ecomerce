import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Buttons from './buttons'

const Header = () => {
  const { totalAmount, totalPrice } = useSelector((s) => s.basket)
  const { rates, currencyName } = useSelector((s) => s.exchange)

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
      <Link to="/basket" id="order-count">
        <div>basket</div>
        <div>{totalAmount}</div>
        <div>{(totalPrice * rates[currencyName]).toFixed(2)}</div>
      </Link>
    </div>
  )
}

export default React.memo(Header)
