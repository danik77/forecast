export function formatDegree(deg){
  let sign = '';
  if(deg < 0) sign = '-';
  return sign + Math.round(deg) + ' °C'
}

export function setDate(timestamp){
  const date = new Date(timestamp * 1000);

  return {
    dayName: date.toLocaleString('en-us', {weekday: 'short'}),
    dayDate: date.getDate() + ' ' +  date.toLocaleString('en-us', { month: 'long' })
  }
}

export function formatWind(wind){
  return Math.round(wind) + ' m/s';
}

export function  formatHumidity(humidity){
    return humidity + ' %';
}