import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const Header = () => {
  return (
    <div className=" flex w-[1280px] h-[54px] pr-16 pl-16  border-b border-[#676767]">
      <div className='flex w-[1154px] h-[54px] pt-3 pb-3 gap-8'>
        <div className="w-[386px] h-[30px] flex gap-4 ">
        <p className='text-[14px] text-[#000000] font-[Roboto]'>Phone Number: 956 742 455 678</p>
        <p className='border-r-[1px] border-[#676767]'></p>
        <p className='text-[14px] text-[#000000] font-[Roboto]'>Email:info@ddsgnr.com</p>
        </div>

    <div className="flex w-[736px] h-[24px] gap-4 justify-end">
        <div className=" flex w-[132px] h-[24px] gap-3">
        <Link href="htps://facebook.com/Ddsgnr"><FaFacebookF /></Link> 
        <Link href="htps://instagram.com/Ddsgnr"><FaInstagram /></Link>
        <Link href="htps://twitter.com/Ddsgnr"><FaTwitter /></Link>
        <Link href="htps://Ddsgnr/linkedin.com/Ddsgnr"><FaLinkedin /></Link>
        </div>
    </div>
    
    </div>
    </div>
  )
}

export default Header
