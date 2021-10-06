var menu = document.getElementById("menu");
var hamburger = document.getElementById("hamburger")

hamburger.onclick = function () {
      menu.classList.toggle("hidden")
};


try {
    var shareURL = document.querySelector("link[rel='canonical']").getAttribute("href")
  } catch(error) {
    var shareURL = window.location.href
}

if (navigator.share) {
    console.log("new")
} else {
    console.log("old")
}
