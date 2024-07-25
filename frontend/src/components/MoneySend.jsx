import React from 'react'

export const MoneySend = ({
    userName
}) => {

    const firstLetter = userName.charAt(0).toUpperCase();
  return (
    <div className=' shadow-2xl flex justify-center mt-20 mx-auto max-w-md ' >
    <div >
        <div className='text-3xl font-bold m-20 '>
        Send Money
        </div>
        <div className='flex'>
            <div className='bg-green-500 text-white rounded-full m-1 pt-1 pb-1 pl-3 pr-3 font-semibold text-2xl'>   
                {firstLetter}
            </div>
            <div className='m-2 text-2xl font-extrabold'>
                {userName}
            </div>
        </div>
        <div className='text-sm font-bold ml-1'>Amount (in Rs)</div>

      <input className ="box-border h-5 w-full p-4 border-2 m-1 rounded-md" type ="text" placeholder='Enter Amount'></input>

      <div className='mt-4 mb-10 bg-green-500 text-gray-200 rounded-md flex justify-center pt-2 pb-2 '>
        <button > Initaite Transfer</button>
      </div>
    </div>
  </div>
  )
}
