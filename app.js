let celcius = document.querySelector(".celcius");
let fahrenheit= document.querySelector(".fahr");
let kelvin= document.querySelector(".kelvin");




celcius.addEventListener("keyup",ctofandk);
fahrenheit.addEventListener("keyup",ftocandk);
kelvin.addEventListener("keyup",ktocandf);

function ctofandk(e){
    if (celcius.value === "") {
        fahrenheit.value="";
        kelvin.value="";
        return;
    }
    let c = parseInt(celcius.value);
    fahrenheit.value=  (9*c)/5 + 32;
    kelvin.value= c + 273;
}

function ftocandk(e){
    if (fahrenheit.value === "") {
        celcius.value="";
        kelvin.value="";
        return;
    }
    let f = parseInt(fahrenheit.value);
    celcius.value=  5*(f-32) / 9;
    kelvin.value= 5*(f-32) / 9 + 273;
}

function ktocandf(e){
    if (kelvin.value === ""){
        celcius.value="";
        fahrenheit.value="";
        return;
    }
    let k = parseInt(kelvin.value);
    celcius.value=  k- 273;
    let tempc= k- 273;
    fahrenheit.value= (9*tempc)/5 + 32;   
}

// function to update background image

function updateBackgroundImage() {
    const celsiusValue = parseFloat(document.querySelector('.celcius').value);
    
    if (isNaN(celsiusValue)) {
        return; // Do nothing if the input is not a valid number
    }
    
    let backgroundImage = '';
    
    if (celsiusValue <= 0) {
        backgroundImage = 'url("snowfall.jpeg")'; 
    } else if (celsiusValue >= 40) {
        backgroundImage = 'url("hot-desert.jpeg")';
    } else if (celsiusValue >= 20) {
        backgroundImage = 'url("sunny-day.jpeg")';
    } else {
        backgroundImage = 'url("cool-weather.jpeg")'; // runs when c is greater than 0 and less than 20
    }
    
    // Applying  the background image to the body
    
    document.body.style.backgroundImage = backgroundImage;
    document.body.style.backgroundSize = 'cover'; // Ensure the image covers the entire body
    document.body.style.backgroundPosition = 'center'; // Center the background image
}

// Add event listener to the Celsius input
celcius.addEventListener('input', updateBackgroundImage);
