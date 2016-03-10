var dogfoodObject;
var catfoodObject;

// Parses the pet food from the received JSON file
function parseDogfood() {
  dogfoodObject = JSON.parse(this.responseText);
  buildElementsDogFood(dogfoodObject);
}

function parseCatfood() {
  catfoodObject = JSON.parse(this.responseText);
  buildElementsCatFood(catfoodObject);
}

//Starts the XHR for the dogfood
function XHRDogfood() {
  var requestDogfood = new XMLHttpRequest();
  requestDogfood.addEventListener("load", parseDogfood);
  requestDogfood.open("GET", "dogfood.json");
  requestDogfood.send();
}

//Starts the XHR for the catfood
function XHRCatfood() {
  var requestCatfood = new XMLHttpRequest();
  requestCatfood.addEventListener("load", parseCatfood);
  requestCatfood.open("GET", "catfood.json");
  requestCatfood.send();
}

XHRDogfood();
XHRCatfood();
