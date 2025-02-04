import React from 'react';

export default function WeatherIcon(props) {
    let src = props.src
    let alt = props.alt

    return(
        <>
        <img src={src} alt={alt} />
        </>
    )
}