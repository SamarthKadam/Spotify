import React from 'react'
import Play from '../content/play.png'

export default function MusicList({val,data}) {


    function ClickHandler()
    {
        alert("Limited its functionality will be working soon");
    }



  return (
        <div className='grid grid-cols-[1fr,19fr,18fr] mt-1 items-center group px-6 py-1 rounded hover:bg-[#ffffff15]'>
                <div className='text-[#B3B3B3] text-sm font-poppins group-hover:hidden '>{val}</div>
                <div onClick={ClickHandler}  className='text-white text-sm hidden group-hover:block'><img alt='play' src={Play} className='w-3'></img></div>
                <div className='text-[#B3B3B3] text-xs font-poppins'>
                    <div className='flex items-center'>
                        <img className='w-10 mr-4' alt='img' src={data.smImg}></img>
                        <div className='flex flex-col'>
                            <div className={'text-white text-sm font-normal'}>{data.name}</div>
                            <div>{data.artists}</div>
                        </div>
                    </div>
                </div>
                <div className='text-[#9E9D9D] text-sm font-poppins flex justify-end'>Album</div>
                
              </div>
      )
}
