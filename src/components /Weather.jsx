import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import sunny_icon from '../assets/sunny.png'
import cloud_icon from '../assets/cloud.jpeg'
import humidity_icon from '../assets/humidity.jpeg'
import snow_icon from '../assets/snow.png'
import sunsnow_icon from '../assets/sunsnow.png'
import wind_icon from '../assets/wind.png'
import rain_icon from '../assets/rain.jpeg'

const Weather = () => {

    const search= async(city)=>{
        try {
            const url="https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${import.meta.env.VITE_APP_ID}";
        } catch (error) {
            
        }
    }
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type= "text" placeholder='Search'/>
            <img src={search_icon} alt=''/>
        </div>
        <img src={clear_icon} alt='' className='weather-icon'/>
        <p className='temperature'>16°C</p>
        <p className='location'>london</p>
        <div className="weather-data">
            <div className="col">
            <img src={humidity_icon} alt="" />
            <div>
                <p>91%</p>
                <span>humidity</span>
            </div>
            </div>
            <div className="col">
            <img src={wind_icon} alt="" />
            <div>
                <p>3.6km/h</p>
                <span>wind speed</span>
            </div>
        </div>
      </div>
    </div>
    
       
  )
}

export default Weather
