import React from 'react'

const Buttons = () => {
  return (
    <>
      <div className="flex">
        <button
          className="border-2 rounded-md border-black border-solid m-4 bg-blue-200"
          type="button"
        >
          USD
        </button>
        <button
          className="border-2 rounded-md border-black border-solid m-4 bg-blue-200"
          type="button"
        >
          EUR
        </button>
        <button
          className="border-2 rounded-md border-black border-solid m-4 bg-blue-200"
          type="button"
        >
          CAD
        </button>
      </div>
    </>
  )
}

export default Buttons
