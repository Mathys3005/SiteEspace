var carrousel = document.querySelector('.carrousel');
var selectedIndex = 0;
var i = 90000;

var soleil = document.querySelector('#Soleil');
var mercure = document.querySelector('#Mercure');
var venus = document.querySelector('#Venus');
var Terre = document.querySelector('#Terre');
var Mars = document.querySelector('#Mars');
var Jupiter = document.querySelector('#Jupiter');
var Saturne = document.querySelector('#Saturne');
var Uranus = document.querySelector('#Uranus');
var Neptune = document.querySelector('#Neptune');

function rotationCarrousel() {
  var angle = selectedIndex / 9 * -360;
  carrousel.style.transform = 'rotateY(' + angle + 'deg)';
}
function verif(){
    if (i % 9 == 0){
        soleil.style.display='inline';
        mercure.style.display='none';
        Mars.style.display='none';
        Terre.style.display='none';
        Saturne.style.display='none';
        Uranus.style.display='none';
        Neptune.style.display='none';
        venus.style.display='none';
        Jupiter.style.display='none';
    }
    if (i % 9 == 1){
      mercure.style.display='inline';
      soleil.style.display='none';
      venus.style.display='none';
      Terre.style.display='none';
      Mars.style.display='none';
      Jupiter.style.display='none';
      Saturne.style.display='none';
      Uranus.style.display='none';
      Neptune.style.display='none';

  }
  if (i % 9 == 2){
      venus.style.display='inline';
      soleil.style.display='none';
      mercure.style.display='none';
      Terre.style.display='none';
      Mars.style.display='none';
      Jupiter.style.display='none';
      Uranus.style.display='none';
      Neptune.style.display='none';
      Saturne.style.display='none';
   }
   if (i % 9 == 3){
    Terre.style.display='inline';
    mercure.style.display='none';
    soleil.style.display='none';
    venus.style.display='none';
    Mars.style.display='none';
    Jupiter.style.display='none';
    Saturne.style.display='none';
    Uranus.style.display='none';
    Neptune.style.display='none';

}
   if (i % 9 == 4){
    Mars.style.display='inline';
    mercure.style.display='none';
    soleil.style.display='none';
    venus.style.display='none';
    Terre.style.display='none';
    Jupiter.style.display='none';
    Saturne.style.display='none';
    Uranus.style.display='none';
    Neptune.style.display='none';

}
   if (i % 9 == 5){
    Jupiter.style.display='inline';
    mercure.style.display='none';
    soleil.style.display='none';
    venus.style.display='none';
    Terre.style.display='none';
    Mars.style.display='none';
    Saturne.style.display='none';
    Uranus.style.display='none';
    Neptune.style.display='none';

}
   if (i % 9 == 6){
    Saturne.style.display='inline';
    mercure.style.display='none';
    soleil.style.display='none';
    venus.style.display='none';
    Terre.style.display='none';
    Mars.style.display='none';
    Jupiter.style.display='none';
    Uranus.style.display='none';
    Neptune.style.display='none';

}
   if (i % 9 == 7){
    Uranus.style.display='inline';
    mercure.style.display='none';
    soleil.style.display='none';
    venus.style.display='none';
    Terre.style.display='none';
    Mars.style.display='none';
    Jupiter.style.display='none';
    Saturne.style.display='none';
    Neptune.style.display='none';

}
   if (i % 9 == 8){
    Neptune.style.display='inline';
    mercure.style.display='none';
    soleil.style.display='none';
    venus.style.display='none';
    Terre.style.display='none';
    Mars.style.display='none';
    Jupiter.style.display='none';
    Saturne.style.display='none';
    Uranus.style.display='none';

}









}


var prevButton = document.querySelector('#previous');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  i--;
  rotationCarrousel();
  verif();
});

var nextButton = document.querySelector('#next');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  i++;
  rotationCarrousel();
  verif();
});

