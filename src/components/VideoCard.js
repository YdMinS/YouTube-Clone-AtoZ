import React from 'react'

export default function VideoCard() {
  return (
    <div>
        <img className='h-[193px] rounded-lg' src='images/goorm-thumbnail.png' alt='thumbnail'/>
        <div className='flex mt-[10px] h-[120px] pr-[24px]'>
            <div className='w-[36px] pt-[12px] pr-[12px]'>
                <div className='w-[36px] h-[36px] bg-black rounded-full'>
                </div>
            </div>
            <div className='w-[230px] pl-[10px]'>
                <div className='w-[230px] min-h-[20px]'>
                    <p className='font-bold'>구름 플레이 리스트</p>
                </div>
                <div className='h-[20px] mt-[5px] text-[14px]'>구름스튜디오</div>
                <div className='h-[20px] text-[14px]'>조회수 24만 • 1개월 전</div>
            </div>
        </div>
    </div>
  )
}
