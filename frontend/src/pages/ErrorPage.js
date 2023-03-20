import React from 'react'
import ErrorCard from '../components/ErrorCard'
import Header from '../components/Header'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage({isError}) {

  const error=useRouteError();



  return (
    <div className='h-screen overflow-hidden select-none'>
    <Header isError={isError}></Header>
    <ErrorCard></ErrorCard>
    </div>
  )
}
