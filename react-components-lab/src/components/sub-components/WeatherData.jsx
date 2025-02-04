import React from 'react'

export default function WeatherData(props) {
    let day = props.day    
    let cond = props.cond
    let time = props.time
  
return (
    <>
        <h2>{day}</h2>            
        <p><span>conditions: </span>{cond}</p>
        <p><span>time: </span>{time}</p>
    </>
  )
}
