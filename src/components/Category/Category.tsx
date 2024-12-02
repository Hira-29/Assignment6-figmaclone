import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const Category = () => {
  return (
    <div className='w-[1280px] h-[1049px] top-[1266px] left-[100px] px-16 py-28 gap-[80px] bg-[#FFFFFF] flex flex-col items-center'>
      <div className='w-[768px] h-[109px] gap-[357px]'>
        <h2 className='font-[Roboto] font-bold text-5xl leading-[57.6px]'>Explore Courses By Category</h2>
      <p className='w-[768px] h-[27px] font-[Roboto] text-lg leading-[27px]'>
      Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>

      </div>

  {/*Main div*/}    
<div className='w-[1280px] h-[636px] grid  gap-24 '>

{/* First Row Div*/}
<div className='w-[1280px] h-[132px] flex gap-6'>
  
  
    {/*Design n Development*/}
  <div className='w-[410.67px] h-[132px] border-solid rounded-[5px] p-4 flex gap-8'>
   
    <div className='w-[100px] h-[100px] rounded-[5px] p-[34px] flex gap-[10px] '>
      <Image src={"/images/pentool.svg"} alt="pen" height={32} width={32}></Image>
    
   
    <div className='w-[246.67px] h-[57px] flex gap-6'>
      <div className='w-[246.67px] h-[30px]'>
    <h5 className='font-[Roboto] font-semibold text-xl leading-[30px]'>Design & Development</h5>
   
    <div className='w-[246.67px] h-[27px]'>
    <h5 className='font-[Roboto] text-lg leading-[27px]'>50+ Courses Available</h5>
    </div>
    </div>
    </div>
  </div>
</div>
{/* End Of Design and Development*/}

{/*Marketing Div*/}
<div className='w-[410.67px] h-[132px] border-solid rounded-[5px] p-4 flex gap-8'>
<div className='w-[100px] h-[100px] rounded-[5px] p-[34px] flex gap-[10px] '>
      <Image src={"/images/pentool.svg"} alt="pen" height={32} width={32}></Image>
    
   
    <div className='w-[246.67px] h-[57px] flex gap-6'>
      <div className='w-[246.67px] h-[30px]'>
    <h5 className='font-[Roboto] font-semibold text-xl leading-[30px]'>Marketing</h5>
   
    <div className='w-[246.67px] h-[27px]'>
    <h5 className='font-[Roboto] text-lg leading-[27px]'>50+ Courses Available</h5>
    </div>
    </div>
    </div>
  </div>
</div>
{/* Marketing Div*/}

{/*Development Div*/}
<div className='w-[410.67px] h-[132px] border-solid rounded-[5px] p-4 flex gap-8'>
<div className='w-[100px] h-[100px] rounded-[5px] p-[34px] flex gap-[10px] '>
      <Image src={"/images/pentool.svg"} alt="pen" height={32} width={32}></Image>
    
   
    <div className='w-[246.67px] h-[57px] flex gap-6'>
      <div className='w-[246.67px] h-[30px]'>
    <h5 className='font-[Roboto] font-semibold text-xl leading-[30px]'>Development</h5>
   
    <div className='w-[246.67px] h-[27px]'>
    <h5 className='font-[Roboto] text-lg leading-[27px]'>50+ Courses Available</h5>
    </div>
    </div>
    </div>
  </div>
</div>
{/* Marketing Div*/}

</div>
{/*End of First Row Div*/}


{/* Second Row Div*/}
<div className='w-[1280px] h-[132px] flex gap-6'>
  
  
    {/*Communication*/}
  <div className='w-[410.67px] h-[132px] border-solid rounded-[5px] p-4 flex gap-8'>
   
    <div className='w-[100px] h-[100px] rounded-[5px] p-[34px] flex gap-[10px] '>
      <Image src={"/images/pentool.svg"} alt="pen" height={32} width={32}></Image>
    
   
    <div className='w-[246.67px] h-[57px] flex gap-6'>
      <div className='w-[246.67px] h-[30px]'>
    <h5 className='font-[Roboto] font-semibold text-xl leading-[30px]'>Communication</h5>
   
    <div className='w-[246.67px] h-[27px]'>
    <h5 className='font-[Roboto] text-lg leading-[27px]'>50+ Courses Available</h5>
    </div>
    </div>
    </div>
  </div>
</div>
{/* End Of Communication div*/}

{/* Digital Marketing Div*/}
<div className='w-[410.67px] h-[132px] border-solid rounded-[5px] p-4 flex gap-8'>
<div className='w-[100px] h-[100px] rounded-[5px] p-[34px] flex gap-[10px] '>
      <Image src={"/images/pentool.svg"} alt="pen" height={32} width={32}></Image>
    
   
    <div className='w-[246.67px] h-[57px] flex gap-6'>
      <div className='w-[246.67px] h-[30px]'>
    <h5 className='font-[Roboto] font-semibold text-xl leading-[30px]'>Digital Marketing</h5>
   
    <div className='w-[246.67px] h-[27px]'>
    <h5 className='font-[Roboto] text-lg leading-[27px]'>50+ Courses Available</h5>
    </div>
    </div>
    </div>
  </div>
</div>
{/*End Digital Marketing Div*/}

{/*Self Development Div*/}
<div className='w-[410.67px] h-[132px] border-solid rounded-[5px] p-4 flex gap-8'>
<div className='w-[100px] h-[100px] rounded-[5px] p-[34px] flex gap-[10px] '>
      <Image src={"/images/pentool.svg"} alt="pen" height={32} width={32}></Image>
    
   
    <div className='w-[246.67px] h-[57px] flex gap-6'>
      <div className='w-[246.67px] h-[30px]'>
    <h5 className='font-[Roboto] font-semibold text-xl leading-[30px]'>Self Development</h5>
   
    <div className='w-[246.67px] h-[27px]'>
    <h5 className='font-[Roboto] text-lg leading-[27px]'>50+ Courses Available</h5>
    </div>
    </div>
    </div>
  </div>
</div>
{/*End Self Dev  Div*/}

</div>
{/*End of Second Row Div*/}


{/* Third Row Div*/}
<div className='w-[1280px] h-[132px] flex gap-6'>
  
  
    {/*Bussiness*/}
  <div className='w-[410.67px] h-[132px] border-solid rounded-[5px] p-4 flex gap-8'>
   
    <div className='w-[100px] h-[100px] rounded-[5px] p-[34px] flex gap-[10px] '>
      <Image src={"/images/pentool.svg"} alt="pen" height={32} width={32}></Image>
    
   
    <div className='w-[246.67px] h-[57px] flex gap-6'>
      <div className='w-[246.67px] h-[30px]'>
    <h5 className='font-[Roboto] font-semibold text-xl leading-[30px]'>Business</h5>
   
    <div className='w-[246.67px] h-[27px]'>
    <h5 className='font-[Roboto] text-lg leading-[27px]'>50+ Courses Available</h5>
    </div>
    </div>
    </div>
  </div>
</div>
{/* End Of Business div*/}

{/* Finance Div*/}
<div className='w-[410.67px] h-[132px] border-solid rounded-[5px] p-4 flex gap-8'>
<div className='w-[100px] h-[100px] rounded-[5px] p-[34px] flex gap-[10px] '>
      <Image src={"/images/pentool.svg"} alt="pen" height={32} width={32}></Image>
    
   
    <div className='w-[246.67px] h-[57px] flex gap-6'>
      <div className='w-[246.67px] h-[30px]'>
    <h5 className='font-[Roboto] font-semibold text-xl leading-[30px]'>Finance</h5>
   
    <div className='w-[246.67px] h-[27px]'>
    <h5 className='font-[Roboto] text-lg leading-[27px]'>50+ Courses Available</h5>
    </div>
    </div>
    </div>
  </div>
</div>
{/*End Finance Div*/}

{/*Consulting Div*/}
<div className='w-[410.67px] h-[132px] border-solid rounded-[5px] p-4 flex gap-8'>
<div className='w-[100px] h-[100px] rounded-[5px] p-[34px] flex gap-[10px] '>
      <Image src={"/images/pentool.svg"} alt="pen" height={32} width={32}></Image>
    
   
    <div className='w-[246.67px] h-[57px] flex gap-6'>
      <div className='w-[246.67px] h-[30px]'>
    <h5 className='font-[Roboto] font-semibold text-xl leading-[30px]'>Consulting</h5>
   
    <div className='w-[246.67px] h-[27px]'>
    <h5 className='font-[Roboto] text-lg leading-[27px]'>50+ Courses Available</h5>
    </div>
    </div>
    </div>
  </div>
</div>
{/*End Consulting  Div*/}

</div>



{/*End of Third row Div*/}

<div className='flex items-center justify-center'>
<Button className='border-black' variant="outline">View All Courses</Button>
</div>
</div>





<div className='w-[1280px] h-[488px] top-[2713px] py-28 px-16 flex flex-col gap-[80px] items-center'>

  <div className='w-[1152px] h-[264px] gap-8 flex flex-col'>
  <div className='w-[1152px] h-[136px] flex flex-col gap-6'>
  <div className='w-[1152px] h-[58px]'>
   <h2 className='font-[Roboto] font-bold text-5xl leading[57.6px] text-center'>Our Achivements</h2>
  </div>

  <div className='w-[1152px] h-[54px]'>
   <p className='font-[Roboto] text-lg leading-[27px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
  </div>
  </div>
    
<div className='w-[1256px] h-[96px] flex gap-6'>

  <div className='w-[616px] h-[96px] py-2 gap-6 flex'>


<div className='w-[296px] h-[80px] py-2'>
<div className='w-[91px] h-[48px]'>
  <h3 className='font-[Roboto] font-bold text-[40px] leading-[48px]'>+200</h3>
</div>
<div className='w-[59px] h-[24px]'>
  <h3 className='font-[Roboto]  text-base leading-6 text-center'>Courses</h3>
</div>
</div>

<div className='w-[296px] h-[80px] py-2'>
<div className='w-[72px] h-[48px]'>
  <h3 className='font-[Roboto] font-bold text-[40px] leading-[48px]'>50K</h3>
</div>
<div className='w-[60px] h-[24px]'>
  <h3 className='font-[Roboto]  text-base leading-6 text-center'>Mentors</h3>
</div>
</div>

</div>


<div className='w-[616px] h-[96px] py-2 gap-6 flex'>


<div className='w-[296px] h-[80px] py-2'>
<div className='w-[91px] h-[48px]'>
  <h3 className='font-[Roboto] font-bold text-[40px] leading-[48px]'>370K</h3>
</div>
<div className='w-[59px] h-[24px]'>
  <h3 className='font-[Roboto]  text-base leading-6 text-center'>Students</h3>
</div>
</div>

<div className='w-[296px] h-[80px] py-2'>
<div className='w-[91px] h-[48px]'>
  <h3 className='font-[Roboto] font-bold text-[40px] leading-[48px]'>100+</h3>
</div>
<div className='w-[85px] h-[24px]'>
  <h3 className='font-[Roboto]  text-base leading-6 text-center'>Recognition</h3>
</div>
</div>

</div>






  </div>

  </div>
    

</div> 
 


    </div>
   
  )
}

export default Category
