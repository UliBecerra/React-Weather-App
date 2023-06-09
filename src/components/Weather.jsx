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
      
      
        <div className='capitalize col-start-1 row-start-1 row-end-2 col-end-2 flex  items-center pl-5 pr-3 pt-2'>
          <h1 className='text-[58px] md:text-[65px] '>{isCelsius ? temp.celsius : temp.fahrenheit}°</h1>
        </div>
        

        <div className={`capitalize col-start-2 row-start-1 row-end-3 col-end-3  ")]`} >
          
        <div className={` min-h-[150px] min-w-[150px]  bg-cover ` + (
        ( (weather.weather[0].icon === '01d' || weather.weather[0].icon === '01n') ? (`bg-[url("/public/images/icons/01d.png")]`) :
        (weather.weather[0].icon === '02d' || weather.weather[0].icon === '02n') ? (`bg-[url("/public/images/icons/02d.png")]`) :
        (weather.weather[0].icon === '03d' || weather.weather[0].icon === '03n') ? (`bg-[url("/public/images/icons/03d.png")]`) :
        (weather.weather[0].icon === '04d' || weather.weather[0].icon === '04n') ? (`bg-[url("/public/images/icons/04d.png")]`) :
        (weather.weather[0].icon === '09d' || weather.weather[0].icon === '09n') ? (`bg-[url("/public/images/icons/09d.png")]`) : 
        (weather.weather[0].icon === '10d' || weather.weather[0].icon === '10n') ? (`bg-[url("/public/images/icons/10d.png")]`) : 
        (weather.weather[0].icon === '11d' || weather.weather[0].icon === '11n') ? (`bg-[url("/public/images/icons/11d.png")]`) : 
        (weather.weather[0].icon === '13d' || weather.weather[0].icon === '13n') ? (`bg-[url("/public/images/icons/13d.png")]`) : 
        (weather.weather[0].icon === '50d' || weather.weather[0].icon === '50n') && (`bg-[url("/public/images/icons/50d.png")]`) 
        
        )
        )
        }>
          {/* <img src={`/public/images/icons/01n.png`} alt="" /> */}
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

        <div className='capitalize col-start-1 row-start-4 row-end-5 text-[20px] pt-3 pb-5 pl-7  font-bold '>
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