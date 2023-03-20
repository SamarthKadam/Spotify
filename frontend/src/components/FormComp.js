import { validate } from 'react-email-validator';
import Input from './Input';
import img from '../content/SpotifyDark.png';
import { useState } from 'react';
import { useSubmit } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';

export default function FormComp() {

  const navigation=useNavigation();
  const submit=useSubmit();
  const [SignUpData,setSignUpData]=useState({name:'',email:'',confirmEmail:'',password:''});


  const isSubmitting=navigation.state==='submitting';

  function sendData(e)
  {
    e.preventDefault();
    const keys=Object.keys(SignUpData);
    let CheckError=0;

    keys.forEach((data)=>{
      if(SignUpData[data]==='')
      {
        CheckError=1;
      }
    })

    if(!validate(SignUpData.email)|| !validate(SignUpData.confirmEmail))
    {
      CheckError=1;
    }

    if(CheckError===1)
    {
      alert("Please Verify Your Details");
    }
    else{
      submit(SignUpData,{method:'post'})
    }

  }


  return (
    <>
    <div className='flex flex-col  items-center z-0'>
      <img className='w-48 mt-8' src={img} alt='spotify_logo'></img>
      <div className='font-poppins text-2xl mt-8 font-bold'>Sign up for free to start listening.</div>
      <hr></hr>
      <form className='w-[35%] mt-6 relative'>
        <Input   name='email' onSetData={setSignUpData} text="What's your email?" placeholder='Enter your email' type='text'></Input>
        <Input  name='confirmEmail' onSetData={setSignUpData} text='Confirm your email' placeholder='Enter your email again' type='text' ></Input>
        <Input  name='password' onSetData={setSignUpData} text='Create a password' placeholder='Create a password' type='password'></Input>
        <Input  name='name' onSetData={setSignUpData} text='What should we call you?' placeholder='Enter profile name' type='text'></Input>
        <button disabled={isSubmitting} onClick={sendData} className='px-10 rounded-[30px] bg-[#1BD760] text-lg font-medium py-4  absolute left-[50%] mt-10 translate-x-[-50%] hover:px-[42px] hover:py-[17px]'>{isSubmitting?'Loading....':'Sign Up'}</button>
      </form>
    </div>
    </>
  )
}
