const weather_api_refer = "http://api.openweathermap.org/data/2.5/weather?";
const weather_api_key = "b28165031681803629954563a2422e1f";

function zipurl(zip) {
return `${weather_api_refer}q=${zip}&appid=${weather_api_key}`;
}

function fetchForecast(zip){
    return fetch(zipurl(zip))
      .then(response=>response.json())
      .then(responses => {
          return {
              main: responses.weather[0].main,
              description: responses.weather[0].description,
              temp: responses.main.temp
          };
      })
      .catch(error => {
          console.error(error);
      });
}

export default {fetchForecast : fetchForecast};