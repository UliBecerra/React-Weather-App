import React, { useState } from 'react'
import Search from './Search';
import './Weather.css'
  
function Weather({weather, temp, handleSubmit, message, theme, handleTheme }) {
  const [isCelsius, setIsCelsius] = useState(true);
  const handleTempEscal = () =>{
    setIsCelsius(!isCelsius)
  }

  let bgIcon = weather.weather[0].icon
 
  return (
    <div className={  theme ? 'bg-light grid place-content-center min-h-screen justify-center items-center font-lato   ' : 'bg-dark grid place-content-center min-h-screen justify-center items-center font-lato '}>
      
      <Search  handleSubmit={handleSubmit} message={message} handleTheme={handleTheme} theme={theme}/>

      
      <section className={ `grid grid-cols-two grid-rows-tre   bg-cover  ` + (theme ? "text-t-light bg-[url('/public/images/rectangle/light.png')]" : "text-t-dark bg-[url('/public/images/rectangle/dark.png')]")  }>
      
      
        <div className='capitalize col-start-1 row-start-1 row-end-2 col-end-2 flex  items-center pl-4 py-0'>
          <h1 className='text-[65px] '>{isCelsius ? temp.celsius : temp.fahrenheit}°</h1>
        </div>
        

        <div className={`capitalize col-start-2 row-start-1 row-end-3 col-end-3  ")]`} >
          
        <div className={` min-h-[150px] min-w-[150px]  bg-cover bg-[url("/public/images/icons/${weather.weather[0].icon}.png")]`}>
          <img src={(`/public/images/icons/01n.png`)} alt="" />
        </div>

      
        </div> 
 
        <div className={`capitalize col-start-1 row-start-2 row-end-3 text-[13px]  pl-6 pt-0` + (theme ? 'text-i-light': 'text-i-dark')}>
        <div>
            VIENTO {weather.wind.speed} m/s  
          </div>
          <div>
            NUBES {weather.clouds.all}%
          </div>
          
          <div>
            <h5>PRESIÓN {weather.main.pressure} hPa </h5>
          </div>
          
        </div>

        <div className='capitalize col-start-1 row-start-4 row-end-5 text-[20px] pt-0 pb-5 pl-7  font-bold '>
        <h3>{weather.name} {weather.sys.country}</h3>
        
        </div>
        
        <div className='capitalize col-start-2 row-start-4 row-end-5 flex justify-end p-3 text-[14px] font-medium'>
        <h3>{weather.weather[0].description}</h3>
        </div>

        

        
      </section>
      <button className={`rounded-[10px]   py-2 px-12 text-white mt-[20%] block m-auto ` + (theme ? 'bg-b-light': 'bg-b-dark')} onClick={handleTempEscal}>
          Cambiar a {isCelsius ? 'F' : 'C'}°
        </button>

    </div>
  )
}

export default Weather