const input=document.getElementById('inputCity');
const city=document.getElementById('city');
const country=document.getElementById('country');
const temp=document.getElementById('temp');
const weather=document.getElementById('weather');

const api={
    key: "4c88a022f6b7bdcdbaa6ce86c6415bde",
    base: "https://api.openweathermap.org/data/2.5/weather?"
}

function putData(object){
    city.textContent=object.name; 
    country.textContent=" | "+object.sys.country;
    temp.textContent=(object.main.temp-273).toFixed(2)+"C";
    weather.textContent=object.weather[0].description;
}
async function findAndShow(city){
    let lat_lon=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api.key}`)
    const l_object=await lat_lon.json();
    let response = await fetch(`${api.base}lat=${l_object[0].lat}&lon=${l_object[0].lon}&appid=${api.key}`);
    const data=await response.json();
    // console.dir(data);
    putData(data);
}


input.addEventListener('keypress',fc);
function fc(event){
    if(event.which==13){
        findAndShow(input.value);
    }
}




// const api = {
//     key: "4c88a022f6b7bdcdbaa6ce86c6415bde",
//     base: "https://api.openweathermap.org/data/2.5/"
//   }
  
  
//   function getResults (query) {
//     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//       .then(weather => {
//         return weather.json();
//       }).then(displayResults);
//   }
  
//   function displayResults (weather) {
//     console.log(weather);
//   }

// getResults("london");