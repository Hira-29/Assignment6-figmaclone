import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Divide } from 'lucide-react'

const Courses = () => {
  return (
  
     <div className='w-[1280px] h-[1742px] top-[3326px] mt-80 left-[100px] py-28 px-16 flex flex-col items-center gap-[60px]'>
        
        
        <div className='w-[768px] h-[118px] flex flex-col items-center gap-4 '>
         <div className='w-[768px] h-[67px]'>
            <h1 className='font-[Roboto] font-bold text-[56px] leading-[67.2px] text-center'>Courses</h1>
         </div>
         <div className='w-[768px] h-[27px]'>
            <h2 className='font-[Roboto] text-lg leading-[27px] text-center '>Your Ultimate Guide to learning</h2>
         </div>
        </div>
      


    <div className='w-[1152px] h-[1340px] gap-16 flex flex-col  items-center justify-center'>

        <div className='w-[336px] h-[40px] flex'>
        
        <div className='w-[87px] h-[40px] border-b border-[#676767] py-2 px-4 flex gap-2'>
        <div className='w-[55px] h-[24px]'>
          <h2 className='text-base leading-6'>Popular</h2>  
        </div>
        </div>

        <div className='w-[140px] h-[40px] py-2 px-4 flex gap-2'>
        <div className='w-[108px] h-[24px]'>
          <h2 className='text-base leading-6'>Recommended</h2>  
        </div>
        </div>
        
        <div className='w-[109px] h-[40px] py-2 px-4 flex gap-2'>
        <div className='w-[77px] h-[24px]'>
          <h2 className='text-base leading-6'>Best  Price</h2>  
        </div>
        </div>

        </div>
    </div>    

{/* Images first row Div*/}

<div className='w-[1312px] h-[534px] flex gap-8'>

{/*First Box*/}

<div className='w-[416px] h-[534px] rounded-[5px] flex flex-col gap-6'>
<Image src={"/images/UXImage.svg"} alt="UX" height={300} width={416}></Image>


<div className='w-[416px] h-[210px] pb-6 px-4 flex gap-6'>
    <div className='w-[382px] h-[122px] flex flex-col gap-2'>
        
        <div className='w-[382px] h-[24px] flex'>
            <div className='w-[326px] h-[21px]'>
                <h5 className='font-semibold text-sm leading-[21px]'>Design</h5>
            </div>
            <div className='w-[48px] h-[24px] flex gap-1'>
                <div className='w-6 h-6 rounded-[1px]'>
                <Image src={"/images/star.svg"} alt="star" height={24} width={24}></Image>
                </div>
                <div className='w-[20px] h-[24px]'> 
                    <h5 className='font-semibold text-sm leading-[21px] text-right'>5.0</h5>
                </div>
            </div>
        </div>

            <div className='w-[382px] h-[34px] flex'> 
                    <h5 className='font-bold text-2xl leading-[33.6px]'>UX/UI Design 201</h5>
            </div>
            <div className='w-[382px] h-[48px] flex'> 
                    <p className='text-base leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
       
        <div className='w-[382px] h-10 flex gap-4'>
        <div className='w-[117px] h-[40px] flex justify-center'>
        <Button className='font-[Roboto] border-black text-base leading-6' variant="outline">Enroll Now</Button>
        </div>

        <div className='w-[77px] h-[40px] flex justify-center'>
        <Button className='font-[Roboto] text-base font-medium leading-6' variant="outline">$400</Button>
        </div>
        </div>
         </div>


</div>

</div>



{/*End of First Image Box */}


{/*Second Image Box*/}

<div className='w-[416px] h-[534px] rounded-[5px] flex flex-col gap-6'>
<Image src={"/images/python.svg"} alt="python" height={300} width={416}></Image>


<div className='w-[416px] h-[210px] pb-6 px-4 flex gap-6'>
    <div className='w-[382px] h-[122px] flex flex-col gap-2'>
        
        <div className='w-[382px] h-[24px] flex'>
            <div className='w-[326px] h-[21px]'>
                <h5 className='font-semibold text-sm leading-[21px]'>Programming</h5>
            </div>
            <div className='w-[48px] h-[24px] flex gap-1'>
                <div className='w-6 h-6 rounded-[1px]'>
                <Image src={"/images/star.svg"} alt="star" height={24} width={24}></Image>
                </div>
                <div className='w-[20px] h-[24px]'> 
                    <h5 className='font-semibold text-sm leading-[21px] text-right'>5.0</h5>
                </div>
            </div>
        </div>

            <div className='w-[382px] h-[34px] flex'> 
                    <h5 className='font-bold text-2xl leading-[33.6px]'>Introduction to Python</h5>
            </div>
            <div className='w-[382px] h-[48px] flex'> 
                    <p className='text-base leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
       
        <div className='w-[382px] h-10 flex gap-4'>
        <div className='w-[117px] h-[40px] flex justify-center'>
        <Button className='font-[Roboto] border-black text-base leading-6' variant="outline">Enroll Now</Button>
        </div>

        <div className='w-[77px] h-[40px] flex justify-center'>
        <Button className='font-[Roboto] text-base font-medium leading-6' variant="outline">$400</Button>
        </div>
        </div>
         </div>


</div>

</div>

{/*End Of Second Image Div*/}

{/*Third Box*/}

<div className='w-[416px] h-[534px] rounded-[5px] flex flex-col gap-6'>
<Image src={"/images/DA.svg"} alt="UX" height={300} width={416}></Image>


<div className='w-[416px] h-[210px] pb-6 px-4 flex gap-6'>
    <div className='w-[382px] h-[122px] flex flex-col gap-2'>
        
        <div className='w-[382px] h-[24px] flex'>
            <div className='w-[326px] h-[21px]'>
                <h5 className='font-semibold text-sm leading-[21px]'>Business</h5>
            </div>
            <div className='w-[48px] h-[24px] flex gap-1'>
                <div className='w-6 h-6 rounded-[1px]'>
                <Image src={"/images/star.svg"} alt="star" height={24} width={24}></Image>
                </div>
                <div className='w-[20px] h-[24px]'> 
                    <h5 className='font-semibold text-sm leading-[21px] text-right'>5.0</h5>
                </div>
            </div>
        </div>

            <div className='w-[382px] h-[34px] flex'> 
                    <h5 className='font-bold text-2xl leading-[33.6px]'>Data Analysis for Beginners</h5>
            </div>
            <div className='w-[382px] h-[48px] flex'> 
                    <p className='text-base leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
       
        <div className='w-[382px] h-10 flex gap-4'>
        <div className='w-[117px] h-[40px] flex justify-center'>
        <Button className='font-[Roboto] border-black text-base leading-6' variant="outline">Enroll Now</Button>
        </div>

        <div className='w-[77px] h-[40px] flex justify-center'>
        <Button className='font-[Roboto] text-base font-medium leading-6' variant="outline">$400</Button>
        </div>
        </div>
         </div>


</div>

</div>



{/*End of Third Box Div*/}

</div>



{/* */}


{/* Images second row images Div*/}

<div className='w-[1312px] h-[534px] flex gap-8'>

{/*First Box*/}

<div className='w-[416px] h-[534px] rounded-[5px] flex flex-col gap-6'>
<Image src={"/images/Art.svg"} alt="art" height={300} width={416}></Image>


<div className='w-[416px] h-[210px] pb-6 px-4 flex gap-6'>
    <div className='w-[382px] h-[122px] flex flex-col gap-2'>
        
        <div className='w-[382px] h-[24px] flex'>
            <div className='w-[326px] h-[21px]'>
                <h5 className='font-semibold text-sm leading-[21px]'>Art</h5>
            </div>
            <div className='w-[48px] h-[24px] flex gap-1'>
                <div className='w-6 h-6 rounded-[1px]'>
                <Image src={"/images/star.svg"} alt="star" height={24} width={24}></Image>
                </div>
                <div className='w-[20px] h-[24px]'> 
                    <h5 className='font-semibold text-sm leading-[21px] text-right'>5.0</h5>
                </div>
            </div>
        </div>

            <div className='w-[382px] h-[34px] flex'> 
                    <h5 className='font-bold text-2xl leading-[33.6px]'>Data Analysis for Beginners</h5>
            </div>
            <div className='w-[382px] h-[48px] flex'> 
                    <p className='text-base leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
       
        <div className='w-[382px] h-10 flex gap-4'>
        <div className='w-[117px] h-[40px] flex justify-center'>
        <Button className='font-[Roboto] border-black text-base leading-6' variant="outline">Enroll Now</Button>
        </div>

        <div className='w-[77px] h-[40px] flex justify-center'>
        <Button className='font-[Roboto] text-base font-medium leading-6' variant="outline">$400</Button>
        </div>
        </div>
         </div>


</div>

</div>



{/*End of First Image Box */}


{/*Second Image Box*/}

<div className='w-[416px] h-[534px] rounded-[5px] flex flex-col gap-6'>
<Image src={"/images/Law.svg"} alt="law" height={300} width={416}></Image>


<div className='w-[416px] h-[210px] pb-6 px-4 flex gap-6'>
    <div className='w-[382px] h-[122px] flex flex-col gap-2'>
        
        <div className='w-[382px] h-[24px] flex'>
            <div className='w-[326px] h-[21px]'>
                <h5 className='font-semibold text-sm leading-[21px]'>Law</h5>
            </div>
            <div className='w-[48px] h-[24px] flex gap-1'>
                <div className='w-6 h-6 rounded-[1px]'>
                <Image src={"/images/star.svg"} alt="star" height={24} width={24}></Image>
                </div>
                <div className='w-[20px] h-[24px]'> 
                    <h5 className='font-semibold text-sm leading-[21px] text-right'>5.0</h5>
                </div>
            </div>
        </div>

            <div className='w-[382px] h-[34px] flex'> 
                    <h5 className='font-bold text-2xl leading-[33.6px]'>Rule of Law</h5>
            </div>
            <div className='w-[382px] h-[48px] flex'> 
                    <p className='text-base leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
       
        <div className='w-[382px] h-10 flex gap-4'>
        <div className='w-[117px] h-[40px] flex justify-center'>
        <Button className='font-[Roboto] border-black text-base leading-6' variant="outline">Enroll Now</Button>
        </div>

        <div className='w-[77px] h-[40px] flex justify-center'>
        <Button className='font-[Roboto] text-base font-medium leading-6' variant="outline">$400</Button>
        </div>
        </div>
         </div>


</div>

</div>

{/*End Of Second Image Div*/}

{/*Third Box*/}

<div className='w-[416px] h-[534px] rounded-[5px] flex flex-col gap-6 sm:w-[428px] sm:h-[2135px] sm:py-12 sm:px-6 sm:gap-12'>
<Image src={"/images/webflow.svg"} alt="webflow" height={300} width={416}></Image>


<div className='w-[416px] h-[210px] pb-6 px-4 flex gap-6'>
    <div className='w-[382px] h-[122px] flex flex-col gap-2'>
        
        <div className='w-[382px] h-[24px] flex'>
            <div className='w-[326px] h-[21px]'>
                <h5 className='font-semibold text-sm leading-[21px]'>Tech</h5>
            </div>
            <div className='w-[48px] h-[24px] flex gap-1'>
                <div className='w-6 h-6 rounded-[1px]'>
                <Image src={"/images/star.svg"} alt="star" height={24} width={24}></Image>
                </div>
                <div className='w-[20px] h-[24px]'> 
                    <h5 className='font-semibold text-sm leading-[21px] text-right'>5.0</h5>
                </div>
            </div>
        </div>

            <div className='w-[382px] h-[34px] flex'> 
                    <h5 className='font-bold text-2xl leading-[33.6px]'>Introduction to Webflow</h5>
            </div>
            <div className='w-[382px] h-[48px] flex'> 
                    <p className='text-base leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
       
        <div className='w-[382px] h-10 flex gap-4'>
        <div className='w-[117px] h-[40px] flex justify-center'>
        <Button className='font-[Roboto] border-black text-base leading-6' variant="outline">Enroll Now</Button>
        </div>

        <div className='w-[77px] h-[40px] flex justify-center'>
        <Button className='font-[Roboto] text-base font-medium leading-6' variant="outline">$400</Button>
        </div>
        </div>
         </div>


</div>

</div>



{/*End of Third Box Div*/}





</div>

<div className='w-[152px] h-[40px] flex flex-col align-center rounded-[5px] border-[1px]'>
<Button className='border-black' variant="outline">View All Courses</Button>
</div>


    </div>


  
  )
}

export default Courses
