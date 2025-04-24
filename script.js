const apiKey = '6ab6e774be774358e326033ba302fcd4';
const city = 'Toronto';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric';

const httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function () {

    if(httpRequest.readyState === XMLHttpRequest.DONE)
    {
        console.log(httpRequest.responseText);
        
        let data = JSON.parse(httpRequest.responseText);

        console.log(data);

        let temperature = data.main.temp;
        let conditions = data.weather[0].main;
        let icon = data.weather[0].icon;

        console.log(temperature);

        let weather = document.getElementById("weather");

        weather.innerHTML = 'Temp: ' + temperature + '&deg;C' + 
            '<br>' + 
            'Conditions: ' + conditions + 
            '<br>' + 
            '<img src="https://openweathermap.org/img/wn/' + icon + '@2x.png">';
    }

}

httpRequest.open("GET", url, true);
httpRequest.send();
