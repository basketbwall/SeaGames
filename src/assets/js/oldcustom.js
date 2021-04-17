function myTest() {
  alert("About us component was clicked!");
}

window.onload = function () {
  var ratingsArray = document.getElementsByClassName("rating"); //get all the ratings that are in num form
  for (let i = 0; i < ratingsArray.length; i++) { //loop through each to modify them
    var numStars = ratingsArray[i].innerHTML; //select the rating number in the html
    ratingsArray[i].innerHTML = "";
    var newNode = document.createElement("p");
    for (x = 0; x < numStars; x++) {
      var imgStar = document.createElement("img");
      imgStar.classList.add("imgStar");
      imgStar.src = "assets/seashell.png";
      newNode.appendChild(imgStar);
    }
    for (y = 0; y < 5 - numStars; y++) {
      var imgStar = document.createElement("img");
      imgStar.classList.add("imgStar");
      imgStar.src = "assets/seashellGray.png";
      newNode.appendChild(imgStar);
    }
    ratingsArray[i].appendChild(newNode);
  }
}
