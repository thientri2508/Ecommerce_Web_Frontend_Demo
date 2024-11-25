import React from 'react';
import tagIcon from '../../assets/icon/tag-icon.png'

interface TagProps {
  text: string;         
}

const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <ul className='inline-flex items-center text-small bg-[#FFFCE1] px-3 py-[4px] gap-2 rounded-[8px] border-[#EEAD08] border-solid border-[1px]'>
        <li><img src={tagIcon}></img></li>
        <li>{text}</li>
    </ul>
  )
}

export default Tag