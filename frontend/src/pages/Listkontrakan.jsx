import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/beranda/Search'
import Card from '../components/beranda/Card'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'
import { Link } from 'react-router-dom'

const Listkontrakan = () => {
  return (
    <div>
        <Navbar />
      <div className="mt-[25px] justify-center">
        <Search />
      </div>
      <div className="flex flex-col w-full mt-[30px]">
        <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
          <Link to="/detail-kontrakan">
            <Card />
          </Link>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="flex flex-col w-full mt-[30px]">
        <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="flex flex-col w-full mt-[30px]">
        <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="mt-[90px]">
        <Pagination />
      </div>
      <div className="mt-[98px]">
        <Footer />
      </div>
    </div>
  )
}

export default Listkontrakan