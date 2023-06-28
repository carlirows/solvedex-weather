export const getCurrentDayAndTime = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    
    const day = daysOfWeek[now.getDay()];
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    
    return { day, time };
  };

  export   const searchWeather = async() => {
    const resp = await fetch(`${api.base}weather?q=${inputValue}&units=${units}&APPID=${api.key}`)
    const data = await resp.json()
    const { day, time } = getCurrentDayAndTime();
    console.log(data)
    const currentWeather = {
      city: data.name,
      temp: data.main.temp,
      feeling: data.main.feels_like,
      maxTemp: data.main.temp_max,
      minTemp: data.main.temp_min,
      wind: data.wind.speed,
      [day]: time,
    }
    setWeather(currentWeather)
  }