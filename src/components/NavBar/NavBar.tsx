import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { HiBars3BottomRight } from 'react-icons/hi2'

const NavBar = () => {
  return (
    <div className="w-[1280px] h-[72px] pr-16 pl-16 top-[170px]  border-b border-[#676767] flex items-center sm:w-[428px]">
      
      <div className="w-[1152px] h-[44px] flex justify-between items-center ">
        <div>
            <Image src={"/images/Ddsgnr Logo.svg"} alt="logo" height={41} width={130.6}></Image>
        </div>
        <div className="w-[910px] h-[44px] flex gap-8">

            <div className="w-[687px] h-[44px] flex gap-8">

                <ul className="w-[64px] h-[44px] flex gap-[10px] border-b p-[10px]">
                <li className="font-[Roboto] text-[16px] text-[#000000]"><Link href="">Home</Link></li>
                </ul>

                <ul className="w-[79px] h-[44px] flex gap-[10px] p-[10px]">
                <li className="font-[Roboto] text-[16px] text-[#000000]"><Link href="">Courses</Link></li>
                </ul>

                <ul className="w-[81px] h-[44px] flex gap-[10px] p-[10px]">
                <li className="font-[Roboto] text-[16px] text-[#000000]"><Link href="">Services</Link></li>
                </ul>

                <ul className="w-[113px] h-[44px] flex gap-[10px] p-[10px]">
                <li className="font-[Roboto] text-[16px] text-[#000000]"><Link href="">Achievements</Link></li>
                </ul>    

                <ul className="w-[86px] h-[44px] flex gap-[10px] p-[10px]">
                <li className="font-[Roboto] text-[16px] text-[#000000]"><Link href="">About Us</Link></li>
                </ul>   

                <ul className="w-[104px] h-[44px] flex gap-[10px] p-[10px]">
                <li className="font-[Roboto] text-[16px] text-[#000000]"><Link href="">Testimonials</Link></li>
                </ul>
            </div>

        <div className='w-[191px] h-[40px] flex gap-4'>
        <div className="w-[80px] h-[40px] flex gap-2 border-[1px]  rounded">
        <Button className='text-[16px] font-[Roboto] text-[#000000] bg-white px-5 py-2 hover:text-white'>Login</Button>
        </div>
        <div className="w-[80px] h-[40px] flex gap-2 border-[1px] ">
        <Button className='text-[16px] font-[Roboto] text-[#FFFFFF] px-5 py-2'>Sign Up</Button>
        </div>
        </div>


        </div>


      </div>
      <HiBars3BottomRight className='lg:hidden w-[2rem] h-[2rem] text-black'>
      </HiBars3BottomRight>
    </div>
  )
}

export default NavBar


