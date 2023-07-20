import React from 'react'

const Button = ({children, buttonClasses, rounded, px = 7, py = 2, outline = false, gradientOutline = false, }) => {
  return (
    <div className={
        `p-[1px] cursor-pointer
        ${gradientOutline ? 'gradient' : ''} 
        ${outline ? 'bg-[#9E9C9C]' : ''}
        ${rounded ? 'rounded-'+rounded : ''} 
        `}>
        <button className={`px-${px} py-${py} bg-black ${rounded ? 'rounded-'+rounded : ''} ${buttonClasses}`}>{children}</button>
    </div>
  )
}

export default Button