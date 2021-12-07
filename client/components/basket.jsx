import React from 'react'
import { useSelector } from 'react-redux'

import Head from './head'
import Header from './header'

const Basket = () => {
  const { list } = useSelector((s) => s.basket)
  const { productObj } = useSelector((s) => s.products)
  const { rates, currencyName } = useSelector((s) => s.exchange)
  return (
    <>
      <Head title="Basket" />
      <Header caption="SkillCrucial-5-Shop" />
      <div className="flex flex-wrap m-1">
        {Object.keys(list).map((idKey) => {
          return (
            <div key={idKey} className="flex flex-col border rounded-md mt-2 p-2 h-70 w-40">
              <div>{productObj[idKey].title}</div>
              <img
                className="object-cover h-40 w-full"
                src={productObj[idKey].image}
                alt={productObj[idKey].title}
              />
              <div>{productObj[idKey].description}</div>
              <div>amount {list[idKey].amount}</div>
              <div>
                price{' '}
                {(productObj[idKey].price * rates[currencyName] * list[idKey].amount).toFixed(2)}{' '}
                {currencyName}
              </div>
              <button type="button" className="border border-r-2">
                +1
              </button>
              <button type="button" className="border border-r-2">
                -1
              </button>
              <button type="button" className="border border-r-2">
                Remove
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Basket
