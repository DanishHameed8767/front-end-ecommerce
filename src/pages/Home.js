import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/product/components/ProductList'

const Home = () => {
  return (
    <>
      <Navbar Children={<ProductList />}/>
    </>
  )
}

export default Home
