import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeCurrency } from '../redux/reducers/exchange'

const Card = ({ prod }) => {
  const dispatch = useDispatch()
  const { rates, currencyName } = useSelector((s) => s.exchange)
  // console.log(rates, currencyName)
  useEffect(() => {
    dispatch(changeCurrency(currencyName))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="flex flex-col border rounded-md mt-2 p-2 h-70 w-40" key={prod.id}>
      <div className="">{prod.title}</div>
      <img className="object-cover h-40 w-full" src={prod.image} alt={prod.title} />
      <div className="">{prod.description}</div>
      <div className="">{prod.price * rates[currencyName].toFixed(2)}</div>
    </div>
  )
}

export default Card
