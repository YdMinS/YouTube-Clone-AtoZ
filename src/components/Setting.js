import React from 'react'

export default function Setting() {
  return (
    <div className='flex flex-row-reverse '>
        {/* 프로필버튼 */}
        <div className='w-[52px] h-[40px] mx-auto my-auto'>
            <div className='bg-sky-200 w-[26px] h-[26px] rounded-full'>
                <img
                src="https://cdn.icon-icons.com/icons2/1780/PNG/64/v-avatar_114344.png"/>
            </div>
        
        </div>
        {/* 종버튼 */}
        <div className='w-[52px] h-[40px] mx-auto my-auto'>
            <svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" ><path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path></svg>
        </div>
        {/* +버튼 */}
        <div className='w-[52px] h-[40px] mx-auto my-auto'>
            <svg height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path></svg>
        </div>
    </div>
  )
}
