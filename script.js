const flipCardContainer = document.querySelector(".flip-card-container");
const no = document.querySelector(".no");
const info = document.querySelector(".info");
const yes = document.querySelector(".yes");


no.addEventListener("click", function() {
    flipCardContainer.classList.add ("option-3");
    flipCardContainer.classList.add ("flip");
    console.log('NOPEE')
});

info.addEventListener("click", function() {
    flipCardContainer.classList.add ("option-2");
    flipCardContainer.classList.add ("flip");

    console.log('INFOOOOO')
});

yes.addEventListener("click", function() {
    flipCardContainer.classList.add ("option-1");
    flipCardContainer.classList.add ("flip");

    console.log('YESSSS')
});

$('a').mouseover(function(){
    $('span:first-child').hide();
  });
  $('a').mouseleave(function(){
    $('span:first-child').fadeIn(400);
  });