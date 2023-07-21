import React from 'react'

const Loading = () => {
    return (
        <div className="relative flex justify-center items-center h-screen relative">
            <div className='gradient h-24 w-24 rounded-full py-[3px] absolute left-1/2  -translate-x-2/4 -translate-y-2/4'>

            <div className="animate-spin bg-black rounded-full h-full w-full"></div>
            </div>
        </div>
    )
}

export default Loading