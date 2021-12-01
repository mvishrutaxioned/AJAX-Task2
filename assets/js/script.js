$(document).ready(() => {

    // variables
    var inputVal;
    var today = new Date();
    var d = String(today.getDate()).padStart(2, '0');
    var m = String(today.getMonth() + 1).padStart(2, '0');

    // months array
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // fetch results function
    async function fetchResults(i) {
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${i}&appid=4b9ffb45e1734ffac3f5a513794a0f0d`
        var data = await fetch(url).then(res => res.json()).catch(e => e)
        displayWeather(data)
    }

    // get image function
    function getImage(img) {
        if (img == 'Rain') return './assets/Images/rainy.png'
        if (img == 'Clouds') return './assets/Images/cloudy.png'
        if (img == 'Sunny') return './assets/Images/sunny.png'
        if (img == 'Clear') return './assets/Images/clear.png'
        if (img == 'Mist') return './assets/Images/mist.png'
        if (img == "Smoke") return './assets/Images/smoke.png'
        if (img == "drizzle") return './assets/Images/drizzle.png'
    }

    // get body color function
    function bodyColor(col) {
        if (col == 'Rain') return '#fff'
        if (col == 'Clouds') return '#b6b6b4'
        if (col == 'Sunny') return '#f5e216'
        if (col == 'Clear') return '#82caff'
        if (col == 'Mist') return '#646d7e'
        if (col == "Smoke") return '#726e6d'
        if (col == "Smoke") return '#fa8072'
    }

    // on form submit function
    $('form').submit((e) => {
        e.preventDefault();

        $('main .wrapper').fadeOut('fast')
        inputVal = $('form input').val();
        fetchResults(inputVal);
    })
})