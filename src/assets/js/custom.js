function myTest() {
  alert("About us component was clicked!");
}

window.onload = function () {
  var aboutUs = document.getElementById("about_us");
  aboutUs.addEventListener("click", myTest);
}
