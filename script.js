/////////////// FOOTER -> Nb de clics dans la CONSOLE ///////////////

let clic = document.querySelector('footer');
//clic.addEventListener('click', function(){console.log('clique')});

let countClicks = 0;

clic.onclick = function() { 
  countClicks++;
  console.log('clic numéro ' + countClicks)
};


/////////////// NAVBAR MENU ///////////////

document.getElementsByClassName("navbar-toggler")[0].addEventListener("click", function(){
  document.getElementById("navbarHeader").classList.toggle("collapse");
})


/////////////// RED EDIT ///////////////

let y = document.getElementsByClassName("col-md-4")[0];
console.log(y);

let x = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
console.log(x);

x.addEventListener("click", function() {
  y.style.color = "red";
})


/////////////// GREEN EDIT AND REVERSE ///////////////

{let secondCard = document.getElementsByClassName("col-md-4")[1];
let clickerButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
clickerButton.addEventListener("click", function() {
  if (secondCard.style.color === "green") {
    secondCard.style.color = "black";
  }
  else {
    secondCard.style.color = "green"
  }
})
}


/////////////// EXTERMINATION de Bootstrap ///////////////
{let CDN = document.querySelector('[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');
console.log(CDN);

let clickerNavBar = document.getElementById("navbarHeader");
console.log(clickerNavBar);

clickerNavBar.addEventListener("dblclick", function() {
  if (CDN.href === 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css') {
    CDN.href = '';
  }
  else {
    CDN.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
  }
})
}