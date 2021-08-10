import { formatDegree } from './functions';

const ForecastCurrent = (props) => {

	return (
		<div className="current">
        <div className="daily__current">
          <div className="temp"><h3>{formatDegree(props.current.temp)}</h3></div>
          <div className="feels">feels like {formatDegree(props.current.feels_like)}</div>
        </div>
        <h1 className='current__city'>{props.city && props.city[0].name}</h1>
    </div>
	);
}

export default ForecastCurrent;