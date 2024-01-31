import React from 'react'

const Aloqa_uchun = () => {
  return (
    <header className='bg-gray-100'>
    <div className="w-full max-w-[1000px] px-5 mx-auto">
      <div className='md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-col'>
        <h3 className='text-3xl font-serif pt-10 pb-5'>Murojat uchun</h3>
        <div className='flex'>
          <b>Call-center:</b>
          <span className='md:block lg:inline xl:block'>+998 55 500 55-11</span>
        </div>
        <div className='flex'>
          <b>Elektron pochta:</b>
          <span className='md:block lg:inline xl:block'>info@100k.uz</span>
        </div>
        <div className='flex pb-5'>
          <p>Telegram:</p>
          <a className='text-red-500' href="https://t.me/Xack_XDM" target="_blank">@yuzka_support</a>
        </div>
      </div>
    </div>
  </header>
  
  )
}

export default Aloqa_uchun