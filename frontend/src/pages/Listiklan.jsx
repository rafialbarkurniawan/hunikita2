import React from 'react'
import Navbar from '../components/Navbar'
import Properti from '../components/Properti'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Listiklan = () => {
  return (
    <div>
        <Navbar />
      <div className="gap-4 ml-[36px] mt-[44px]">
        <h1 className="text-[36px] font-bold">List Properti Anda</h1>
        <hr className="w-[1274px] h-[2px] bg-gray-300" />
      </div>
      <Properti />
      <Link to="/form-tambah">
        <div className="w-[274px] h-[62px] justify-center items-center text-white bg-[#4E97D1] flex rounded-[10px] text-[22px] mt-[62px] mx-auto cursor-pointer font-semibold">
          + Tambahkan Iklan
        </div>
      </Link>
      <div className="mt-[50px]">
        <Footer />
      </div>
    </div>
  )
}

export default Listiklan