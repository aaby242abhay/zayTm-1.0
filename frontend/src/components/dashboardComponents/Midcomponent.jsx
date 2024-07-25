import React from 'react'


    



export const Midcomponent = ({
    balance
}) => {
  return (
    <div>
        <div className='flex'>
            <div className='text-xl font-bold m-6'>
                Your Balance
            </div>
            <div className='text-lg mt-6 mb-6 '>
                ${balance}
            </div>
        </div>
        <div className=' -mt-2 ml-6 mb-4 font-bold text-xl'>
            Users
        </div>
        <div className='ml-6 mr-4'>
         <input type='text' placeholder='Search Users...' className='border border-gray-600 rounded-lg p-2 w-full'/>
        </div>
    </div>
  )
}