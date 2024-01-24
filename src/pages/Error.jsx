import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div className='bg-gray-100'>
      <div className='w-full max-w-[900px] px-5 mx-auto'>
        <div className='text-center py-40 h-[480px]'>
     <h3 className='text-4xl mb-10'>Afsuski sahifa topilmadi</h3>
     <p className='text-base mb-2'>Siz notog'ri havola orqali tashrif qildingiz yoki ushbu sahifa o'chirilgan bolishi mumkin.</p>
     <Link className='px-10 mt-2 bg-cyan-500  py-2  rounded-sm text-white hover:border-2 hover:border-teal-400 inline-block' to='/'>Bosh sahifaga qaytish</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Error