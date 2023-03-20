import React from 'react'
import image from '../content/pngegg.png';
import homeLogo from '../content/home.png'
import searchLogo from '../content/magnifying-glass.png'
import albumLogo from '../content/music-album.png'
import addLogo from '../content/addition.png';
import likeLogo from '../content/liked-songs-300.png';
import bookmarkLogo from '../content/bookmark.png';

import Bar from './Bar';

export default function LeftComponent() {
  return (
    <div className='bg-black min-h-screen flex flex-col w-72 px-4 box-border'>
        <img className='w-36 -mt-10'alt='logo' src={image}></img>
        <div className='flex flex-col mb-10'>
            <Bar logo={homeLogo} text='Home'></Bar>
            <Bar logo={searchLogo} text='Search'></Bar>
            <Bar logo={albumLogo} text='Your Library'></Bar>
        </div>
        <div className='flex flex-col'>
            <Bar logo={addLogo} text='Create Playlist'></Bar>
            <Bar logo={likeLogo} text='Liked Songs'></Bar>
            <Bar logo={bookmarkLogo} text='Your Episodes' ></Bar>
        </div>
    </div>
  )
}
