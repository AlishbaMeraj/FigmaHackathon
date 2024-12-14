// import React from 'react'
// import Image from "next/image"

// const Dressstyle = () => {
//   return (
//     <div>
//         <div className=' w-[358px] lg:w-auto h-auto bg-[#F0F0F0] rounded-[40px] ml-5 lg:ml-[200px] mr-[200px] mt-[5px] lg:mt-[50px] p-[50px] pb-[20p5] lg:pb-[40px]'>
//             <h1 className='text-[32px] lg:text-[48px] leading-[36px] font-extrabold text-center'>BROWSE BY DRESS STYLE</h1>
//             <div className='flex-col '>
//                 <div className='flex flex-col items-center  lg:flex-row gap-[20px] lg:gap-[30px]'>
//                 <div className='flex justify-center bg-white mt-[64px] w-[310px] h-[190px] lg:w-[570px] lg:h-[289px] rounded-[40px] overflow-hidden'>
// <h1 className='text-[24px] lg:text-[36px] font-bold leading:[32.4px] lg:leading-[48.9px] p-[10px] pl-[15px]  lg:p-[25px]'>Casual</h1>

//                     <Image
//    src="/Assets/image 11.png" 
//   alt="Hero Background"
//   width={400}
//   height={300}
// className="object-cover w-[210px] lg:w-[400px] "
// />
//                     </div>
//                     <div className='flex justify-center bg-white  w-[310px] h-[190px] lg:w-[684px] lg:mt-[50px] lg:h-[289px] rounded-[40px] overflow-hidden'>
//                     <h1 className='text-[24px] lg:text-[36px] font-bold leading:[32.4px] lg:leading-[48.9px] p-[10px]  pl-[15px] lg:p-[25px]'>Formal</h1>
//   <Image
//   src="/Assets/image 13.png" 
//   alt="Hero Background"
//   width={400}
//   height={300}
//   className="object-cover w-[210px] lg:w-[500px]"
// />
//   </div>

//                 </div>

//                 <div className='flex flex-col items-center mt-5 lg:flex-row gap-[20px] lg:gap-[30px]'>
//                 <div className='flex justify-center bg-white  w-[310px] h-[190px] lg:w-[684px] lg:h-[289px] rounded-[40px] overflow-hidden'>
//                     <h1 className='text-[24px] lg:text-[36px] font-bold leading:[32.4px] lg:leading-[48.9px] p-[10px] lg:p-[25px]'>Party</h1>
//   <Image
 
//  src="/Assets/image 12.png" 
//   alt="Hero Background"
//   width={400}
//   height={300}
//   className="object-cover w-[210px] lg:w-[500px]"
// />

//   </div>
//   <div className='flex justify-center bg-white  w-[310px] h-[190px] lg:w-[570px] lg:h-[289px] rounded-[40px] overflow-hidden'>
// <h1 className='text-[24px] lg:text-[36px] font-bold leading:[32.4px] lg:leading-[48.9px] p-[10px] pl-[15px] lg:p-[25px]'>Gym</h1>

//                     <Image
// src="/Assets/image 14.png" 
//   alt="Hero Background"
//   width={400}
//   height={300}
// className="object-cover w-[270px] lg:w-[400px] "
// />


//                     </div>

//                 </div>     
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Dressstyle
  

import React from 'react';
import Image from 'next/image';

const Dressstyle = () => {
  return (
    <div className="p-5 lg:p-10 bg-[#F0F0F0] rounded-[40px] mx-5 lg:mx-[200px] mt-5 lg:mt-[50px]">
      <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-extrabold text-center mb-8">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {/* Casual */}
        <div className="flex items-center bg-white rounded-[40px] overflow-hidden shadow-md h-[150px] sm:h-[200px] lg:h-[250px]">
          <div className="flex flex-col justify-center pl-4 sm:pl-6 lg:pl-8 flex-1">
            <h1 className="text-[18px] sm:text-[24px] lg:text-[28px] font-bold">
              Casual
            </h1>
          </div>
          <div className="h-full w-[50%]">
            <Image
              src="/Assets/image 11.png"
              alt="Casual"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Formal */}
        <div className="flex items-center bg-white rounded-[40px] overflow-hidden shadow-md h-[150px] sm:h-[200px] lg:h-[250px]">
          <div className="flex flex-col justify-center pl-4 sm:pl-6 lg:pl-8 flex-1">
            <h1 className="text-[18px] sm:text-[24px] lg:text-[28px] font-bold">
              Formal
            </h1>
          </div>
          <div className="h-full w-[50%]">
            <Image
              src="/Assets/image 13.png"
              alt="Formal"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Party */}
        <div className="flex items-center bg-white rounded-[40px] overflow-hidden shadow-md h-[150px] sm:h-[200px] lg:h-[250px]">
          <div className="flex flex-col justify-center pl-4 sm:pl-6 lg:pl-8 flex-1">
            <h1 className="text-[18px] sm:text-[24px] lg:text-[28px] font-bold">
              Party
            </h1>
          </div>
          <div className="h-full w-[50%]">
            <Image
              src="/Assets/image 12.png"
              alt="Party"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Gym */}
        <div className="flex items-center bg-white rounded-[40px] overflow-hidden shadow-md h-[150px] sm:h-[200px] lg:h-[250px]">
          <div className="flex flex-col justify-center pl-4 sm:pl-6 lg:pl-8 flex-1">
            <h1 className="text-[18px] sm:text-[24px] lg:text-[28px] font-bold">
              Gym
            </h1>
          </div>
          <div className="h-full w-[50%]">
            <Image
              src="/Assets/image 14.png"
              alt="Gym"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dressstyle;


