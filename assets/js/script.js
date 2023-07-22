
var citySearch = $("#citySearch")
var searchName = $("#searchName")
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


function weatherSearch(event){
event.preventDefault();

}


searchBtn.on('click', weatherSearch)