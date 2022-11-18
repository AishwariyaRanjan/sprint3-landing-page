import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MenuIcon } from '@heroicons/reactv1/solid'

const Navbar = () => {
    return (
        <div className='fixed w-full h-[60px] z-[100] px-40 bg-[#151719]'>
            <div className='flex justify-between items-center w-full h-full 2xl:px-16 pt-6'>
                <Image src='/../public/assets/Logo.png' alt='/' width='32' height='32'/>
                <div className='ml-96'>
                    <ul className='hidden md:flex'>
                        <Link href='/product'>
                            <li className='ml-88 mt-1 w-28'>Product</li>
                        </Link>                        
                        <button className='bg-[#5d5dff] text-white w-24 px-4 py-1 ml-12'>Sign up</button>
                    </ul>
                    <div className='md:hidden' >
                        <MenuIcon className='h-8 w-8'/>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Navbar