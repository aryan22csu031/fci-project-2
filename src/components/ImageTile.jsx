import React from 'react'

const ImageTile = ({url, title, discription}) => {
  return (
    <div className='flex flex-col justify-center'>
        <img src={url} alt="banner" className='w-[30rem] rounded-xl' />
        <h1 className='font-serif font-semibold text-lg mt-2'>{title}</h1>
        <p className='font-thin'>{discription}</p>
    </div>
  )
}

export default ImageTile
