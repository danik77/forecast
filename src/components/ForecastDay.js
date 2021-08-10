import { setDate, formatDegree, formatHumidity, formatWind } from './functions';

const ForecastDay = (props) => {

  const imageUrl = `https://openweathermap.org/img/wn/${props.item.weather[0].icon}@4x.png`

	return (
		<div className="daily" key={props.index}>
      <div className='daily__info'>
        <div className='daily__date'>
          <h2>{setDate(props.item.dt).dayName}</h2>
          <p>{setDate(props.item.dt).dayDate}</p>
        </div>
        <img className='daily__image' src={imageUrl} />
        <div className='daily__data'>
          <div className="daily__cloud"><p>Cloudness: {props.item.clouds}</p></div>
          <div className="daily__wind"><p>Wind speed: {formatWind(props.item.wind_speed)}</p></div>
          <div className="daily__humidity"> <p>Humidity: {formatHumidity(props.item.humidity)}</p></div>
        </div>
      </div>
      <div className="daily__temp">
        <div className="daily__mon">
          <div className='caption'><h3>Morning</h3></div>
          <div className="temp">{formatDegree(props.item.temp.morn)}</div>
          <div className="feels">feels like {formatDegree(props.item.feels_like.morn)}</div>
        </div>
        <div className="daily__day">
        <div className='caption'><h3>Day</h3></div>
          <div className="temp">{formatDegree(props.item.temp.day)}</div>
          <div className="feels">feels like {formatDegree(props.item.feels_like.day)}</div>
        </div>
        <div className="daily__eve">
        <div className='caption'><h3>Evening</h3></div>
          <div className="temp">{formatDegree(props.item.temp.eve)}</div>
          <div className="feels">feels like {formatDegree(props.item.feels_like.eve)}</div>
        </div>
        <div className="daily__night">
        <div className='caption'><h3>Night</h3></div>
          <div className="temp">{formatDegree(props.item.temp.night)}</div>
          <div className="feels">feels like {formatDegree(props.item.feels_like.night)}</div>
        </div>
      </div>
    </div>
	);
}

export default ForecastDay;