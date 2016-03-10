//This function displays the catfood info from the parsed json file
function buildElementsDogFood(sentDogFoodObject) {

  var mainDiv = document.getElementById("main-holder");

// This first loop, loops through each of the Dog food brands, builds a div for the whole brand
//  and also builds a div to hold the food type
  for (var i = 0; i < sentDogFoodObject.dog_brands.length; i++) {
    var brandElement = document.createElement('div');
    brandElement.classList.add("brand");
    brandElement.innerHTML = `<h3>Dog Food Brand</h3>`;
    brandElement.innerHTML += `<h3>${sentDogFoodObject.dog_brands[i].name}</h3>`;
    mainDiv.appendChild(brandElement);
    
// Builds the div to hold the food type
    var typeElement = document.createElement('div');
    typeElement.classList.add("type");
    typeElement.innerHTML = `<h3>Food Type</h3>`;
    brandElement.appendChild(typeElement);

// Loops through the food types
    for (var x = 0; x < sentDogFoodObject.dog_brands[i].types.length; x++) {
      typeElement.innerHTML += `<p class="info-head">${sentDogFoodObject.dog_brands[i].types[x].type}</p>`;

// Loops through and adds the food volume and price to the type div
      for (var y = 0; y < sentDogFoodObject.dog_brands[i].types[x].volumes.length; y++) {
        typeElement.innerHTML += `<p class="info">${sentDogFoodObject.dog_brands[i].types[x].volumes[y].name}  $${sentDogFoodObject.dog_brands[i].types[x].volumes[y].price}`;
      };
    };
  };
}

//This function displays the catfood info from the parsed json file
function buildElementsCatFood(sentCatFoodObject) {

  var mainDiv = document.getElementById("cat-holder");

// This first loop, loops through each of the Cat food brands, builds a div for the whole brand
//  and also builds a div to hold the breeds
  for (var i = 0; i < sentCatFoodObject.cat_brands.length; i++) {
    var brandElement = document.createElement('div');
    brandElement.classList.add("brand");
    mainDiv.appendChild(brandElement);
    brandElement.innerHTML = `<h3>Cat Food Brand</h3>`;
    brandElement.innerHTML += `<h3>${sentCatFoodObject.cat_brands[i].name}</h3>`;

// Builds the div to hold the breeds
    var breedElement = document.createElement('div');
    breedElement.classList.add("breeds");
    breedElement.innerHTML = "<h3>Cat Breeds</h3>";
    brandElement.appendChild(breedElement);

// Loops through all the breeds and inserts them into the Breed div 
    for (var a = 0; a < sentCatFoodObject.cat_brands[i].Breeds.length; a++) {
      breedElement.innerHTML += `<p class="info">${sentCatFoodObject.cat_brands[i].Breeds[a]}</p>`;
    };

// Builds a div to hold the food types
    var typeElement = document.createElement('div');
    typeElement.classList.add("type");
    typeElement.innerHTML = `<h3>Food Type</h3>`;
    brandElement.appendChild(typeElement);

// Loops through the food types
    for (var x = 0; x < sentCatFoodObject.cat_brands[i].types.length; x++) {
      typeElement.innerHTML += `<p class="info-head">${sentCatFoodObject.cat_brands[i].types[x].type}</p>`;

// Loops through and adds the food volume and price to the type div
      for (var y = 0; y < sentCatFoodObject.cat_brands[i].types[x].volumes.length; y++) {
        typeElement.innerHTML += `<p class="info">${sentCatFoodObject.cat_brands[i].types[x].volumes[y].name}  $${sentCatFoodObject.cat_brands[i].types[x].volumes[y].price}</p>`;
      };
    };
  };
}
