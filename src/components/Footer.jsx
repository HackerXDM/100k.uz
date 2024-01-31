import React from 'react'
//import syles
import { styles } from "../style"
import { Link, NavLink } from "react-router-dom";
import logo_100k from "../image/logo_100k.png";

const Footer = () => {
  return (
    <>
   <footer className='bg-gray-800 text-white p-5 sm:p-10'>
  <div className='w-full max-w-[1000px] pl-1 mx-auto'>
    <ul className="space-y-4 sm:space-y-6">
      <li className='flex flex-col sm:flex-row sm:items-center justify-between sm:text-base sm:space-x-4 sm:pb-4 text-sm'>
        <NavLink to="/"><img className="w-[90px] h-[30px] filter brightness-0 invert" src={logo_100k} alt="logo_100k"/></NavLink>
        <div className='space-x-2 sm:space-x-14 mt-2 sm:mt-0'>
          <NavLink to='/Biz_haqimizda' className='hover:text-red-600'>Biz haqimizda</NavLink>
          <NavLink to='aloqa_uchun' className='hover:text-red-600'>Aloqa uchun</NavLink>
          <NavLink to='/privacy-policy' className='hover:text-red-600'>Omaviy oferta</NavLink>
        </div>
      </li>
      <li className='flex flex-col sm:flex-row sm:items-center sm:text-xs justify-between text-base'>
        <p>2016-2021- 100K.UZ</p>
        <p>Barcha huquqlar himoyalangan</p>
      </li>
    </ul>
  </div>
</footer>


    </>
  )
}

export default Footer