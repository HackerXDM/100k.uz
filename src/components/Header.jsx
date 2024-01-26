import React, { useState, useEffect } from 'react'
import android_icon from '../image/android.svg'
import apple_icon from '../image/apple.svg'
import global_icon from '../image/global_icon.png'
import { Link } from 'react-router-dom'
import down_icon from '../image/down_icon.png'
import up_icon from '../image/up_icon.png'
import logo_100k from '../image/logo_100k.png'
import search from '../image/search.svg'


const Header = () => {
  const playmarket = 'https://play.google.com/store/apps/details?id=uz.itmaker.stock'
  const applestore = 'https://apps.apple.com/pl/app/100k-shop/id1529911106'
 

  // function SearchBar({placeholder, data}) {}
  return (
    <header className='bg-[#E30909]'>
      <div className='w-full max-w-[900px] px-5 mx-auto'>
      <div className='container flex items-center justify-between'>
        <div className='py-2'>
          <div className='flex items-center space-x-4'>
            <Link to={playmarket} target='_blank'>
              <button className='flex items-center'>
                <img className='w-[18px] mr-1' src={android_icon} alt="android icon" />
                <p className='text-white/80 hover:text-white duration-500 font-medium'>Google Play</p>
              </button>
            </Link>
            <Link to={applestore} target='_blank'>
              <button className='flex items-center'>
                <img className='w-[18px] mr-1' src={apple_icon} alt="apple icon" />
                <p className='text-white/80 hover:text-white duration-500 font-medium'>Appstore</p>
              </button>
            </Link>
          </div>
        </div>

        {/* mening profilim */}
        <div className='flex items-center space-x-2'>
            <img className='w-[18px]' src={global_icon} alt="global_icon" />
            <Link to='aloqa_uchun' className=' cursor-pointer text-white font-medium'>Aloqa uchun</Link>
        </div>
     
      </div>
      </div>
      <nav>
      <div className='bg-white'>
        <div className='w-full max-w-[900px] px-5 mx-auto'>
        <div className='container flex items-center justify-between py-3'>
          <div className='flex items-center xl:space-x-[126px]'>
            <Link to='/'>
              <img className='w-[110px] h-[30px] ' src={logo_100k} alt="logo_100k" />
            </Link>
            <div className='flex'>
            <div>
              <input className='border-2  rounded-l-full py-1 text-black px-5 w-[350px]' type="text" placeholder='qidiruv...'/>
            </div>
            <div className='bg-red-600  py-1 px-3  rounded-e-full'>
              <img  className='w-[15px] h-[25px]' src={search} alt="search_icon" />
            </div>
            </div>
            <div>
            <Link to="https://t.me/yuzkabot" className='hover:text-red-500  text-sm md:text-base flex space-x-2'><b>Telegram</b><b>bot</b></Link>
            </div>
          </div>  
        </div>
        </div>
      </div>
      </nav>
    </header>
  )
}

export default Header