import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    
      <div className='w-[1280px] h-[228px] top-[1038px] left-[100px] py-20 px-16 bg-[#F7F7F7] flex gap-18'>
<div className='w-[320px] h-[68px]'>
    <h5 className='font-[Roboto] font-bold text-[24px] leading-[33.6px] text-[#000000]'> Trusted by 2000+ companies worldwide.</h5>
</div>
    

<div className='w-[880px] h-[56px] pt-[8.74px] pb-[8.74px] gap-[19.12px] flex items-end'>
    <Image src={"/images/Airbnb logo.svg"} alt="logo1" width={123.8} height={38.5}></Image>
    <Image src={"/images/Airbnb logo2.svg"} alt="logo2" width={123.8} height={38.5}></Image>
    <Image src={"/images/Airbnb logo3.svg"} alt="logo3" width={123.8} height={38.5}></Image>
    <Image src={"/images/Airbnb logo4.svg"} alt="logo4" width={123.8} height={38.5}></Image>
    <Image src={"/images/Airbnb logo5.svg"} alt="logo5" width={123.8} height={38.5}></Image>
    <Image src={"/images/Airbnb logo6.svg"} alt="logo6" width={123.8} height={38.5}></Image>
</div>

</div>

  
  )
}

export default Logo
