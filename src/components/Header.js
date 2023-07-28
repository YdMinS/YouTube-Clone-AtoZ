import React from 'react';
import Menu from './Menu';
import Search from './Search';
import Setting from './Setting';

export default function Header() {
    return (
      <div className='header flex pb-[8px] pt-[16px] justify-between'>
           <Menu className='flex'/>
           <Search className='felx'/>
           <Setting className='flex flex-row-reverse'/>
      </div>
    )
  }
