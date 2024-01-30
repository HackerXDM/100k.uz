import React from 'react'
import { Link } from "react-router-dom";


const Ommaviy = () => {
  return (
  <>
  <div className="hero">
    <div className='border border-gray-300 border-r-4 max-w-[900px] mx-auto'>
        <div className=' max-w-[500px] mx-auto text-base pt-[90px]'>
        <h2 className='mx-auto text-center font-bold'>OMMAVIY OFERTA(O’zbekiston Respublikasi Fuqorolik to’g’risidagi Kodeksning 369-moddasiga ko’ra ushbu ommaviy oferta yuridik shartnoma bilan tenghuquqqa ega bo’lib, “IT-MAKER” MCHJ “100k.uz” Saytining huquqiyjihatlarini o’z ichiga oladi)</h2>
        <b>Atama va tavsiflar</b>

        <p><span className='font-bold'>Axborot vositasi: Sayt</span> Faqat internet tizimi orqali savdo-hizmat ko’rsatishfaoliyati bilan shug’ullanuvchi <Link to='/'>“www.100k.uz”</Link> sayti;</p>

        <p><span className='font-bold'>Axborot vositachisi: (Admin)</span>Ijtimoiy tarmoqlar orqali o’ziga tegishli gruppa vayoki kanallarda e’lon berish huqiqiga ega bo’lgan jismoniy yoki yuridik shaxs;Axborot vositachisi sanalgan, hamda Saytning vakili vazifasini bajarib,Sotuvchi va Xaridor o’rtasida elektron reklamaaylanmasini amalgaoshiruvchi O’zbekiston Respublikasida davlat ro’yhatidan o’tgan yuridik shaxsyoki O’zbekiston Respublikasida doimiy yashovchi va daromadidan soliqto’lanishi belgilangan jismoniy shaxs</p>

        <p><span className='font-bold'>Sotuvchi:</span> Xaridorlar buyurtmasiga binoan tovarni <Link to='/'>“www.100k.uz”</Link>  Vositachiinternet platformasi orqali masofadan turib sotuvchi hamda tovarni kelgusida Xaridorga yuboruvchi yuridik yoki jismoniy shaxs;</p>

        <p><span className='font-bold'>Xaridor Mijoz:</span>O’zbekiston Respublikasida davlat ro’yhatidan o’gan yuridikshaxs yoki O’zbekiston Respublikasida doimiy yashovchi, muomalagalayoqatli 18 yoshga to’lgan jismoniy shaxs;</p>

        <p><span className='font-bold'>Ofertа:</span>Sotuvchining ma’lum shaxslar doirasiga qarata tovarlarni masofadanturibdistantsion xarid qilish to’risidagichakana savdo shartnomasinikelgusida - Shartnoma tuzish haqidagi ommaviy taklifi. Bunda Shartnomamazkur hujjatdagi va Sotuvchining saytidagi shartlari hamda internet-do’kon <Link to='/'>www.100k.uz</Link>  shartlari asosida tuziladi</p>

        <p><span className='font-bold'>Aksept:</span>Xaridor tomonidan mazkur Ofertaning Shartnoma shartlariga to’liqva so’zsiz rozi ekanligi va qabul qilishi;</p>

        <p><span className='font-bold'>Masofadan turib distantsion xarid qilish to’g’risidagichakana savdo shartnomasi:</span>kelgusida Shartnoma Xaridor Sotuvchitomonidan taklif qilingan, Internet-do’konlarda sotiladigan Tovar tavsifi bilantanishib chiqqanidan so’ng tuziladigan, hamda Xaridor tomonidan to’gridan-to’gri ushbu Tovar bilan tanishib chiqish imkonini bermaydiganchakana savdo shartnomasi</p>

        <p><span className='font-bold'>Shartnoma tomonlari:</span> Axborot vositasi Sayt /Axborot vositachisi Admin /Sotuvchi /Xaridor.</p>

        <p><span className='font-bold'>Buyurtma -</span> Xaridor tomonidan tanlangan Tovar, uning narxi, yetkazib berishmanzili, Xaridorning ismi-sharifi yoki nomi, uning kontakt aloqa raqamlari vamazkur hujjat bilan belgilangan shakldagi boshqa ma’lumotlarni o’zidamujassamlantirgan elektron hujjat.</p>

        <br />
        <p className='mb-20'>Tovar(tovarlar) Internet do’konlar tomonidan sotuvga qo’yiladigan vaXaridorning buyurtmasiga binoan Sotuvchi tomonidan masofadan turib(distantsion) sotib olinadigan va Xaridorga jo’natiladigan tovarlar</p>
        </div>
    </div>
  </div>
  </>
  )
}

export default Ommaviy