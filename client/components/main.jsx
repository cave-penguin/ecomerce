import { useSelector } from 'react-redux'
import React from 'react'
import Head from './head'
import Header from './header'

const Main = () => {
  const { productArr } = useSelector((s) => s.products)
  // eslint-disable-next-line no-console
  console.log(productArr)
  return (
    <>
      <Head />
      <Header />

      {productArr.map((item) => {
        return (
          <div className="flex flex-row justify-center" key={item.id}>
            <div className="">{item.title}</div>
            <div className="">{item.image}</div>
            <div className="">{item.description}</div>
            <div className="">{item.price}</div>
          </div>
        )
      })}
    </>
  )
}

export default Main
