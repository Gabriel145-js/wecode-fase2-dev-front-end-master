import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Categories from '../../components/Categories/Categories'
import BannersNav from '../../components/BannersNav/BannersNav'
import Produtos from '../../components/Produtos/Produtos'
import ConhecaMais from '../../components/ConhecaMais/ConhecaMais'

const Home = () => {
  return (
    <section>
      <Carousel/>
      <Categories/>
      <BannersNav/>
      <Produtos/>
      <ConhecaMais/>
    </section>
  )
}

export default Home