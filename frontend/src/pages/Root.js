import React from 'react'
import LeftComponent from '../components/LeftComponent'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className='flex h-[100%] bg-[#121212] flex-row select-none'>
      <LeftComponent></LeftComponent>
      <Outlet></Outlet>
    </div>
  )
}
