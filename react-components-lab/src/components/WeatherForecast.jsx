import React from 'react'
import './weatherForecast.css'
import WeatherIcon from './sub-components/WeatherIcon'
import WeatherData from './sub-components/WeatherData'

export default function weatherForecast(props) {
    let day = props.day
    let src = props.src
    let alt = props.alt
    let cond = props.cond
    let time = props.time

  return (
    <>
        <div className="weather">
            <WeatherIcon src={src} alt={alt} />
            <WeatherData day={day} cond={cond} time={time}/>
        </div>
    </>
  )
}
