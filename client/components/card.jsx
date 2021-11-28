import React from 'react'

const Card = ({ prod }) => {
  return (
    <div className="flex flex-col border rounded-md mt-2 p-2 h-70 w-40" key={prod.id}>
      <div className="">{prod.title}</div>
      <img className="object-cover h-40 w-full" src={prod.image} alt={prod.title} />
      <div className="">{prod.description}</div>
      <div className="">{prod.price}</div>
    </div>
  )
}

export default Card
