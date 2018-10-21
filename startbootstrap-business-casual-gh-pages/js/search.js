var input = document.querySelector(".restaurantInput");
var restaurants = ["McDonalds", "Thaiger Room", "Pagliacci"];
var restaurantName = document.querySelector(".restaurantName");
var address = document.querySelector(".address");
var capacity = document.querySelector(".capacity");
var foodName = document.querySelector(".foodName");
var foodDescription = document.querySelector(".foodDescription");
var foodPrice = document.querySelector(".foodPrice");

function getRestaurant() {
    axios.get("http://localhost:52350/restaurant")
    .then(function (response) {
        var index = restaurants.indexOf(String(input.value));
        restaurantName.innerHTML = response.data.restaurants[index].DisplayName;
        a = response.data.restaurants[index].Address;
        address.innerHTML = "Address: " + a;
        c = response.data.restaurants[index].Capacity;
        capacity.innerHTML = "Capacity: " + c;
        var food = response.data.restaurants[index].FoodItems; 
        var str = "";
        for (let i = 0; i < food.length; i++) {
            str += '<tr>';
            foodName = food[i].Name;
            foodDescription = food[i].Description;
            foodPrice = food[i].Price;
            str += '<td>' + foodName + "</td><td>" + foodDescription + "</td><td>" + foodPrice + '</td>';
            str += '</tr>';
        }
        document.getElementById("food").innerHTML = str;
        console.log(response);
    })
    .catch(function (error) {
        restaurantName.innerHTML = "(An error has occurred.)";
    })
}

var button = document.querySelector(".restaurant-button");
button.addEventListener("click", getRestaurant);
