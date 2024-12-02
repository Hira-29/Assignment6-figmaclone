import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-[1280px] h-[684px] top-[6824px] p-20 gap-20 flex flex-col items-center'>
        <div className='w-[1120px] h-[524px] gap-20 flex'>
            
            <div className='w-[1120px] h-[82px] flex justify-between '>
                <div className='w-[500px] h-[51px]'>
                    <div className='w-[500px] h-[27px] font-[Roboto] font-semibold text-lg leading-[27px]'>Subscribe to our newsletter</div>
                    <div className='w-[500px] h-[24px]'>
                        <p className=' font-[Roboto] text-base leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='w-[400px] h-[82px] gap-4 flex flex-col '>
               
                <div className='w-[400px] h-[48px] gap-4 flex'>
                <Input type="email" placeholder="Email" />
                <Button type="submit">Subscribe</Button>
                </div> 
                

                <div className='w-[400px] h-[18px]'>
                    <h5 className=' font-[Roboto] text-xs leading-[18px]'>By subscribing you agree to with our Privacy Policy</h5>
                </div>
                </div>
                </div> 
        </div>





        <div className='w-[1120px] h-[225px] grid columns-4  gap-10 grid-flow-col'>

            <div className='w-[250px] h-[40px]'>
                <div className='w-[130.6px] h-[30.38px] gap-[8.02px]'>
            <Image src={"/images/Ddsgnr Logo.svg"} alt="logo" height={90} width={30}></Image>
                </div>
            </div>

            <div className='w-[250px] h-[225px] gap-4 grid'>
                <div className='w-[250px] h-[24px] font-[Roboto] font-semibold text-base leading-6'>
                    <Link href="#">Courses</Link>
                </div>
                <div className='w-[250px] h-[37px] py-2 font-[Roboto] text-sm leading-[21px]'>
                <Link href="#">Business</Link>  
                </div>
                <div className='w-[250px] h-[37px] py-2 font-[Roboto] text-sm leading-[21px]'>
                <Link href="#">Development</Link>  
                </div>
                <div className='w-[250px] h-[37px] py-2 font-[Roboto] text-sm leading-[21px]'>
                <Link href="#">Technology</Link>  
                </div>
                <div className='w-[250px] h-[37px] py-2 font-[Roboto] text-sm leading-[21px]'>
                <Link href="#">Design</Link>  
                </div>
                <div className='w-[250px] h-[37px] py-2 font-[Roboto] text-sm leading-[21px]'>
                <Link href="#">Programming</Link>  
                </div>
            </div>



            <div className='w-[250px] h-[225px] gap-4 grid'>
                <div className='w-[250px] h-[24px] font-[Roboto] font-semibold text-base leading-6'>
                    <Link href="#">Resources</Link>
                </div>
                <div className='w-[250px] h-[37px] py-2 font-[Roboto] text-sm leading-[21px]'>
                <Link href="#">Career</Link>  
                </div>
                <div className='w-[250px] h-[37px] py-2 font-[Roboto] text-sm leading-[21px]'>
                <Link href="#">Resume</Link>  
                </div>
                <div className='w-[250px] h-[37px] py-2 font-[Roboto] text-sm leading-[21px]'>
                <Link href="#">Learning</Link>  
                </div>
                <div className='w-[250px] h-[37px] py-2 font-[Roboto] text-sm leading-[21px]'>
                <Link href="#">Interview Preparation</Link>  
                </div>
                <div className='w-[250px] h-[37px] py-2 font-[Roboto] text-sm leading-[21px]'>
                <Link href="#">Jobs</Link>  
                </div>
            </div>





            <div className='w-[250px] h-[225px] gap-4 grid'>
                <div className='w-[250px] h-[24px] font-[Roboto] font-semibold text-base leading-6'>
                    <Link href="#">About Us</Link>
                </div>
                <div className='w-[250px] h-[37px] py-2 font-[Roboto] text-sm leading-[21px]'>
                <Link href="#">Contact</Link>  
                </div>
                <div className='w-[250px] h-[37px] py-2 font-[Roboto] text-sm leading-[21px]'>
                <Link href="#">Help/Support</Link>  
                </div>
                <div className='w-[250px] h-[37px] py-2 font-[Roboto] text-sm leading-[21px]'>
                <Link href="#">FAQ</Link>  
                </div>
                <div className='w-[250px] h-[37px] py-2 font-[Roboto] text-sm leading-[21px]'>
                <Link href="#">Terms and Conditions</Link>  
                </div>
                <div className='w-[250px] h-[37px] py-2 font-[Roboto] text-sm leading-[21px]'>
                <Link href="#">Partners</Link>  
                </div>
            </div>



        </div>



    <div className='w-[1120px] h-[57px] gap-8 flex'>

    <div className='w-[1120px] h-[24px] flex justify-between'>
    <div className='w-[564px] h-[21px] gap-6 flex'>
        <div className='w-[195px] h-[21px] font-[Roboto] text-sm leading-[21px]'>
        2023 Ddsgnr. All right reserved.
        </div>
        <div className='w-[87px] h-[21px] font-[Roboto] text-sm leading-[21px]'>
        Privacy Policy
        </div>
        <div className='w-[105px] h-[21px] font-[Roboto] text-sm leading-[21px]'>
        Terms of Service
        </div>
        <div className='w-[105px] h-[21px] font-[Roboto] text-sm leading-[21px]'>
        Cookies Settings
        </div>
    </div>

    <div className="w-[1120px] h-[1px]">
    <p className="border-r-[1px] border-black"></p>
    </div>


     <div className='w-[132px] h-[24px] gap-3 flex'>
    <Link href="htps://facebook.com"><FaFacebookF /></Link> 
    <Link href="htps://instagram.com"><FaInstagram /></Link>
    <Link href="htps://twitter.com"><FaTwitter /></Link>
    <Link href="htps://linkedin.com"><FaLinkedin /></Link>
     </div>


    </div> 
    </div>
      

    </div>
  )
}

export default Footer
