class Game {
  constructor(image, title, description, rating, price, tags, devices, reviews) {
    this.image = image;
    this.title = title;
    this.description = description;
    if (rating == -1) {
      this.rating = [];
    } else {
      this.rating = rating;
    }
    this.price = price;
    this.tags = tags;
    this.devices = devices;
    this.reviews = reviews;
  }

  getImage() {
    return this.image;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }

  getDevices() {
    return this.devices;
  }

  getRating() {
    return this.rating;
  }

  getTags() {
    return this.tags;
  }

  getReviews() {
    return this.reviews.length;
  }
}

window.onload = function () {
  //initialize games array


  var gamesArray = new Array();
  var game1 = new Game("https://www.pcinvasion.com/wp-content/uploads/2020/05/Sega-confirms-existence-of-new-Sonic-game-reveal-delayed-1.jpg", "Sonic", "Sonic gamez", [1], 5.00, "FPS", "PC", ["Worst Game Ever"]);
  var game2 = new Game("assets/league.webp", "League of Legends", "league is fun", [5], 0, ["MOBA", "FPS"], ["PC", "MAC"], ["Best Game Ever"]);

  gamesArray.push(game1);
  gamesArray.push(game2);


  if (JSON.parse(localStorage.getItem("games")) != null && JSON.parse(localStorage.getItem("games")).length > 0) {
    gamesArray = JSON.parse(localStorage.getItem("games"));
  } else {
    localStorage.setItem("games", JSON.stringify(gamesArray));

  }
  var reviewsDiv = document.getElementById("reviewsHere");

  for (var i = 0; i < gamesArray.length; i++) {
    var currentGameReviews = gamesArray[i].reviews; //go into each game, grab their list of reviews
    for (var x = 0; x < currentGameReviews.length; x++) { //loop through that list for each one
      var currentReview = currentGameReviews[x];
      var newP = document.createElement("p");
      newP.innerHTML = currentReview;
      reviewsDiv.append(newP);
    }
  }
  //create the thing using javascript not component-way
  for (var i = 0; i < gamesArray.length; i++) {
    var currentGame = gamesArray[i];
    var gameDiv = document.createElement("div");
    gameDiv.classList.add("gameDisplay");
    var gameTitle = document.createElement("h1");
    gameDiv.append(gameTitle);
    gameTitle.innerText = currentGame.title;
    var gamePicture = document.createElement("img");
    gamePicture.setAttribute("id", "gamePic")
    gamePicture.src = currentGame.image;
    gameDiv.append(gamePicture);

    var gameDescription = document.createElement("p");
    gameDescription.innerText = currentGame.description;
    gameDiv.append(gameDescription);

    var gameTags = document.createElement("p");
    gameTags.innerText = currentGame.tags;
    gameDiv.append(gameTags);

    var gameDevices = document.createElement("p");
    gameDevices.innerText = currentGame.devices;
    gameDiv.append(gameDevices);

    var gameRating = document.createElement("p");
    gameRating.classList.add("rating");
    //get rating by.. looping through rating array
    var totalRating = 0;
    for (var x = 0; x < currentGame.rating.length; x++) {
      totalRating += currentGame.rating[x];
    }
    if (currentGame.rating.length > 0) {
      gameRating.innerText = totalRating / (currentGame.rating.length) + " ( " + (currentGame.rating.length) + " )";

    } else {
      gameRating.innerText = 0 + " (No User Reviews)";

    }
    gameDiv.append(gameRating);

    var catalog = document.getElementById("catalog");
    catalog.append(gameDiv);
  }

  //toggle add game form here
  var toggleButton = document.getElementById("addGameToggle");
  toggleButton.onclick = function () {
    var form = document.getElementById("addGameForm");
    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  };

  /*
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
  }*/
  
  var addButton = document.getElementById("addGameButton");
  addButton.addEventListener("click", addGame);

  function addGame() {
    var gameTitle = document.getElementById("game_title").value;
    var gameImage = document.getElementById("game_src").value;
    var gameDevices = new Array();
    if (document.getElementById("device1").checked) {
      gameDevices.push("PC");
    }  if (document.getElementById("device2").checked) {
      gameDevices.push("Mobile");
    }  if (document.getElementById("device3").checked) {
      gameDevices.push("Switch");
    }  if (document.getElementById("device4").checked) {
      gameDevices.push("Xbox");
    }  if (document.getElementById("device5").checked) {
      gameDevices.push("Playstation");
    }
    var gameTags = new Array();
    if (document.getElementById("tag1").checked) {
      gameTags.push("Co-op");
    }  if (document.getElementById("tag2").checked) {
      gameTags.push("Competitive Multiplayer");
    }  if (document.getElementById("tag3").checked) {
      gameTags.push("Singleplayer");
    }  if (document.getElementById("tag4").checked) {
      gameTags.push("Action");
    }  if (document.getElementById("tag5").checked) {
      gameTags.push("Adventure");
    }  if (document.getElementById("tag6").checked) {
      gameTags.push("Platformer");
    }  if (document.getElementById("tag7").checked) {
      gameTags.push("Horror");
    }  if (document.getElementById("tag8").checked) {
      gameTags.push("Visual Novel");
    }  if (document.getElementById("tag9").checked) {
      gameTags.push("Puzzle/Strategy");
    }  if (document.getElementById("tag10").checked) {
      gameTags.push("Sports");
    }  if (document.getElementById("tag11").checked) {
      gameTags.push("RPG");
    }
    var gamePrice = document.getElementById("game_price").value;
    var gameDescription = document.getElementById("game_description").value;
    //looop time
    var gameRating = [parseInt(document.getElementById("game_rating").value)];
    var gameReview = [document.getElementById("game_review").value]
    gamesArray.push(new Game(gameImage, gameTitle, gameDescription, gameRating, gamePrice, gameTags, gameDevices, gameReview));

    localStorage.setItem("games", JSON.stringify(gamesArray));
  }



}
