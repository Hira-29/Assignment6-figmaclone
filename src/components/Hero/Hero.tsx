import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <div className="w-[1280px] h-[800px] flex">
        <div className="w-1/2 flex flex-col justify-center items-center m-12">
        <div className="w-[640px] h-[300px] pr-[60px] pl-[80px] gap-6">
        <div className="w-[500px] h-[212px] gap-6">
            <h1 className="font-[Roboto] font-bold text-[56px] text-[#000000] leading-[67.2px]">
            Learn new skills online with ease
            </h1>
            <p className="font-[Roboto] font-normal text-[18px] text-[#000000] leading-[27px]">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
            </p>
            </div>
        <div className="w-[358px] h-[64px] pt-[16px] gap-4 flex" >
            <Button variant='outline' className=" text-[16px] leading-6 text-[#FFFFFF] border-[1px] rounded-[5px]  bg-[#000000] border-[#000000] border-solid">Start learning now</Button>
            <Button variant='outline' className=" text-[16px] leading-6 text-[#000000] border-[1px] rounded-[5px]  border-[#000000] border-solid ">Explore Courses</Button>
        
        </div>   
        </div>
        
        </div>

        <div className="w-1/2 flex justify-centeritems-center">
        <Image src={"/images/Image.svg"} alt="Heroimg" height={900} width={640}></Image>
        </div>



    </div>
  )
}

export default Hero
