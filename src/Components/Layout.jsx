import React, { useState } from 'react'


const Layout = () => {
  
  const [number,setnumber] = useState('');
  const handleClick = e => 
    setnumber(number.concat(e.target.id))

  const handleClear = () =>
  setnumber('')

  const handleResult = () =>{
  try{
  // eslint-disable-next-line no-eval
  setnumber(eval(number).toString())
  }catch(error){
    setnumber("error")
  }
}

  const handleDelete = () =>
  setnumber(number.slice(0,-1))

        
  return (
    <>
    <div className="w-screen min-h-screen bg-gray-600">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
        <div class="font-mono  text-3xl border h-90 w-90 border-slate-100 bg-red-100">
          <div className="bg-sky-700 h-20  ">
            <h1 className='text-right text-4xl'>{number}</h1>
          </div>
            <div class="p-2.5 grid grid-cols-4 gap-4 bg-red">
            <div></div>
              <div></div>

            <button id='' onClick={handleClear}>C</button>
            <button id='2' onClick={handleDelete}>DEL</button>

              <button id='1' onClick={handleClick}>1</button>
              <button id='2' onClick={handleClick}>2</button>
              <button id='3' onClick={handleClick}>3</button>
              <button id='*' onClick={handleClick}>*</button>
              <button id='4' onClick={handleClick}>4</button>
              <button id='5' onClick={handleClick}>5</button>
              <button id='6' onClick={handleClick}>6</button>
              <button id='/' onClick={handleClick}>/</button>
              <button id='7' onClick={handleClick}>7</button>
              <button id='8' onClick={handleClick}>8</button>
              <button id='9' onClick={handleClick}>9</button>
              <button id='+' onClick={handleClick}>+</button>
              <button id='0' onClick={handleClick}>0</button>
              <button id='.' onClick={handleClick}>.</button>
              <button id='=' onClick={handleResult}>=</button>
              <button id='-' onClick={handleClick}>-</button>
            </div>
        </div>
      </div>
  </div>
  </>
  )
}

export default Layout