import { CheckIcon } from "@heroicons/reactv1/solid"
import React from "react"
import Image from "next/image"

const Content = () => {
    return(
            <div className="w-full h-full text-center">
                <div className="max-w-[1100px] w-full h-full mx-auto flex flex-col justify-center items-center pt-40 border-b-2 border-gray-800">
                    <div className="flex flex-col justify-center items-center ">
                        <p className="w-48  h-8 bg-[#C6F6D5] text-[#26A269] font-medium rounded-3xl text-sm tracking-tight py-1" >Reach goals that matters</p>
                        <h2 className="tracking-tighter py-4">One product, unlimited solutions</h2>
                        <p className="text-xl ">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <br/>deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center my-20 gap-y-20 text-left">
                        <div className="flex items-center gap-x-16">
                            <div className="flex flex-col justify-start items-start ">
                                <p className="text-xl font-sans text-[#5d5dff] ">More speed. Less spend</p>
                                <h3 className="text-3xl my-2">Keep projects on schedule</h3>
                                <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <ul className="text-lg mt-4">
                                    <li className="flex items-center">
                                        <CheckIcon className="text-[#48BB78] w-6 h-4"/>
                                        <span>Duis aute irure dolor in reprehenderit</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span><CheckIcon className="text-[#48BB78] w-6 h-4"/></span>Excepteur sint occaecat 
                                    </li>
                                    <li className="flex items-center">
                                        <span><CheckIcon className="text-[#48BB78] w-6 h-4"/></span>Amet consectetur adipiscing elit
                                    </li>
                                </ul>
                            </div>
                            <Image src="/../public/assets/product/pic1.png" alt="pic1" width='540' height='405' />

                        </div>
                        <div className="flex items-center gap-x-16">
                            <Image src="/../public/assets/product/Illustration2.png" alt="pic1" width='540' height='405' />
                            <div className="flex flex-col justify-start items-start ">
                                <p className="text-xl font-sans text-[#5d5dff] ">More speed. Less spend</p>
                                <h3 className="text-3xl my-2">Keep projects on schedule</h3>
                                <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <ul className="text-lg mt-4">
                                    <li className="flex items-center">
                                        <CheckIcon className="text-[#48BB78] w-6 h-4"/>
                                        <span>Duis aute irure dolor in reprehenderit</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span><CheckIcon className="text-[#48BB78] w-6 h-4"/></span>Excepteur sint occaecat 
                                    </li>
                                    <li className="flex items-center">
                                        <span><CheckIcon className="text-[#48BB78] w-6 h-4"/></span>Amet consectetur adipiscing elit
                                    </li>
                                </ul>
                            </div>
                            

                        </div>
                        <div className="flex items-center gap-x-16">
                            <div className="flex flex-col justify-start items-start ">
                                <p className="text-xl font-sans text-[#5d5dff] ">More speed. Less spend</p>
                                <h3 className="text-3xl my-2">Keep projects on schedule</h3>
                                <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <ul className="text-lg mt-4">
                                    <li className="flex items-center">
                                        <CheckIcon className="text-[#48BB78] w-6 h-4"/>
                                        <span>Duis aute irure dolor in reprehenderit</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span><CheckIcon className="text-[#48BB78] w-6 h-4"/></span>Excepteur sint occaecat 
                                    </li>
                                    <li className="flex items-center">
                                        <span><CheckIcon className="text-[#48BB78] w-6 h-4"/></span>Amet consectetur adipiscing elit
                                    </li>
                                </ul>
                            </div>
                            <Image src="/../public/assets/product/Illustration3.png" alt="pic1" width='540' height='405' />

                        </div>

                    </div>

                </div>
            </div>
    )
}
export default Content