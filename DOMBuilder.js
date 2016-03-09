
function buildElementsFirstJson(sentDogFoodObject) {

  var mainDiv = document.getElementById("main-holder");
  

  for (var i = 0; i < sentDogFoodObject.dog_brands.length; i++) {

    var brandElement = document.createElement('div');
    brandElement.classList.add("brand");
    brandElement.innerHTML = `<h3>${sentDogFoodObject.dog_brands[i].name}</h3>`;
    mainDiv.appendChild(brandElement);
    
    for (var x = 0; x < sentDogFoodObject.dog_brands[i].types.length; x++) {
      var typeElement = document.createElement('div');
      typeElement.classList.add("type");
      typeElement.innerHTML = `<h4>${sentDogFoodObject.dog_brands[i].types[x].type}</h4>`;
      brandElement.appendChild(typeElement);

      for (var y = 0; y < sentDogFoodObject.dog_brands[i].types[x].volumes.length; y++) {
        var volumeElement = document.createElement('div');
        volumeElement.classList.add("volume");
        volumeElement.textContent = sentDogFoodObject.dog_brands[i].types[x].volumes[y].name + "  $";
        volumeElement.textContent += sentDogFoodObject.dog_brands[i].types[x].volumes[y].price;
        typeElement.appendChild(volumeElement);
      };
    };
  };
}
