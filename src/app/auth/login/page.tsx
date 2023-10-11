import React from 'react'

export default function Login() {
  return (
    <div
      style={{ backgroundImage: 'url(/background2.jpg)' }}
      className='bg-cover bg-center bg-no-repeat text-white opacity-80'>
      <div className='flex min-h-screen flex-col items-center justify-center py-2'>
        <form className='flex w-full flex-col space-y-4 bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'>
          <div className='flex flex-col items-center space-y-4'>
            <h1 className='text-3x1 font-bold'>Login</h1>
            <p className='text-sm text-gray-400'>
              New to the app? {' '}
              <a href='#' className='text-red-500 hover:underline'>Register</a>
            </p>
          </div>
          <div>

          </div>
        </form>
      </div>
    </div>
  )
}
