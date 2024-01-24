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
            <li className='flex space-x-[109px] pb-10'>
              <NavLink to='/' className='transition ease-in-out delay-150 hover:text-red-600  hover:-translate-y-1 hover:scale-110  duration-300'>Mening kabinetim</NavLink>
              <NavLink className='transition ease-in-out delay-150 hover:text-red-600  hover:-translate-y-1 hover:scale-110  duration-300'>Biz haqimizda</NavLink>
              <NavLink to='aloqa_uchun' className='transition ease-in-out delay-150 hover:text-red-600  hover:-translate-y-1 hover:scale-110  duration-300'>Aloqa uchun</NavLink>
              <NavLink to ="/" className='transition ease-in-out delay-150 hover:text-red-600  hover:-translate-y-1 hover:scale-110  duration-300'>Omaviy oferta</NavLink>
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