import React from 'react'

export const SendMoneySingle = ({
    userName
}) => {
    const firstLetter = userName.charAt(0).toUpperCase();
  return (
    <div className='m-6'>
        <div className='flex justify-between'>
            <div className='flex' >
                <div className='bg-gray-300 rounded-full p-2 pl-4 pr-4 font-semibold text-lg'>   
                    {firstLetter}
                </div>
                <div className='m-2 ml-3 font-semibold text-xl'>
                        {userName}
                </div>
            </div>
            <button className='bg-black text-gray-200 rounded-xl pl-4 pr-4'>
                    Send Money
            </button>
        </div>
    </div>
  )
}
