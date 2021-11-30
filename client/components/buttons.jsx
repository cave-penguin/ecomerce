import React from 'react'
import { useDispatch } from 'react-redux'

import { changeCurrency } from '../redux/reducers/exchange'

const Buttons = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="flex">
        <button
          className="border-2 rounded-md border-black border-solid m-4 bg-blue-200"
          type="button"
          onClick={() => dispatch(changeCurrency('USD'))}
        >
          USD
        </button>
        <button
          className="border-2 rounded-md border-black border-solid m-4 bg-blue-200"
          type="button"
          onClick={() => dispatch(changeCurrency('EUR'))}
        >
          EUR
        </button>
        <button
          className="border-2 rounded-md border-black border-solid m-4 bg-blue-200"
          type="button"
          onClick={() => dispatch(changeCurrency('CAD'))}
        >
          CAD
        </button>
      </div>
    </>
  )
}

export default Buttons
