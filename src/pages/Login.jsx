import React from 'react'
import { useState } from 'react'
import logo from '../assets/logo.jpg'
function Login() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')


  return (
    <div className='border flex justify-center w-screen h-screen items-center bg-[var( --color-grey-50)]'>
        <main className='my-6 mx-7'>
            <div className='flex justify-center'>
                <img 
                 src={logo}
                 alt="" 
                 className='w-[120px] shadow-sm  mb-12 object-cover'
                 />
                 </div>
        <div className='text-center pb-14 text-5xl font-semibold'><h1>Log in to your account</h1></div>
        <form action="" className='rounded-sm min-w-[450px] bg-[var(--color-grey-100)] shadow-[var(--shadow-md)]'>
            <div className='p-3 px-12 '>
            <div className='flex flex-col py-12'>
                <label className='mb-2'>Email address</label>
                <input 
                type="email"
                placeholder='demo@example.com'
                className='rounded-sm px-2 py-2 border border-solid border-black'
                required
                value={email} 
                onChange={(e)=> setemail(e.target.value)}/>
            </div>
            <div className='flex flex-col pb-12'>
                <label className='mb-2'>Password</label>
                <input 
                type="password"
                placeholder='enter your password'
                className='rounded-sm px-3 py-2 border border-solid border-black'
                required
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                 />
            </div>
            <div className='flex justify-center my-8 pb-5'>
                <button
                className='w-full py-3 rounded-sm font-semibold bg-[var(--color-brand-500)] text-[var(--color-grey-0)]'
                >Log in</button>
            </div>
            </div>
        </form>
        </main>
    </div>
  )
}

export default Login