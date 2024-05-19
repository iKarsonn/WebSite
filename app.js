var mainimg = document.querySelector('img')
var images=['images/karaca_magarasi.webp', 'images/artabel_golleri.jpg', 'images/cam_teras.jpg']
var num = 0;

function forward() {
num++
if(num >=images.length){
    num = 0;
    maining.src=images[num]
}else{
maining.src=images[num]
}
}

function back() {
    num--
    if(num<0){
num=images.length-1
maining.src=images[num]
}else{
    maining.src=images[num]
}
}




// app.js

document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR_API_KEY_HERE';
    const city = 'Istanbul'; // Şehir ismini burada belirleyebilirsiniz
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById('weather');
            const weatherData = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            weatherDiv.innerHTML = weatherData;
        })
        .catch(error => console.error('Error fetching data:', error));
});
