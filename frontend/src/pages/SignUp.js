import React from 'react'
import { redirect } from 'react-router-dom';
import FormComp from '../components/FormComp'
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


  const response=await fetch('http://127.0.0.1:8000/api/v1/users/signup',{
    method:request.method,
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(authData)
  });

  const responseData=await response.json();

  if(responseData.status==='fail')
  {
    alert(responseData.message);
    return null;
  }

  localStorage.setItem('jwt',responseData.token);


  return redirect('/play');


}
