import React from 'react'

const LogosCarousel = ({images}) => {
    return (
        <>
            <div className="w-[200%] h-20 overflow-hidden relative">
                {/* 2. */}
                <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate">
                    {/* 3 */}
                    {images.map((image, index) => {
                        return (
                            <div key={index}  className="flex justify-center items-start w-[20rem]">
                                <img src={image} />
                            </div>
                        );
                    })}
                    {images.map((image, index) => {
                        return (
                            <div key={index} className="flex justify-center items-start w-[20rem]">
                                <img src={image} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default LogosCarousel