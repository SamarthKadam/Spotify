import React from 'react'
export default function Input({text,type,placeholder,onSetData,name,}) {

  function setInput(e)
  {
    onSetData((data)=>{

      let obj={...data};
      obj[`${name}`]=e.target.value;
      return obj;
    })
  }

  return (
    <div className='mt-3 '>
          <div className='font-poppiins font-medium mb-2 '>{text}</div>
          <input onChange={setInput} placeholder={placeholder} className='outline-0 border-[1px] rounded-md w-[100%] px-2 py-3  font-poppins border-[#808080]' type={type}></input>
        </div>
  )
}
