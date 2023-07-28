import React from 'react'

export default function Search() {
  return (
    <div className='flex'>
        <div className='w-[419px] h-[40] flex'>
            {/* 검색창 */}
            <input className='w-[327px] h-[40px] rounded-l-[20px] border-y-2 border-l-2 border-gray-300' placeholder='    검색'/>
            <div className='w-[64px] h-[40px] py-[6px] px-[6px] rounded-r-[20px] bg-[#f8f8f8] border-2 border-gray-300'>
                <div className='w-[24px] h-[24px] mx-auto'>
                    <svg enable-background="new 0 0 24 24" viewBox="0 0 24 24"
                    focusable="false" ><path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>
                </div> 
            </div>
        </div>
            {/* 마이크 버튼 */}
        <div className='w-[469px] h-[40px] rounded-full '>
            <div className='w-[40px] h-[40px] bg-gray-200 rounded-full pt-[8px]'>
                <svg className='h-[24px] w-[24px] mx-auto' viewBox="0 0 24 24" focusable="false" ><path  d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path></svg>
            </div>
        </div>
    </div>
  )
}
