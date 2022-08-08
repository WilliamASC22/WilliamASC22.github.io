

let topBot = document.getElementById("topBot")
topBot.style.border="none"
topBot.style.padding="5px"
topBot.style.fontSize="10px"
topBot.style.background="black"
topBot.style.color="light blue"
topBot.onclick=function(){
    window.scrollTo(0,0);
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}