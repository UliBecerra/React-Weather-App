import React from 'react'

export default function Loader() {
  return (
    <div className=' bg-[#54B6E9] max-h-screen min-h-screen grid place-content-center text-slate-200 text-[28px]'>
      <img className='block mx-auto ' src="https://raw.githubusercontent.com/UliBecerra/React-Weather-App/main/public/images/loader.png" alt="" />
      <h1>Weather app</h1>
    </div>
  )
}
