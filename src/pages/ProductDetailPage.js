import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductDetail from '../features/product/components/ProductDetail'

const ProductDetailPage = () => {
  return (
    <>
      <Navbar Children={<ProductDetail />}/>
    </>
  )
}

export default ProductDetailPage
