
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
var dayOneDate = $("dayOneDate")
var dayOneImg = $("dayOneImg")
var dayOneTemp = $("dayOneTemp")
var dayOneWind = $("dayOneWind")
var dayOneHum = $("dayOneHum")

var dayTwoForecast = $("#dayTwoForecast")
var dayTwoDate = $("dayTwoDate")
var dayTwoImg = $("dayTwoImg")
var dayTwoTemp = $("dayTwoTemp")
var dayTwoWind = $("dayTwoWind")
var dayTwoHum = $("dayTwoHum")

var dayThreeForecast = $("#dayThreeForecast")
var dayThreeDate = $("dayThreeDate")
var dayThreeImg = $("dayThreeImg")
var dayThreeTemp = $("dayThreeTemp")
var dayThreeWind = $("dayThreeWind")
var dayThreeHum = $("dayThreeHum")

var dayFourForecast = $("#dayFourForecast")
var dayFourDate = $("dayFourDate")
var dayFourImg = $("dayFourImg")
var dayFourTemp = $("dayFourTemp")
var dayFourWind = $("dayFourWind")
var dayFourHum = $("dayFourHum")

var dayFiveForecast = $("#dayFiveForecast")
var dayFiveDate = $("dayFiveDate")
var dayFiveImg = $("dayFiveImg")
var dayFiveTemp = $("dayFiveTemp")
var dayFiveWind = $("dayFiveWind")
var dayFiveHum = $("dayFivehum")


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
        console.log(locLat) 
        console.log(locLon)
       
        
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
        console.log(fiveCast)
       
       
        fetch(fiveCast)
            .then(function(response){
                console.log(response)
                return response.json()
            })
            .then(function(fiveRes){


            for(var i = dayInt; i < daySix; i++){   
              var forecastDate = year + "-" + month + "-" + i + " 12:00:00"   

                for(var i = 0; i < fiveRes.list.length; i++){
                    if(fiveRes.list[i].dt_txt === forecastDate){
                        console.log(fiveRes.list[i].main)
                    }
                    console.log(forecastDate)
                }
            }})
       
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

var year = dayjs().format("YYYY")
var month = dayjs().format("MM")
var day = dayjs().format("DD")
var dayInt= parseInt(day) + 1
var daySix =  parseInt(day) + 6


    
  





searchBtn.on('submit', weatherSearch)



