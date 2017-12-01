var modal = document.getElementById('modal');
var imgCabin = document.getElementById('cabin');
var imgCake = document.getElementById('cake');
var imgCircus = document.getElementById('circus');
var imgGame = document.getElementById('game');
var imgSafe = document.getElementById('safe');
var imgSubmarine = document.getElementById('submarine');
var modalImg = document.getElementById("img1");

imgCabin.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

imgCake.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

imgCircus.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

imgGame.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

imgSafe.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

imgSubmarine.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

var span = document.getElementsByClassName("x")[0];

span.onclick = function() {
    modal.style.display = "none";
}