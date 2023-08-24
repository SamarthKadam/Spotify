import React from 'react'
import FormLog from '../components/FormLog'
import { redirect } from 'react-router-dom';
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
export default function Login() {
  return (
    <FormLog></FormLog>
  )
}

export  async function action({request})
{

  const data=await request.formData();

  const authdata={
    email:data.get('email'),
    password:data.get('password')
  }


  const response=await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/login`,{
    method:request.method,
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(authdata)
  })

  const responseData=await response.json();

  if(responseData.status==='fail')
  {
    notify(responseData.message);
    // alert(responseData.message);
    return null;
  }

  localStorage.setItem('jwt',responseData.token);

  return redirect('/play')


} 