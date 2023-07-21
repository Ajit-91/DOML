import React from 'react'
import globe from '../../../assets/globe.png'
import Button from '../../../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full flex flex-col-reverse md:flex-row mb-32 md:mt-7">
            <div className="w-full pt-4 md:w-1/2 flex flex-col justify-center items-center md:items-start px-4 md:px-0">
                <h1 className="text-3xl md:text-7xl  font-bold mb-4 text-center md:text-left">
                    <span className="gradient-text mr-3 text-transparent ">
                        AI Marketing
                    </span> <br/>
                    Optimized Reach
                </h1>
                <p className="text-center md:text-left">
                    Our vision is to revolutionize the way brands and advertisers target, reach
                </p>
                <div className='gradient w-full sm:w-3/4 h-[1px] my-8'></div>
                <Button gradientOutline rounded='full' onClick={()=>navigate('/users')}>
                    Get Started <FontAwesomeIcon className='ml-3' icon={faArrowRightLong} beat /> 
                </Button>
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center md:justify-end">
                <img src={globe} alt="banner" className="w-90 xs:w-2/3 md:w-3/4" />
            </div>
        </div>
    )
}

export default Hero