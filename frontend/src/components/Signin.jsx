import React from 'react'

export const Signin = () => {
  return (
    <div className=' shadow-2xl flex justify-center mt-20 mx-auto max-w-md ' >
      <div className='-p-10'>
        <div className='text-3xl font-bold pb-2 pl-24 mt-4'>
          Sign In</div>
        <div className='text-gray-500 font-semibold p-2 text-center'>Enter the credentials to access your <br/>account.</div>
        <div className='font-semibold m-1'>Email</div>
        <input className ="box-border h-5 w-full p-4 border-2 m-1 rounded-md" type ="text" placeholder='johndoe@example.com'></input>
        <div className='font-semibold m-1'>Password</div>
        <input className ="box-border h-5 w-full p-4 border-2 m-1 rounded-md" type ="text" placeholder=''></input>
        <div className='mt-4 bg-black text-gray-200 rounded-md flex justify-center pt-2 pb-2  mb-3'>
          <button > Sign Up</button>
        </div>
        <div className='flex justify-center m-4 mb-10'> 
          <div className='font-semibold'>Don't have an account?</div>
          <div className='font-semibold ml-1 underline mr-6 cursor-pointer'>Sign Up</div> 
        </div>
      </div>
    </div>
  )
}
