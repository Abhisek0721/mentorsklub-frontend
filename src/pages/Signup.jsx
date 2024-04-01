import React from 'react'
import { useState } from 'react'
import toast,{Toaster} from 'react-hot-toast'
import logo from '../assets/logo.jpg'

function Signup() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [name, setname] = useState('')
  const [cnfpassword, setcnfpassword] = useState('')

  

  const handlebtn = (e)=>{
    e.preventDefault()
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(regex.test(password))
    {
      toast.success("successfully create an account",{
        duration: 2000
      })
    }
    else if(password!==cnfpassword)
    {
      toast.error("passord not match",{
        duration:5000
      })
    }
    else{
      toast.error("Password should contain at least one capital letter, one lowercase letter, one digit, and one special character.\nPlease try again.",{
        duration: 5000
      })
    }
   
  }
  
  return (
    <div className='border  flex justify-center w-screen h-screen items-center'>
      <Toaster/>
    <main className='my-6 mx-7'>
    <div className='flex justify-center'><img 
                 src={logo}
                 alt="" 
                 className='w-[120px] shadow-sm  mb-12 object-cover'
                 />
                 </div>
    <div className='text-center my-12 text-5xl font-semibold'><h1>Create an account</h1></div>
    <form action="" className='rounded-sm min-w-[430px] bg-[var(--color-grey-100)] shadow-[var(--shadow-md)]'>
        <div className='pt-12 px-12 '>
        <div className='flex flex-col  pt-5'>
            <label className='mb-2'>Full name</label>
            <input 
            type="text"
            placeholder='enter your full name'
            autoComplete='true'
            className='rounded-sm px-2 py-2 border border-solid border-black'
            required
            value={name} 
            onChange={(e)=> setname(e.target.value)}/>
        </div>
        <div className='flex flex-col my-5 '>
            <label className='mb-2'>Email address</label>
            <input 
            type="email"
            placeholder='demo@example.com'
            autoComplete='true'
            className='rounded-sm px-2 py-2  border border-solid border-black'
            required
            value={email} 
            onChange={(e)=> setemail(e.target.value)}/>
        </div>
        <div className='flex flex-col'>
            <label className='mb-2'>Password</label>
            <input 
            type="password"
            placeholder='enter your password'
            autoComplete='true'
            className='rounded-sm px-2 py-2  border border-solid border-black'
            required
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
             />
        </div>
        <div className='flex flex-col pt-5'>
            <label className='mb-2'>Repeat password</label>
            <input 
            type="password"
            placeholder='enter your password'
            autoComplete='true'
            className='rounded-sm px-2 py-2  border border-solid border-black'
            required
            value={cnfpassword}
            onChange={(e)=>setcnfpassword(e.target.value)}
             />
        </div>
        <div className='flex justify-center  py-16'>
            <button
            onClick={handlebtn}
            className='w-full py-3 rounded-sm font-semibold bg-[var(--color-brand-500)] text-[var(--color-grey-0)]'
            >Sign up</button>
        </div>
        </div>
    </form>
    </main>
</div>
  )
}

export default Signup