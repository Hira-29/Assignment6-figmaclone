import Image from "next/image";

import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import Logo from "@/components/Logo/Logo";
import Category from "@/components/Category/Category";
import Courses from "@/components/Courses/Courses";
import Team from "@/components/Team/Team";


export default function Home() {
  return (
   <div>
    
    <NavBar/>
    <Hero/>
    <Logo/>
    <Category/>
    <Courses/>
    <Team/>
    
    </div>
  );
}
