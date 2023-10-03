


//  city name
var city = prompt("please enter your city name")
if (city == "karachi") {
    alert('Welcome to the city of lights');
}
else if (city !== "karachi") {
    alert("Enter City Namen in Lower Case")
}

//  gander

var gender = prompt("Enter your Gender please")
if (gender == "male") {
    alert('Good Morning Sir');
}
else if (gender == "female") {
    alert("Good Morning Ma’am")
}
else (alert("Enter gender  in Lower Case"))

//  refill fuel alert

var fuel = prompt("Enter Fuel litres in like 1 litre or 0.50 litre")
if (fuel < "0.50") {
    alert("Please refill the fuel in your car")
}
else if (fuel > "0.50") {
    alert("Good Fuel")
}

else (alert("Enter in numeric"))


// traffic signal

var traffic_signal = prompt("Enter Color red ,yellow Or green")
if (traffic_signal == "red") {
    alert('Must Stop')
}
else if (traffic_signal == "yellow") {

    alert(' Ready to move ')
}
else if (traffic_signal == "green") {

    alert('Move now')
}
else (alert("Enter Traffic Light Color In Lower Case"))







