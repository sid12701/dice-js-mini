var randomNumber1 = Math.floor(Math.random()*6)+1;
var random_img = "dice" + randomNumber1 +".png";
var randomImgsource = "images/" + random_img;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImgsource);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var random_img2 = "dice" + randomNumber2 +".png";
var randomImgsource2 = "images/" + random_img2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImgsource2);



if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML = "Its a draw";
}
