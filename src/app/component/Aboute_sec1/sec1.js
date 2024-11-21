'use client';
import Link from 'next/link';
import '../../about/aboute.css'
import arry from '../../blog.json'
import { useRef,useEffect ,useCallback, useState } from 'react';
import Nav3 from '../nav3/nav3';
import { gsap } from "gsap";
// gsap.registerPlugin(ScrollTrigger);

export default  function AboutSec1 ()  {
   const Dive = useRef(null);
    const Dive2 = useRef(null);
    const Dive3 = useRef(null);
    const Dive4 = useRef(null);




    const Dive11 = useRef(null);
    const Dive22 = useRef(null);
    const Dive33 = useRef(null);
    const Dive44 = useRef(null);







useEffect(()=>{
   const tll = gsap.timeline({
    
   
  });
tll.to(Dive2.current,{
    top : "-4vw",
  duration : "2"
  },0).to(Dive3.current,{
    opacity: "1",
    duration : "3"
},0).to(Dive4.current,{
    opacity: ".5",
    duration : "3"
},.1)








const tll1 = gsap.timeline({
 
});
tll1.to(Dive22.current,{
  top : "-4vw"
  ,
  duration : "2"

},0).to(Dive33.current,{
  opacity: "1",
  duration : "3"

},0).to(Dive44.current,{
  opacity: ".5",
  duration : "3"

},.1)








},[])

    return<>
   

   <div ref={Dive}  className=" lg:block xsm:hidden ">

<div className='absolute left-0 right-0 z-10'>
  <Nav3/>
</div>
   
   <div  className="aboute relative  overflow-hidden mx-auto w-[100vw]  h-[120vh] overflow-x-hidden  border-black ">
     
     <div ref={Dive2} className="absolute w-[38vw] top-[5vw] left-[26%]   border-black" >
 
 <img src="/moon.png" className=" " />
 </div> 
 <div  className="  w-[100vw] absolute  border-black  left-20 ">
     <img src="/stars.png" className="Stars" />
   
     </div>   
 <div  className="  w-[50vw] absolute  border-black  ">
     <img src="/ClOUde.png" className="Cloude" />
   
     </div> 
      
       <div className="absolute bottom-0  border-black">
 
 <img src="/aboute_bg_without.png" />
 </div>

 <div className="absolute  bottom-0  border-black ">
 
 <img src="/building.png" ref={Dive3}  className="opacity-10" />
 </div>
 <div className="absolute  bottom-0  border-black ">
 
 <img src="/about_chart.png"  className="" />
 </div>
 <div className="absolute   bottom-0   border-black">
 
 <img ref={Dive4} src="/rays.png"  className="opacity-10" />
 </div>




 <div className='bottom-[8vw]  p-8 border-white w-[40vw]  text-white absolute'>
<h1 className='text-[5vw] font-[900] tracking-[-0.4vw] leading-[5vw] text-[#fffbef]'>THE BLOG</h1>
<h1 className='text-[1.2vw]  tracking-[-0.1vw] text-[#918b9c] leading-[1.2vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do amet, consectetur amet, consectetur adipiscing elit, sed do  </h1>

 </div>
 
         </div>
         <div className=' my-6 w-[90vw] mx-auto flex md:flex-row xsm:py-2  flex-col md:p-4'>
        <div className=' tracking-tighter md:w-[50%] text-[#453a5a] md:text-[3vw] md:leading-[3vw] xsm:py-2 md:py-0 text-[6vw] leading-[6vw] font-[900]'>
        <h1>RECENT BLOGS</h1>

        </div>
        <div className=' flex md:justify-end text-[#453a5a]  md:w-[50%] xsm:py-2 md:py-0  '>
            <button className='border  border-[#453a5a] md:px-[8vw] px-[10vw] md:py-1'>
                Sorded by
            </button>
        </div>
    
    </div>
         <div  className=" mx-auto w-[90vw]  border-black ">

         <div className="w-[100%]  flex flex-wrap md:flex-row flex-col">
{
    arry.map((data)=>(
        
    
    <div key={data.id} className="md:p-2  w-[80%] mx-auto md:w-[25%] text-center">
    <Link href={`/about/${data.id}`}>
    <img src={data.src} className="hover:shadow-custom-purple"/>
    </Link>
    <h1 className="mt-2 text-[20px]">
Lorem ipsum dolor sit amet 
</h1>
</div>
 ))
}
<div className='w-[100%] my-3'>
    <button className= 'w-[100%] py-1 text-[12px]  bg-[#a083d7] text-white '>LOAD MORE</button>
</div>















</div>





<footer className="text-gray-600 body-font  bg-white">
  <div className=" lg:w-[80vw]   mx-auto flex  py-[3vw] border-none-none border-none-none-black  md:flex-row-reverse md:flex-nowrap flex-wrap flex-col-reverse ">
    <div className="w-[100vw] md:w-1/4 xsm:p-4 md:p-0    md:mx-0 md:pt-4 mx-auto  md:text-left md:mt-0 ">
      <a className="flex title-font font-medium items-center xsm:justify-start  md:justify-start justify-center text-gray-900">
       <img src="/logo black.png" width={120}/>
      </a>
      <p className="mt-2 lg:text-[1vw] lg:leading-[1vw]  text-gray-500">
      Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </p>
    </div>
    <div className="flex-grow flex flex-wrap   md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full  flex flex-col items-center   border-none-black">
        
        <nav className="list-none p-4   xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center" >
        <h2 className="text-[14px] text-black text-start lg:py-2 font-[600] leading-[18px]">
          Social
        </h2>



          <li  className="py-1">
            <a className=" text-black font-[600] text-[10px]  leading-[14px] tracking-widest">YOUTUBE</a>
          </li>
          <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">TWICH</a>
          </li>
          <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">INSTAGRAM</a>
          </li>
          <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">X-TIWTTER</a>
          </li>
          <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">DISCORD</a>
          </li > 
           <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">SPOTIFY</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4  md:w-1/2 w-full flex flex-col items-center  border-none-none border-none-none-black ">

<nav className="list-none p-4   border-none-black xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center " >
        <h2 className="text-[14px] text-black text-start lg:py-2 font-[600] leading-[18px]">
        QuicksLinks
        </h2>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">HOME</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">ABOUT</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">BLOG</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">CONTACT</a>
          </li>
          
        
        </nav>
      </div>
      <div className="lg:w-1/4  md:w-1/2 w-full flex flex-col items-center  border-none-none border-none-none-black ">
      <nav className="list-none p-4   border-none-black xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center ">

        <h2 className="text-[14px] text-black text-start lg:py-2 font-[600] leading-[18px]">
          Shop
        </h2>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">ALL PRODUCT</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">VINYL</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">CD & TAPES</a>
          </li>
          
        
        </nav>
      </div>
      <div className="lg:w-1/4  md:w-1/2 w-full flex flex-col items-center  sm:justify-center lg:justify-start border-none-none border-none-none-black ">
        
        <nav className="list-none p-4   border-none-black xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center ">
        <h2 className="text-[14px] text-black text-start lg:py-2 font-[600] leading-[18px]">
          Listen
        </h2>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">LIVE STRAM</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">PLAYLIST</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">REALESE</a>
          </li>
        
        </nav>
      </div>
    </div>
  </div>
  <div className=" border  w-fit border-[#242426] ">
    <div className="  w-[90vw] py-1 mx-auto  px-5 flex flex-wrap flex-col sm:flex-row">

    <div className="  w-[84vw] py-3 mx-auto  px-5 flex flex-wrap flex-col sm:flex-row">
      <p className=" text-black font-[600] text-[10px] xsm:text-center  ">
        © 2024 CATERPILLER ALL RIGHTS SERVED
     
      </p>
      <span className="inline-flex  text-black sm:ml-auto sm:mt-0 font-[900] mt-2 text-[10px] justify-center sm:justify-start">
      CREATED WITH   <img src="/heart.png" className="mx-1" width={20} height={20}/>BY<img src="/dc.png" className="mx-1" width={20} height={20}/>
      </span>
      <span className="inline-flex   text-black sm:ml-auto sm:mt-0 font-[500] mt-2 text-[8px] justify-center sm:justify-start">
    <span className="text-[10px] mx-1">Terms & condition</span>
    <span className="text-[10px] mx-1">Privacy policy</span>
      </span>
    </div>
  </div>
  </div>
</footer>




         </div>

        
</div>
    


<div ref={Dive11} className=' xsm:block overflow-x-hidden bg-white text-black lg:hidden'>
<div className='absolute left-0 right-0 z-10'>
  <Nav3/>
</div>
<div    className='relative  xsm:h-fit md:h-fit border border-transparent'>
 
<div className="absolute    border-transparent" >
 
 <img src="/aboutbg.png" className="  border border-transparent" />
 </div> 


 <div ref={Dive22} className="absolute w-[38vw] top-[30vw] left-[26%]    border-transparent" >
 
 <img src="/moon.png" className=" border border-transparent" />
 </div>

 <div className="absolute top-[20vw]  border-transparent" >
 
 <img src="/aboute_bg_without.png" className=" border border-transparent scale-[1.2]" />
 </div> 


 <div className="absolute  top-[20vw]  border-transparent ">
 
 <img src="/building.png" ref={Dive33}  className="opacity-10 scale-[1.2]" />
 </div>

 <div className="absolute  top-0  border-transparent ">
 
 <img src="/about_chart.png"  className=" scale-[1.2]" />
 </div>
 <div className="absolute   bottom-0   border-transparent">
 
 <img ref={Dive44} src="/rays.png"  className="opacity-10 scale-[1.2]" />
 </div>








<div className='xsm:top-[50vw]  p-8 border-white w-[50vw]  text-white absolute'>
<h1 className='text-[5vw] font-[900] tracking-[-0.4vw] leading-[5vw] text-[#fffbef]'>THE BLOG</h1>
<h1 className='text-[1.2vw]  tracking-[-0.1vw] text-[#918b9c] leading-[1.2vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do amet, consectetur amet, consectetur adipiscing elit, sed do  </h1>

 </div>



 
<div className='w-[100vw]  flex flex-wrap md:flex-row flex-col xsm:mt-[40vh]  2xsm:mt-[40vh]'>

        
    
    <div  className="md:p-2  w-[80%] mx-auto md:w-[25%] text-center">

    <img src="/img1.png" className="hover:shadow-custom-purple"/>

    <h1 className="mt-2 text-[20px]">
Lorem ipsum dolor sit amet 
</h1>

</div>



 </div>
 
<div className='w-[100vw]  flex flex-wrap md:flex-row flex-col '>

        
    
<div  className="md:p-2  w-[80%] mx-auto md:w-[25%] text-center">

<img src="/img2.png" className="hover:shadow-custom-purple"/>

<h1 className="mt-2 text-[20px]">
Lorem ipsum dolor sit amet 
</h1>

</div>



</div>

<div className='w-[100vw]  flex flex-wrap md:flex-row flex-col '>

        
    
    <div  className="md:p-2  w-[80%] mx-auto md:w-[25%] text-center">

    <img src="/img3.png" className="hover:shadow-custom-purple"/>

    <h1 className="mt-2 text-[20px]">
Lorem ipsum dolor sit amet 
</h1>

</div>



 </div>
</div>
<footer className="text-gray-600 body-font  bg-white">
  <div className=" lg:w-[80vw]   mx-auto flex  py-[3vw] border-none-none border-none-none-black  md:flex-row-reverse md:flex-nowrap flex-wrap flex-col-reverse ">
    <div className="w-[100vw] md:w-1/4 xsm:p-4 md:p-0    md:mx-0 md:pt-4 mx-auto  md:text-left md:mt-0 ">
      <a className="flex title-font font-medium items-center xsm:justify-start  md:justify-start justify-center text-gray-900">
       <img src="/logo black.png" width={120}/>
      </a>
      <p className="mt-2 lg:text-[1vw] lg:leading-[1vw]  text-gray-500">
      Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </p>
    </div>
    <div className="flex-grow flex flex-wrap   md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full  flex flex-col items-center   border-none-black">
        
        <nav className="list-none p-4   xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center" >
        <h2 className="text-[14px] text-black text-start lg:py-2 font-[600] leading-[18px]">
          Social
        </h2>



          <li  className="py-1">
            <a className=" text-black font-[600] text-[10px]  leading-[14px] tracking-widest">YOUTUBE</a>
          </li>
          <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">TWICH</a>
          </li>
          <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">INSTAGRAM</a>
          </li>
          <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">X-TIWTTER</a>
          </li>
          <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">DISCORD</a>
          </li > 
           <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">SPOTIFY</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4  md:w-1/2 w-full flex flex-col items-center  border-none-none border-none-none-black ">

<nav className="list-none p-4   border-none-black xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center " >
        <h2 className="text-[14px] text-black text-start lg:py-2 font-[600] leading-[18px]">
        QuicksLinks
        </h2>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">HOME</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">ABOUT</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">BLOG</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">CONTACT</a>
          </li>
          
        
        </nav>
      </div>
      <div className="lg:w-1/4  md:w-1/2 w-full flex flex-col items-center  border-none-none border-none-none-black ">
      <nav className="list-none p-4   border-none-black xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center ">

        <h2 className="text-[14px] text-black text-start lg:py-2 font-[600] leading-[18px]">
          Shop
        </h2>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">ALL PRODUCT</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">VINYL</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">CD & TAPES</a>
          </li>
          
        
        </nav>
      </div>
      <div className="lg:w-1/4  md:w-1/2 w-full flex flex-col items-center  sm:justify-center lg:justify-start border-none-none border-none-none-black ">
        
        <nav className="list-none p-4   border-none-black xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center ">
        <h2 className="text-[14px] text-black text-start lg:py-2 font-[600] leading-[18px]">
          Listen
        </h2>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">LIVE STRAM</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">PLAYLIST</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">REALESE</a>
          </li>
        
        </nav>
      </div>
    </div>
  </div>
  <div className=" border  w-fit border-[#242426] ">
    <div className="  w-[90vw] py-1 mx-auto  px-5 flex flex-wrap flex-col sm:flex-row">

    <div className="  w-[84vw] py-3 mx-auto  px-5 flex flex-wrap flex-col sm:flex-row">
      <p className=" text-black font-[600] text-[10px] xsm:text-center  ">
        © 2024 CATERPILLER ALL RIGHTS SERVED
     
      </p>
      <span className="inline-flex  text-black sm:ml-auto sm:mt-0 font-[900] mt-2 text-[10px] justify-center sm:justify-start">
      CREATED WITH   <img src="/heart.png" className="mx-1" width={20} height={20}/>BY<img src="/dc.png" className="mx-1" width={20} height={20}/>
      </span>
      <span className="inline-flex   text-black sm:ml-auto sm:mt-0 font-[500] mt-2 text-[8px] justify-center sm:justify-start">
    <span className="text-[10px] mx-1">Terms & condition</span>
    <span className="text-[10px] mx-1">Privacy policy</span>
      </span>
    </div>
  </div>
  </div>
</footer>
</div>
</>
}
