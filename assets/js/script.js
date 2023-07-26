
var apiKey = "378bdbcbb142e494e5c5c4d984a9387a"
var apiKeyFiveCast = "584d0571c4b8375819703f678314b9a7"

var citySearch = $("#citySearch")


var searchBtn = $("#searchBtn")
var searchedCities = $("#searchedCities")

var selectedCity = $("#selectedCity")
var cityName = $("#cityName")
var temp = $("#temp")
var windSpeed = $("#windSpeed")
var humidity = $("#humidity")

var fiveDay = $("#fiveDay")

var dayOneForecast = $("#dayOneForecast")
var dayOneDate = $("#dayOneDate")
var dayOneImg = $("#dayOneImg")
var dayOneTemp = $("#dayOneTemp")
var dayOneWind = $("#dayOneWind")
var dayOneHum = $("#dayOneHum")

var dayTwoForecast = $("#dayTwoForecast")
var dayTwoDate = $("#dayTwoDate")
var dayTwoImg = $("#dayTwoImg")
var dayTwoTemp = $("#dayTwoTemp")
var dayTwoWind = $("#dayTwoWind")
var dayTwoHum = $("#dayTwoHum")

var dayThreeForecast = $("#dayThreeForecast")
var dayThreeDate = $("#dayThreeDate")
var dayThreeImg = $("#dayThreeImg")
var dayThreeTemp = $("#dayThreeTemp")
var dayThreeWind = $("#dayThreeWind")
var dayThreeHum = $("#dayThreeHum")

var dayFourForecast = $("#dayFourForecast")
var dayFourDate = $("#dayFourDate")
var dayFourImg = $("#dayFourImg")
var dayFourTemp = $("#dayFourTemp")
var dayFourWind = $("#dayFourWind")
var dayFourHum = $("#dayFourHum")

var dayFiveForecast = $("#dayFiveForecast")
var dayFiveDate = $("#dayFiveDate")
var dayFiveImg = $("#dayFiveImg")
var dayFiveTemp = $("#dayFiveTemp")
var dayFiveWind = $("#dayFiveWind")
var dayFiveHum = $("#dayFiveHum")

var forecastArray = []

function apiSearch(searchNameVal){
var locUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchNameVal + "&appid=" + apiKey + "&units=imperial"

fetch(locUrl)
    .then(function(response){
        if (!response.ok){
            console.error("something went wrong")
            return
        }
        
    return response.json();
    })
    .then(function(locRes){
        
        var locLon = locRes.coord.lon
        var locLat = locRes.coord.lat
        
       
        
        if(!locRes){
            cityName[0].innerHTML = "";
            temp[0].innerHTML = "";
            windSpeed[0].innerHTML = '';
            humidity[0].innerHTML = '';
            cityName[0].textContent = 'Please enter a valid city'
            
        }else{
            cityName[0].textContent = locRes.name
            temp[0].textContent = locRes.main.temp
            windSpeed[0].textContent = locRes.wind.speed
            humidity[0].textContent = locRes.main.humidity
        }
        
        apiFiveDay(locLat, locLon)
    }) 
  
}

function apiFiveDay(locLat, locLon){
    var fiveCast = "https://api.openweathermap.org/data/2.5/forecast?lat=" + locLat + "&lon=" + locLon + "&appid=" + apiKeyFiveCast + "&units=imperial"
        
       
       
        fetch(fiveCast)
            .then(function(response){
                    return response.json()                              
            })
            .then(function(fiveRes){
                console.log(fiveRes)
                forecastArray = []
                for(var i = 0; i < fiveRes.list.length; i = i + 8){
                    forecastArray.push(fiveRes.list[i])
                }

                console.log(forecastArray)
                dayOneDate[0].childNodes[0].data = forecastArray[0].dt_txt.split(" ").splice(0, 1)
                dayOneImg[0].src = "https://openweathermap.org/img/wn/"+ forecastArray[0].weather[0].icon + "@2x.png"
                dayOneTemp[0].childNodes[0].data = "Temp: " + forecastArray[0].main.temp
                dayOneWind[0].childNodes[0].data = "Wind: " + forecastArray[0].wind.speed
                dayOneHum[0].childNodes[0].data = "Humidity: " + forecastArray[0].main.humidity + "%"

                dayTwoDate[0].childNodes[0].data = forecastArray[1].dt_txt.split(" ").splice(0, 1)
                dayTwoImg[0].src = "https://openweathermap.org/img/wn/"+ forecastArray[1].weather[0].icon + "@2x.png"
                dayTwoTemp[0].childNodes[0].data = "Temp: " +  forecastArray[1].main.temp
                dayTwoWind[0].childNodes[0].data =  "Wind: " +   forecastArray[1].wind.speed
                dayTwoHum[0].childNodes[0].data = "Humidity: " +  forecastArray[1].main.humidity + "%"

                dayThreeDate[0].childNodes[0].data = forecastArray[2].dt_txt.split(" ").splice(0, 1)
                dayThreeImg[0].src = "https://openweathermap.org/img/wn/"+ forecastArray[2].weather[0].icon + "@2x.png"
                dayThreeTemp[0].childNodes[0].data = "Temp: " +  forecastArray[2].main.temp
                dayThreeWind[0].childNodes[0].data =  "Wind: " +   forecastArray[2].wind.speed
                dayThreeHum[0].childNodes[0].data = "Humidity: " +  forecastArray[2].main.humidity + "%"

                dayFourDate[0].childNodes[0].data = forecastArray[3].dt_txt.split(" ").splice(0, 1)
                dayFourImg[0].src = "https://openweathermap.org/img/wn/"+ forecastArray[3].weather[0].icon + "@2x.png"
                dayFourTemp[0].childNodes[0].data = "Temp: " +  forecastArray[3].main.temp
                dayFourWind[0].childNodes[0].data =  "Wind: " +   forecastArray[3].wind.speed
                dayFourHum[0].childNodes[0].data = "Humidity: " +  forecastArray[3].main.humidity + "%"

                dayFiveDate[0].childNodes[0].data = forecastArray[4].dt_txt.split(" ").splice(0, 1)
                dayFiveImg[0].src = "https://openweathermap.org/img/wn/"+ forecastArray[4].weather[0].icon + "@2x.png"
                dayFiveTemp[0].childNodes[0].data = "Temp: " +  forecastArray[4].main.temp
                dayFiveWind[0].childNodes[0].data =  "Wind: " +   forecastArray[4].wind.speed
                dayFiveHum[0].childNodes[0].data = "Humidity: " +  forecastArray[4].main.humidity + "%"

            })
            
       
}


function weatherSearch(event){
event.preventDefault();

var searchNameVal = $("#searchName")[0].value;

if(!searchNameVal){
    console.error('input needed');
    return;
}

apiSearch(searchNameVal)
}


    
function saveSearch(){
    
}




searchBtn.on('submit', weatherSearch)



