import React from 'react'
//import syles
import { styles } from "../style"
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className='bg-gray-800 text-white p-10'>
        <div className={`${styles.container}`}>
          <ul>
            <li className='xl:flex xl:text-base xl:space-x-[109px] xl:pb-10 lg:flex lg:text-base lg:space-x-[109px] lg:pb-10 md:grid md:grid-cols-2 md:space-x-[10px] md:pb-10 md:text-base sm:grid sm:grid-cols-2 sm:space-x-[10px] sm:pb-10 sm:text-base grid grid-cols-1 leading-9 pb-10 text-base'>
              <NavLink to='/' className='hover:text-red-600'>Mening kabinetim</NavLink>
              <NavLink className='hover:text-red-600'>Biz haqimizda</NavLink>
              <NavLink to='aloqa_uchun' className='xl:hover:text-red-600 lg:hover:text-red-600 md:hover:text-red-600 md:my-2 sm:my-2'>Aloqa uchun</NavLink>
              <NavLink to ="/" className='xl:hover:text-red-600 lg:hover:text-red-600 md:hover:text-red-600 md:my-2 sm:my-2'>Omaviy oferta</NavLink>
            </li>
            <li className='flex justify-between'>
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