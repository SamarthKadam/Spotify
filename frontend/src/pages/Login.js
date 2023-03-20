import React from 'react'
import FormLog from '../components/FormLog'
import { redirect } from 'react-router-dom';
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


  const response=await fetch('http://127.0.0.1:8000/api/v1/users/login',{
    method:request.method,
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(authdata)
  })

  const responseData=await response.json();

  if(responseData.status==='fail')
  {
    alert(responseData.message);
    return null;
  }

  localStorage.setItem('jwt',responseData.token);

  return redirect('/play')


} 