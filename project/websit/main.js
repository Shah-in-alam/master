// a: AS1GETqkpiSMKx4J9qBMZ3la2pBbw8MY
const weatherForm=document.querySelector(".weatherForm");
const cityInput=document.querySelector(".cityInput");
const card=document.querySelector(".card");
const apiKey="234c6a488c638e5de950dc79ca4ab365";

weatherForm.addEventListener("submit",async  event=> {
    event.preventDefault();
    var city =cityInput.value;

    if(city){
        try{
            const weatherData= await getweatherdata(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("please enter a city");
    }
});

async function getweatherdata(city){
    const apiUrl= 'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={apiKey}';
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error(`Weather data not available for ${city}`);
    }

    return response.json();
}

function displayWeatherInfo(data){
    const {name:city, main:{temp, humidity},weather:[{descricption,id}]} = data;
    card.textContent="";
    card.style.display="flex";
    const citydisplay=document.createElement("h1");
    const tempdisplay=document.createElement("p");
    const humiditydispaly=document.createElement("p");
    const descdiplay=document.createElement("p");
    const weatherdis=document.createElement("p");

    citydisplay.textContent= city;
    tempdisplay.textContent= '${(temp-273.15).toFixed(1)}°C';
    humiditydispaly.textContent="Humadity: ${humidity}";

    citydisplay.classList.add("cityDisplay");
    tempdisplay.classList.add("humi")
     card.appendChild(citydisplay);
     card.appendChild(tempdisplay);
     card.appendChild(humiditydispaly);
     card.appendChild(descdiplay);
     card.appendChild(weatherdis);
}
    
    
    function getWeatherEmoji(weatherId){
    console.log(data);
    }

function displayError(message){
    const errorDisplay=document.createElement("P");
    errorDisplay.textContent =message;
    errorDisplay.classList.add("errorCity");

    card.textContent ="";
    card.style.display="flex";
    card.appendChild(errorDisplay);
}