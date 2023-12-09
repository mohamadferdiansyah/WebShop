document.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    var scrolled = window.scrollY;
  
    if (scrolled > 200) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  