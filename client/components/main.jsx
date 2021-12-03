import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import Head from './head'
import Header from './header'
import { getProduct } from '../redux/reducers/products'
import Card from './card'
import { getRates } from '../redux/reducers/exchange'

const Main = () => {
  const { productArr } = useSelector((s) => s.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct())
    dispatch(getRates())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Head />
      <Header />
      <div className="flex flex-wrap justify-between m-1">
        {productArr.map((prod) => {
          return <Card key={prod.id} prod={prod} />
        })}
      </div>
    </>
  )
}

export default React.memo(Main)
