const weather_api_refer = "http://api.openweathermap.org/data/2.5/weather?";

// const weather_api_refer = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
const weather_api_key = "b06f7aeeae13ab893ca5409afa2ca384";
import CrashTester from 'react-native-crash-tester';

function zipurl(zip) {
const url = `${weather_api_refer}q=${zip}&appid=${weather_api_key}`;
console.log("url",url);
return url;
}

function fetchForecast(zip){
    return fetch(zipurl(zip))
      .then(response=>response.json())
      .then(responses => {

        try {
          
          console.log(`response : ${JSON.stringify(responses)}`)
          return {
            main: responses.weather[0].main,
            description: responses.weather[0].description,
            temp: responses.main.temp
          };
        } catch (error) {
          console.error(`crashing the app - ${error}`)
          CrashTester.nativeCrash('deliberate crash!');
        }
      })
      .catch(error => {
          console.error(error);
      });
}

export default {fetchForecast : fetchForecast};