var dogfoodObject;

// Parses the pet food from the received JSON file
function parseDogfood() {
  dogfoodObject = JSON.parse(this.responseText);
    buildElementsFirstJson(dogfoodObject);
}

//Tells you if an error happens
function anError(xhrFailureEvent) {
  console.log("An error occured while transferring the data");
}

//Starts the XHR for the dogfood
function XHRDogfood() {

  var requestDogfood = new XMLHttpRequest();
  requestDogfood.addEventListener("load", parseDogfood);
  requestDogfood.addEventListener("error", anError);
  requestDogfood.open("GET", "dogfood.json");
  requestDogfood.send();

}

XHRDogfood();
