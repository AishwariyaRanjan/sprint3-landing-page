import React from 'react';
// import { FaGithub, FaLinkedIn, FaTwitter, FaInstagram, faFacebook} from 'react/fa'\
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedIn, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Footer = () => {
    return(
        <div className='max-w-[1024px] w-full mx-auto mt-5 mb-14'>
            <div className='flex flex-col'>
                <div className='mb-7'>
                    <Image src='/../public/assets/Logo.png' alt='/' width='32' height='32'/>
                </div>
                <div className='flex justify-between'>
                    <p>&copy; 2020 Open PRO. All rights reserved.</p>
                    <div className=' flex p-2 gap-x-4'>
                        <div className='rounded-full bg-[#25282C] text-[#5D5DFF] px-2 w-8 h-8'>
                            <FontAwesomeIcon icon="faTwitter" color="#fdfd55" />
                        </div>
                        <div className='rounded-full bg-[#25282C] text-[#5D5DFF] px-2 w-8 h-8'>
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                        <div className='rounded-full bg-[#25282C] text-[#5D5DFF] px-2 w-8 h-8'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div className='rounded-full bg-[#25282C] text-[#5D5DFF] px-2 w-8 h-8'>
                            <FontAwesomeIcon icon={faInstagram} color="#fdfd55" />
                        </div>
                        <div className='rounded-full bg-[#25282C] text-[5D5DFF] px-2 w-8 h-8'>
                            <FontAwesomeIcon icon={faLinkedIn} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer