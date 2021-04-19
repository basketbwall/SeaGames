class Game {
  constructor(image, title, description, rating, price, tags, devices, reviews, year) {
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
    this.year = year;
  }
  getYear() {
    return this.year;
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
class Points {
  constructor(index, points) {
    this.index = index;
    this.points = points;
  }

  toString() {
    return "Game Index: " + this.index + " / Points: " + this.points;
  }
}

window.onload = function () {
  //initialize games array


  var gamesArray = new Array();
  var game2 = new Game("assets/league.webp", "League of Legends", "league is fun", [5], 0, ["Competitive Multiplayer", "Action","Puzzle/Strategy"], ["PC"], ["Best Game Ever"], "2021");
  var game3 = new Game("assets/zelda.png", "The Legend of Zelda: Skyward Sword HD", "Take to the skies, draw your sword, and experience the earliest story in the Legend of Zelda™ series. Join Link in his high-flying quest to save Zelda, a childhood friend who must confront her destiny. Soar between floating islands and descend to the treacherous surface world in this updated HD version of the Legend of Zelda: Skyward Sword game on Nintendo Switch.", [4], 59.99, ["Singleplayer"], ["Switch"], ["You can still use joy cons with the switch lite, they can pair just like with the switch, but rather then connecting them you push the black button next to zl zr "], "2021")
  var game4 = new Game("assets/unleashed.jpg", "Sonic Unleashed", "bruh", [4], 14.99, ["Singleplayer"], ["Xbox"], ["Need more sonic in my life man"], "2008");
  var game5 = new Game("assets/heroes.jpg", "Sonic Heroes", "This game differs from other Sonic games by allowing the player to take control of one of four teams, each with three characters, who each have unique abilities to use. ", [5], 14.99, ["Singleplayer"], ["Xbox", "Playstation"], ["I am a hero now"], "2003");
  var game6 = new Game("assets/fusionfall.jpg", "FusionFall", "Cartoon Network Universe: FusionFall was a massively multiplayer online game developed by Cartoon Network and South Korean studio Grigon Entertainment. FusionFall used the Unity engine as its client technology basis.", [5], 0, ["Multiplayer"], ["PC"], ["The literal best thing to ever happen regarding CN. Something like a marvel cinematic universe but with every CN story i've grown up with. The friends i made while playing this game over a decade ago i still talk to, get advice from and are some of my best friends. The bonds made in FusionFall made me a better person looking back on it and shaped alot of who i am today."], "2009");
  var game7 = new Game("assets/cntko.jpg", "Cartoon Network TKO", "Titanic KungFu-Bot Offense is a Cartoon Network robot fighting game that is similar to Project Exonaut.", [4], 0, ["Multiplayer"], ["PC"], ["Everyone I used here was my main but I liked and played the most since I liked his show, moveset, he was one of the first characters, and I (suppose in today's terms) really liked his 5X(his heavy punch) :^)"], "2011");
  var game8 = new Game("assets/flappybird.jpg", "Flappy Bird", "Help the Flappy Bird fly through a field of pipes!", [2, 3, 2, 1, 2, 3], 0, ["Singleplayer", "Puzzle/Strategy"], ["Mobile"], ["Broke my phone.", "Takes a lot of focus.", "The controls are so hard.", "Garbo game. Would not recommend.", "Looks and sounds nice. That's about it.", "Beat my older brother's score after 69 tries, finally."], "2013");
  var game9 = new Game("assets/arknights.png", "Arknights", "Lead Rhodes Island in their fight against the Reunion.", [5, 4], 0, ["Singleplayer", "Action", "Puzzle/Strategy", "RPG"], ["Mobile"], ["Kroos best girl", "The character art is superb, and the levels are a good challenge."], 2019);
  var game10 = new Game("assets/danganronpa.jpg", "Danganronpa: Trigger Happy Havoc", "Can you survive being trapped in a murder mystery high school?", [5, 3, 1], 20, ["Singleplayer", "Visual Novel", "Horror", "Action"], ["Xbox", "Playstation", "PC"], ["THIS IS THE BEST GAME EVER STAN KOKICHI NEEHEEHEE", "It's an interesting story with decent gameplay.", "The fandom ruined the game for me, I can't enjoy something like this anymore."], 2010);
  gamesArray.push(game5);
  gamesArray.push(game2);
  gamesArray.push(game3);
  gamesArray.push(game4);
  gamesArray.push(game6);
  gamesArray.push(game7);
  gamesArray.push(game8);
  gamesArray.push(game9);
  gamesArray.push(game10);



  if (JSON.parse(localStorage.getItem("games")) != null && JSON.parse(localStorage.getItem("games")).length > 0) {
    gamesArray = JSON.parse(localStorage.getItem("games"));
  } else {
    localStorage.setItem("games", JSON.stringify(gamesArray));
  }
  var reviewsDiv = document.getElementById("reviewsHere");
  //prints reviews
  for (var i = 0; i < gamesArray.length; i++) {
    var currentGameReviews = gamesArray[i].reviews; //go into each game, grab their list of reviews
    for (var x = 0; x < currentGameReviews.length; x++) { //loop through that list for each one
      var currentReview = currentGameReviews[x];
      var newP = document.createElement("p");
      newP.classList.add("review");
      newP.innerHTML = currentReview;
      if (reviewsDiv != null) {
        reviewsDiv.append(newP);
      }
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

    var gameYear = document.createElement("p");
    gameYear.innerText = currentGame.year;
    gameDiv.append(gameYear);

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
      gameRating.innerText = (totalRating / (currentGame.rating.length)).toFixed(2) + " ( " + (currentGame.rating.length) + " )";

    } else {
      gameRating.innerText = 0 + " (No User Reviews)";

    }
    gameDiv.append(gameRating);

    var catalog = document.getElementById("catalog");
    if (catalog != null) {
      catalog.append(gameDiv);
    }
  }

  //toggle add game form here
  var toggleButton = document.getElementById("addGameToggle");
  if (toggleButton != null) {
    toggleButton.onclick = function () {
      var form = document.getElementById("addGameForm");
      if (form.style.display === "none") {
        form.style.display = "block";
      } else {
        form.style.display = "none";
      }
    };
  }

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
  if (addButton != null) {
    addButton.addEventListener("click", addGame);
  }

  function addGame() {
    var gameTitle = document.getElementById("game_title").value;
    var gameYear = document.getElementById("game_year").value;

    //check existing array if game already exists
    for (let i = 0; i < gamesArray.length; i++) {
      if ((gamesArray[i].title.toLowerCase() + gamesArray[i].year) == (gameTitle.toLowerCase() + gameYear)) {
        alert("Game already exists, submit a review instead");
        return;
      }
    }
    
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
    var gameReview = [document.getElementById("game_review").value];
    if (gameTitle == "" || gameImage == "" || gameYear == "" || gameDevices.length == 0 || gameTags.length == 0 || gamePrice == "" ||
      gameDescription == "") {
      alert("Please fill in all required fields.");
    } else {
      gamesArray.push(new Game(gameImage, gameTitle, gameDescription, gameRating, gamePrice, gameTags, gameDevices, gameReview, gameYear));

      localStorage.setItem("games", JSON.stringify(gamesArray));
    }
  }

  //code to allow users to click a game and show only those relevant reviews
  var gameDivs = document.getElementsByClassName("gameDisplay");
  for (var i = 0; i < gameDivs.length; i++) {
    var currentGame = gameDivs[i];
    currentGame.addEventListener("click", showReview);
  }
  function showReview() {
    var gameTitle = this.firstChild.innerText;
    var reviewDivTitle = document.getElementById("currentTitleViewed");
    reviewDivTitle.innerText = "Thoughts on " + gameTitle;
    var reviews = document.getElementsByClassName("review");
    var reviewsContainer = document.getElementById("reviewsHere");
    for (var i = 0; i < reviews.length;) {
      reviewsContainer.removeChild(reviews[i]); //removes all current comments which is good
    }

    //find all actual relevant reviews from the game array
    for (var i = 0; i < gamesArray.length; i++) {
      //find the game with the equivalent title
      if (gamesArray[i].title == gameTitle) {
        //we found our game and we have the reviews for this game
        var gameReviews = gamesArray[i].reviews;
        //loop through reviews and print them into the "Sea"
        for (var x = 0; x < gameReviews.length; x++) {
          var currentReview = gameReviews[x];
          var currentRating = gamesArray[i].rating[x];
          var review = document.createElement("p");
          review.classList.add("review");
          review.innerText = currentReview + " [Rating given: " + currentRating + "]";
          reviewsContainer.append(review);
        }
      }
    }

  }

  //code to load the existing games into select so user can add a review to existing game
  for (var i = 0; i < gamesArray.length; i++) {
    var game = gamesArray[i];
    var option = document.createElement("option");
    option.text = game.title;
    option.value = game.title;
    var select = document.getElementById("catalogGames");
    if (select != null) {
      select.append(option);
    }
  }

  //attach event handler to review submit button
  var addReview = document.getElementById("addReviewBtn");
  if (addReview != null) {
    addReview.addEventListener("click", putReview);
  }

  function putReview() {
    var title = document.getElementById("catalogGames").value;
    var review = document.getElementById("adding_review").value;
    var rating = document.getElementById("adding_rating").value;
    if (review == "" || rating == "") {
      alert("Please fill in the required fields.");
    } else {
      //find title in games array and add to the rating and reviews arrays for it
      for (var i = 0; i < gamesArray.length; i++) {
        var game = gamesArray[i];
        if (game.title == title) {
          //found our game
          game.reviews.push(review);
          game.rating.push(parseInt(rating));
          //write the changes to the localstorage
          localStorage.setItem("games", JSON.stringify(gamesArray));
        }
      }
    }
  }

  var searchBtn = document.getElementById("searchButton");
  if (searchBtn != null) {
    searchBtn.addEventListener("click", redraw);
  }

  function redraw() {
    gamesArray = JSON.parse(localStorage.getItem("games"));
    var searchQuery = document.getElementById("searchString").value.toLowerCase();
    //alert("Searching for: " + searchQuery);
    //clear the gamedisplays
    var gameDisplays = document.getElementsByClassName("gameDisplay");
    var displayContainer = document.getElementById("catalog");
    for (var x = 0; x < gameDisplays.length;) {
      displayContainer.removeChild(gameDisplays[x]);
    }
    //loop through every game
    var drawArray = new Array(); // we put any hits in here and do a final loop to display these things :D

    for (var y = 0; y < gamesArray.length; y++) {
      //check for any hits in the title, year, and list of tags
      var game = gamesArray[y];

      //loop through tha tags and concatenate them into a stirng
      var tags = "";
      for (var z = 0; z < game.tags.length; z++) {
        tags += game.tags[z];
      }

      if (game.title.toLowerCase().includes(searchQuery)) {
        drawArray.push(game);
      } else if (game.year.toLowerCase().includes(searchQuery)) {
        drawArray.push(game)
      } else if (tags.toLowerCase().includes(searchQuery)) {
        drawArray.push(game);
      }
    }

    if (searchQuery == "") {
      drawArray = gamesArray;
    }
    //we have the draw array. now let's draw
    for (var i = 0; i < drawArray.length; i++) {
      var currentGame = drawArray[i];
      var gameDiv = document.createElement("div");
      gameDiv.classList.add("gameDisplay");
      var gameTitle = document.createElement("h1");
      gameDiv.append(gameTitle);
      gameTitle.innerText = currentGame.title;
      var gamePicture = document.createElement("img");
      gamePicture.setAttribute("id", "gamePic")
      gamePicture.src = currentGame.image;
      gameDiv.append(gamePicture);

      var gameYear = document.createElement("p");
      gameYear.innerText = currentGame.year;
      gameDiv.append(gameYear);

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
        gameRating.innerText = (totalRating / (currentGame.rating.length)).toFixed(2) + " ( " + (currentGame.rating.length) + " )";

      } else {
        gameRating.innerText = 0 + " (No User Reviews)";

      }
      gameDiv.append(gameRating);

      var catalog = document.getElementById("catalog");
      catalog.append(gameDiv);
      var gameDivs = document.getElementsByClassName("gameDisplay");
      for (var p = 0; p < gameDivs.length; p++) {
        var currentGame = gameDivs[p];
        currentGame.addEventListener("click", showReview);
      }
    }
  }


  $("#submitButton").click(function () {
    var numPlayers = $("[name=playerNum]:checked").val();
    var tags = [];
    var devices = [];
    var costs = [];
    $("[name=tags]").each(function () {
      if ($(this).prop("checked")) {
        tags.push($(this).val());
      }
    });
    $("[name=device]").each(function () {
      if ($(this).prop("checked")) {
        devices.push($(this).val());
      }
    });
    $("[name=cost]").each(function () {
      if ($(this).prop("checked")) {
        costs.push($(this).val());
      }
    });
    var gamePoints = [];
    for (let i = 0; i < gamesArray.length; i++) {
      gamePoints[i] = new Points(i,0);
      if (gamesArray[i].tags.includes(numPlayers)) {
        gamePoints[i].points += 3;
      }
      for (let j = 0; j < tags.length; j++) {
        if (gamesArray[i].tags.includes(tags[j])) {
          gamePoints[i].points += 4;
        }
      }
      for (let j = 0; j < devices.length; j++) {
        if (gamesArray[i].devices.includes(devices[j])) {
          gamePoints[i].points += 4;
        }
      }
      if (costs.includes("cheap") && gamesArray[i].price < 20) {
        gamePoints[i].points += 3;
      }
      if (costs.includes("moderate") && gamesArray[i].price > 19 && gamesArray[i].price < 40) {
        gamePoints[i].points += 3;
      }
      if (costs.includes("expensive") && gamesArray[i].price > 39) {
        gamePoints[i].points += 3;
      }
    }
    gamePoints.sort(function (a, b) { return b.points - a.points });
    $("#gamesGoHere").append("<h1>Here are some games you might like!</h1>");
    for (let i = 0; i < 3; i++) {
      var gameHere = gamesArray[gamePoints[i].index];
      var gameDiv = document.createElement("div");
      gameDiv.classList.add("gameQuizDisplay");
      var gameTitle = document.createElement("h1");
      gameDiv.append(gameTitle);
      gameTitle.innerText = gameHere.title;
      var gamePicture = document.createElement("img");
      gamePicture.setAttribute("id", "gamePic")
      gamePicture.src = gameHere.image;
      gameDiv.append(gamePicture);

      var gameYear = document.createElement("p");
      gameYear.innerText = gameHere.year;
      gameDiv.append(gameYear);

      var gameDescription = document.createElement("p");
      gameDescription.innerText = gameHere.description;
      gameDiv.append(gameDescription);

      var gameTags = document.createElement("p");
      gameTags.innerText = gameHere.tags;
      gameDiv.append(gameTags);

      var gameDevices = document.createElement("p");
      gameDevices.innerText = gameHere.devices;
      gameDiv.append(gameDevices);

      var gameRating = document.createElement("p");
      gameRating.classList.add("rating");
      //get rating by.. looping through rating array
      var totalRating = 0;
      for (var x = 0; x < gameHere.rating.length; x++) {
        totalRating += gameHere.rating[x];
      }
      if (gameHere.rating.length > 0) {
        gameRating.innerText = (totalRating / (gameHere.rating.length)).toFixed(2) + " ( " + (gameHere.rating.length) + " )";

      } else {
        gameRating.innerText = 0 + " (No User Reviews)";

      }
      gameDiv.append(gameRating);

      var catalog = document.getElementById("gamesGoHere");
      catalog.append(gameDiv);
    }
  });

}
