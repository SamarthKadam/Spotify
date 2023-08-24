import React from 'react'
import { redirect } from 'react-router-dom';
import FormComp from '../components/FormComp'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notify = () =>{
  return toast.error('Something went wrong!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}
export default function SignUp() {

  return (
    <FormComp></FormComp>
  )
}


export async function action({request})
{
  const data=await request.formData();
  const authData={
    name:data.get('name'),
    email:data.get('email'),
    confirmEmail:data.get('confirmEmail'),
    password:data.get('password')
  }


  const response=await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/signup`,{
    method:request.method,
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(authData)
  });

  const responseData=await response.json();

  if(responseData.status==='fail')
  {
    notify();
    return null;
  }

  localStorage.setItem('jwt',responseData.token);


  return redirect('/play');


}
