import React from 'react'
import ErrorCard from '../components/ErrorCard'
import Header from '../components/Header'

export default function ErrorPage({isError}) {




  return (
    <div className='h-screen overflow-hidden select-none'>
    <Header isError={isError}></Header>
    <ErrorCard></ErrorCard>
    </div>
  )
}
