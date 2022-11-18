import React from "react";
import Image from "next/image";
import { features } from "../public/data/data";

const Hero = () => {
    return(
        <div className="w-full h-full text-center ">
            <div className="max-w-[1024px] w-full h-full mx-auto flex flex-col justify-center items-center">
                <div className="max-w-[1024px] w-full h-full mx-auto flex flex-col justify-center items-center mb-16">
                    <h1 className="tracking-tighter pt-40 pb-4">Landing templates for startups</h1>
                    <p className="text-xl pb-8">
                        Our landing page template works on all devices, 
                        so you only have to <br/> set it up once, and get beautiful results forever.
                    </p>
                    <div className="mb-16">
                        <button className='bg-[#5d5dff] text-white m-2 px-8 py-3'>Start free trial</button>
                        <button className="bg-[#33363A] text-[#c5d2dc] m-2 px-8 py-3">Learn more</button>
                    </div>
                    <Image src="/../public/assets/landing/Video.png" alt='pic' width='1024' height='576' />   
                </div> 
                <div className=" border-b-2 border-gray-700">
                    <h2 className="tracking-tighter pb-4">Build up the whole picture</h2>
                    <p className="text-xl ">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <br/> mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
                    </p>
                    <div className="flex flex-wrap w-full justify-between mt-20 mb-20">
                        {features.map((feature) => (
                            <div className="flex flex-col justify-center items-center w-[30%] py-8">
                                <div className="bg-[#5d5dff] rounded-full w-16 h-16 p-4  text-white">
                                    {feature.icon}
                                </div>
                                <h3 className="pt-4 pb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-lg"> {feature.description}</p>
                            </div>
                        ))}                            
                    </div>
                </div>                 
                               
            </div>
        </div>
    )
}

export default Hero