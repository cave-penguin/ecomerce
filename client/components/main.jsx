import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import Head from './head'
import Header from './header'
import { getProduct } from '../redux/reducers/products'
import Card from './card'

const Main = () => {
  const { productObj } = useSelector((s) => s.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Head title="Main" />
      <Header caption="SkillCrucial-5-Shop" />
      <div className="flex flex-wrap justify-between m-1">
        {Object.values(productObj).map((prod) => {
          return <Card key={prod.id} prod={prod} />
        })}
      </div>
    </>
  )
}

export default React.memo(Main)
