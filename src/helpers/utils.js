export const getCurrentDayAndTime = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    
    const day = daysOfWeek[now.getDay()];
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    
    return { day, time };
  };
