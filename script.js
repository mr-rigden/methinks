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

var shareButton = document.getElementById("share");

function newShare() {
    //Maybe someday :( https://caniuse.com/web-share
    var cta = document.getElementById("share")
    cta.innerHTML = 'Share';
    forwardButton.onclick = function () {
  
      navigator.share({
        title: document.getElementById("page-title").innerText,
        url: shareURL,
      })
    }
  }

function twitterShare() {
    var twitterBase = "https://twitter.com/intent/tweet"
    var shareText = '"' + document.getElementById("page-title").innerText + '" by @mr_rigden' 
  
    var shareLink = twitterBase + "?url=" + encodeURIComponent(shareURL) + "&text=" + encodeURIComponent(shareText) + "&via+" + "mr_rigden" 
    var a = document.createElement('a')
    a.innerHTML = 'Share';
    a.setAttribute('href',shareLink)
    document.getElementById("share").appendChild(a)
  }


if (navigator.share) {
    newShare()
} else {
    twitterShare()
}
