import React from 'react'
import './Menu.css'

export default function Menu() {
  return (
    <div className='w-[169px] h-[56px] flex'>
        <div className='w-[40px] h-[40px] p-[8px]'>
            <div className='w-[24px] h-[24px]'>
                <svg  viewBox="0 0 24 24" focusable="false"><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg>
            </div>
        </div>
        <div className='w-[129px] h-[56px] 
        px-[18px] py-[8px]
        ' >
            <img className='w-[90px] h-[20px] ' src='images/yt_logo_rgb_light.png'/>
        </div>
    </div>
  )
}