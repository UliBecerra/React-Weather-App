import React from 'react'
import ToggleTheme from './ToggleTheme'

export default function Search({handleSubmit, message, handleTheme, theme}) {

  return (
    <div className='absolute top-0 min-w-full font-lato'>
    <div className='grid grid-cols-2 min-w-full'>
      <div className='flex items-end'>
    <h1 className=' ml-[15%] pb-3 font-bold text-white'> Weather app</h1>

      
    </div>
      <div className='flex justify-end mt-[8%] mr-[10%]' >
      <ToggleTheme handleTheme={handleTheme} theme={theme}/>
      </div>
</div>  

<form className=' '     onSubmit={handleSubmit}>
        <input id='cityName' type="text" className={`absolute left-[50%] translate-x-[-50%]   top-[10vh]  w-[40vh]  text-center ` + (theme ? ' placeholder-white bg-f-light appearance-none border-2 border-i-light rounded-md  py-2  text-t-light   leading-tight focus:outline-none focus:bg-sh-light focus:border-t-light ': 'placeholder-white bg-f-dark appearance-none border-2 border-transparent rounded-md  py-2  text-t-dark   leading-tight focus:outline-none focus:bg-sh-dark focus:border-t-dark')}  placeholder={'🔍Search city ...'} />
        
      </form>

      
      
    </div>
  )
}
