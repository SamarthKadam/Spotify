import React from 'react'
import Input from './Input';
import { Link } from 'react-router-dom';
import { useSubmit } from 'react-router-dom';
import { useState } from 'react';
import {validate} from 'react-email-validator'
import img from '../content/SpotifyDark.png';
import { useNavigation } from 'react-router-dom';

export default function FormLog() {

  const navigation=useNavigation();
  const submit=useSubmit();
  const [loginData,setloginData]=useState({email:'',password:''});

  const isSubmitting=navigation.state==='submitting';


  function submitData(e)
  {
    e.preventDefault();
    if(!loginData.email || !validate(loginData.email) ||!loginData.password)
    {
      alert("Please enter valid details")
    }

    submit(loginData,{method:'post'})
  }





  
  
  return (
    <div className='flex flex-col  items-center'>
      <img className='w-48 mt-8' src={img} alt='spotify_logo'></img>
      <div className='font-poppins text-sm font-bold mt-8 '>To continue, log in to Spotify.</div>
      <hr></hr>
      <form className='w-[35%] mt-6 relative'>
        <Input name='email' onSetData={setloginData} text="Email address" placeholder="Email address" type='text'></Input>
        <Input name='password' onSetData={setloginData} text='Enter your password' type='password' placeholder='Password'></Input>
        <div className='flex flex-row justify-center mt-10'>
        <button disabled={isSubmitting} onClick={submitData} className='px-10 rounded-[30px] bg-[#1BD760] text-lg font-medium py-4 hover:px-[44px] '>{isSubmitting?'Loading...':'LOG IN'}</button>
        </div>
        <div className='h-[1px] w-[100%] mt-10 bg-[#808080]'></div>
        <div className='flex flex-col items-center mt-6'>
            <div className='font-poppines text-xl font-bold '>Don't have an account?</div>
            <Link to='/' className='text-[#5A5A5A] font-medium border-2 border-[#5A5A5A] hover:border-black px-32 rounded-[40px] mt-7 py-4 tracking-wide'>SIGN UP FOR SPOTIFY</Link>
        </div>
      </form>
    </div>
  )
}
