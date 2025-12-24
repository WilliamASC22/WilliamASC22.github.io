var currentIndex = 1;
      
//Show current image
showSlides(currentIndex);

//Function to move Next
function plusSlides(n) {
   showSlides(currentIndex += n);
}

//Function to move back
function currentSlide(n) {
   showSlides(currentIndex = n);
}


//Initiate moving of slides
function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("images");
   var dots = document.getElementsByClassName("navigation-dot");
   if (n > slides.length) {currentIndex = 1}
   if (n < 1) {currentIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[currentIndex-1].style.display = "block";
   dots[currentIndex-1].className += " active";
}

// Email reveal (for anti-scraping)
(function () {
  const btn = document.getElementById("emailToggle");
  const out = document.getElementById("emailReveal");
  if (!btn || !out) return;

  let shown = false;

  const codes = [
    119, 98, 104, 117, 105, 121, 97, 110,
    64,
    98, 117, 102, 102, 97, 108, 111,
    46,
    101, 100, 117
  ];

  function buildEmail() {
    return String.fromCharCode.apply(null, codes);
  }

  btn.addEventListener("click", function () {
    shown = !shown;

    if (!shown) {
      out.style.opacity = 0;
      out.textContent = "";
      return;
    }

    setTimeout(function () {
      out.textContent = buildEmail();
      out.style.opacity = 1;
    }, 150);
  });
})();


// Dark mode toggle
(function () {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  const saved = localStorage.getItem("theme");
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  }

  function setIcon() {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
      btn.textContent = "☀️";
    } else {
      btn.textContent = "🌙";
    }
  }

  setIcon();

  btn.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }

    setIcon();
  });
})();

