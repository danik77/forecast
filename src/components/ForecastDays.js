import { useState, useEffect } from 'react';
import { setDate, formatDegree } from './functions';

const ForecastDays = (props) => {

  const imageUrl = `https://openweathermap.org/img/wn/${props.item.weather[0].icon}@2x.png`;

  return (
    <>
      { props.item &&
    	 <div className='day'>
    	    <div className='day__date'>
    	      <h3>{setDate(props.item.dt).dayName}</h3>
    	      <div>{setDate(props.item.dt).dayDate}</div>
    	    </div>
    	    <div className='day__image'>
    	      <img src={imageUrl} />
    	    </div>
    	    <div className='day__info'>
    	      <div className="temp">{formatDegree(props.item.temp.max)}</div>
    	    </div>
    	 </div>
      }
  	</>
  );
}

export default ForecastDays;