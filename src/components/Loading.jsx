import React from 'react'

const Loading = () => {
    return (
        <div className="absolute flex justify-center items-center h-screen relative">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#5200FF]"></div>
        </div>
    )
}

export default Loading