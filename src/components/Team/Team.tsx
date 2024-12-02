"use client";
import * as React from 'react'
import Image from 'next/image'
import { IoBasketballOutline } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaDotCircle } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import StarRating from '../StarRating';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};



const Team = () => {
  return (
    <div id='team' className='w-[1280px] h-[830.89px] top-[5886px] py-16 px-16 flex flex-col mb-[720px] items-center gap-[80px]'>
      
      <div className='w-[768px] h-[109px] flex flex-col gap-4  items-center sm:w-[363px] sm:h-[120px] sm:gap-4'>
      <div className='w-[768px] h-[58px] flex flex-col items-center gap-4'>
        <h2 className='font-[Roboto] font-bold text-5xl leading-[57.6px] text-center'>Our team</h2>
      </div>
       <div className="w-[768px] h-[27px] flex flex-col items-center" >
        <p className='text-lg leading-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
       </div>
      </div>


      {/*Main Image Div */}

        <div className='w-[1280px] h-[482px] grid grid-flow-col grid-cols-3 grid-rows-2 justify-center items-center gap-4'>
          
          
        {/*1st row Div */}  
          
          <div className='w-[1280px] h-[209px] flex  items-center gap-12'>
            
            
            <div className='w-[394.67px] h-[209px] gap-4 flex flex-col items-center'>
              <Image src={"/images/emp1.svg"} alt="emp1" height={80} width={80}></Image>
            
            
            <div className='w-[394.67px] h-[57px]'>
            <div className='w-[394.67px] h-[30px]'>
            <h2 className='font-[Roboto] font-semibold text-xl leading-[30px] text-center'>James Nduku</h2>
            </div>

            <div className='w-[394.67px] h-[27px]'>
            <h2 className='font-[Roboto] text-lg leading-[27px] text-center'>Marketing Coordinator </h2>
            </div>
            
            </div> 
        

          <div className='w-[100px] h-[24px] grid grid-flow-col justify-center items-center gap-[14px]'>
          
          
          <FaTwitter />
          <FaLinkedin />
          <IoBasketballOutline />
          </div>
          </div>




{/*2nd*/}

          
      <div className='w-[394.67px] h-[209px] flex flex-col items-center gap-4'>
              <Image src={"/images/emp2.svg"} alt="emp2" height={80} width={80}></Image>
            
            
            <div className='w-[394.67px] h-[57px]'>
            <div className='w-[394.67px] h-[30px]'>
            <h2 className='font-[Roboto] font-semibold text-xl leading-[30px] text-center'>Joseph Munyambu</h2>
            </div>

            <div className='w-[394.67px] h-[27px]'>
            <h2 className='font-[Roboto] text-lg leading-[27px] text-center'>Nursing Assistant</h2>
            </div>
            
            </div> 
        

          <div className='w-[100px] h-[24px] grid grid-flow-col gap-[14px]'>
          
          
          <FaTwitter />
          <FaLinkedin />
          <IoBasketballOutline />
          </div>
      </div>



{/*3rd*/}

          
<div className='w-[394.67px] h-[209px] flex flex-col items-center gap-4'>
              <Image src={"/images/emp3.svg"} alt="emp3" height={80} width={80}></Image>
            
            
            <div className='w-[394.67px] h-[57px]'>
            <div className='w-[394.67px] h-[30px]'>
            <h2 className='font-[Roboto] font-semibold text-xl leading-[30px] text-center'>Joseph Ngumbau</h2>
            </div>

            <div className='w-[394.67px] h-[27px]'>
            <h2 className='font-[Roboto] text-lg leading-[27px] text-center'>Medical Assistant</h2>
            </div>
            
            </div> 
        

          <div className='w-[100px] h-[24px] grid grid-flow-col justify-center gap-[14px]'>
          
          
          <FaTwitter />
          <FaLinkedin />
          <IoBasketballOutline />
          </div>
          </div>

          </div> {/*1st row*/}


 {/*2nd row Div */}  
          
 <div className='w-[1280px] h-[209px] flex  items-center gap-12'>
            
            
            <div className='w-[394.67px] h-[209px] gap-4 flex flex-col items-center'>
              <Image src={"/images/emp4.svg"} alt="emp4" height={80} width={80}></Image>
            
            
            <div className='w-[394.67px] h-[57px]'>
            <div className='w-[394.67px] h-[30px]'>
            <h2 className='font-[Roboto] font-semibold text-xl leading-[30px] text-center'>Erick Kipkemboi</h2>
            </div>

            <div className='w-[394.67px] h-[27px]'>
            <h2 className='font-[Roboto] text-lg leading-[27px] text-center'>Web Designer</h2>
            </div>
            
            </div> 
        

          <div className='w-[100px] h-[24px] grid grid-flow-col justify-center items-center gap-[14px]'>
          
          
          <FaTwitter />
          <FaLinkedin />
          <IoBasketballOutline />
          </div>
          </div>




{/*2nd*/}

          
      <div className='w-[394.67px] h-[209px] flex flex-col items-center gap-4'>
              <Image src={"/images/emp5.svg"} alt="emp5" height={80} width={80}></Image>
            
            
            <div className='w-[394.67px] h-[57px]'>
            <div className='w-[394.67px] h-[30px]'>
            <h2 className='font-[Roboto] font-semibold text-xl leading-[30px] text-center'>Stephen Kerubo</h2>
            </div>

            <div className='w-[394.67px] h-[27px]'>
            <h2 className='font-[Roboto] text-lg leading-[27px] text-center'>President of Sales</h2>
            </div>
            
            </div> 
        

          <div className='w-[100px] h-[24px] grid grid-flow-col gap-[14px]'>
          
          
          <FaTwitter />
          <FaLinkedin />
          <IoBasketballOutline />
          </div>
      </div>



{/*3rd*/}

          
<div className='w-[394.67px] h-[209px] flex flex-col items-center gap-4'>
              <Image src={"/images/emp6.svg"} alt="emp6" height={80} width={80}></Image>
            
            
            <div className='w-[394.67px] h-[57px]'>
            <div className='w-[394.67px] h-[30px]'>
            <h2 className='font-[Roboto] font-semibold text-xl leading-[30px] text-center'>John Leboo</h2>
            </div>

            <div className='w-[394.67px] h-[27px]'>
            <h2 className='font-[Roboto] text-lg leading-[27px] text-center'>Dog Trainer</h2>
            </div>
            
            </div> 
        

          <div className='w-[100px] h-[24px] grid grid-flow-col justify-center gap-[14px]'>
          
          
          <FaTwitter />
          <FaLinkedin />
          <IoBasketballOutline />
          </div>
          </div>

          </div> {/*2nd row*/}




    </div>


{/*Testimonial*/}
<div className='w-[1280px] h-[830.89px] top-[5886px] py-28 px-16 gap-[80px] flex flex-col '>
  <div className="w-[560px] h-[109px] gap-6 flex flex-col sm:w-[361px]">
    <div className="w-[560px] h-[58px]">
      <h2 className='font-[Roboto] font-bold text-5xl leading-[57.6px]'>Customer testimonials</h2>
    </div>
    <div className="w-[560px] h-[27px]">
      <p className='font-[Roboto] text-lg leading-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>

{/*carousol*/}

{/*<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
 
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  //removeArrowOnDeviceType={["tablet", "mobile"]}
  //deviceType={'tablet'}
  dotListClass="custom-dot-list-style"

  itemClass="carousel-item-padding-40-px"
>
 */} 
<div className=' w-[1152px] h-[417.89px] gap-12 flex flex-col'>

  <div className="w-[1152px] h-[321.89px] gap-8 flex">

 
  <div className="w-[362.67px] h-[321.89px] border-solid border-[1px] p-8 gap-6">
    <div className="w-[116px] h-[18.89px] gap-1 flex">

      <StarRating />

    </div>


<div className="w-[352px] h-[188px] gap-6 ">
 <div className="w-[298.67px] h-[135px]">
  <p className='font-[Roboto] text-lg leading-[27px]'>"Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.<br /> Suspendisse varius enim in eros <br /> elementum tristique. Duis cursus, mi <br /> quis viverra ornare."</p>
 </div>
</div>

<div className="w-[215px] h-[56px] flex">
<div className="w-[56px] h-[56px] flex gap-5">
<Image src={"/images/emp3.svg"} alt="emp3" height={56} width={56} className='rounded-full'></Image>

<div className="w-[298.67px] h-[135px] font-semibold text-base leading-6 font-[Roboto]">James Nduku
<div className="w-[139px] h-[24px] text-base leading-6 font-[Roboto]">Software Developer
  </div></div>
</div>
</div>  

  
</div> 



{/*2*/}

<div className="w-[362.67px] h-[321.89px] border-solid border-[1px] p-8 gap-6">
    <div className="w-[116px] h-[18.89px] gap-1 flex">

      <StarRating />

    </div>


<div className="w-[352px] h-[188px] gap-6 ">
 <div className="w-[298.67px] h-[135px]">
  <p className='font-[Roboto] text-lg leading-[27px]'>"Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.<br /> Suspendisse varius enim in eros <br /> elementum tristique. Duis cursus, mi <br /> quis viverra ornare."</p>
 </div>
</div>

<div className="w-[215px] h-[56px] flex">
<div className="w-[56px] h-[56px] flex gap-5">
<Image src={"/images/emp1.svg"} alt="emp1" height={56} width={56} className='rounded-full'></Image>

<div className="w-[298.67px] h-[135px] font-semibold text-base leading-6 font-[Roboto]">Erick Kipkemboi
<div className="w-[139px] h-[24px] text-base leading-6 font-[Roboto]">Scrum Master
  </div></div>
</div>
</div>  

 
 

</div>{/*2*/}




{/*3*/}


<div className="w-[362.67px] h-[321.89px] border-solid border-[1px] p-8 gap-6">
    <div className="w-[116px] h-[18.89px] gap-1 flex">

      <StarRating />

    </div>


<div className="w-[352px] h-[188px] gap-6 ">
 <div className="w-[298.67px] h-[135px]">
  <p className='font-[Roboto] text-lg leading-[27px]'>"Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.<br /> Suspendisse varius enim in eros <br /> elementum tristique. Duis cursus, mi <br /> quis viverra ornare."</p>
 </div>
</div>

<div className="w-[215px] h-[56px] flex">
<div className="w-[56px] h-[56px] flex gap-5">
<Image src={"/images/emp6.svg"} alt="emp6" height={56} width={56} className='rounded-full'></Image>

<div className="w-[298.67px] h-[135px] font-semibold text-base leading-6 font-[Roboto]">Stephen Kerubo
<div className="w-[139px] h-[24px] text-base leading-6 font-[Roboto]">UI/UX Designer
  </div></div>
</div>
</div>  

 
 

</div>{/*3*/}



</div>
</div>

{/*</Carousel>*/}



  <div className='w-[1152px] h-[48px] flex justify-between'>
  <div className='w-[72px] h-[8px] flex gap-2'>
    <FaDotCircle />
  </div>
  </div>
  <div className='w-[111px] h-[48px] flex gap-[15px]'>

  </div>

    </div>
  )
}

export default Team
