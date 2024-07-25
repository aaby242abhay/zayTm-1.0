import React from 'react'

export const Topbar = ({
    userName
}) => {
    const firstLetter = userName.charAt(0).toUpperCase();
  return (
    <>
    <div className='flex justify-between m-3 '>
        <div className='text-3xl font-bold mt-1'>
            Payments App
        </div>
        <div className='flex '>
            <div className='m-2 font-medium'>
                Hello, {userName}
            </div>
            <div className='bg-gray-300 rounded-full p-2 pl-4 pr-4 font-semibold text-lg'>   
                {firstLetter}
            </div>
        </div>
    </div>
    <hr className='border-t-4 border-gray-700 w-full'/>
    </>
  )
}
