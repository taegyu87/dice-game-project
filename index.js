var rand1 = Math.floor(Math.random() * 6) + 1;
var rand2 = Math.floor(Math.random() * 6) + 1;

document.getElementsByClassName("img1")[0].setAttribute("src", changePic(rand1));
document.getElementsByClassName("img2")[0].setAttribute("src", changePic(rand2));

if (rand1 === rand2) {
  document.querySelector("h1").innerHTML = "<em> Draw !!! </em>";
} else if (rand1 > rand2) {
  document.querySelector("h1").innerHTML = "<em> Player 1 WIN !!! </em>";
} else {
  document.querySelector("h1").innerHTML = "<em> Player 2 WIN !!! </em>";
}

function changePic(num) {
  if (num === 1) {
    var whichPic = "images/dice1.png";
  } else if (num === 2) {
    var whichPic = "images/dice2.png";
  } else if (num === 3) {
    var whichPic = "images/dice3.png";
  } else if (num === 4) {
    var whichPic = "images/dice4.png";
  } else if (num === 5) {
    var whichPic = "images/dice5.png";
  } else {
    var whichPic = "images/dice6.png";
  }
  return whichPic;
}
