var navbar = document.getElementById('#nav-mobile');

function scrollToSection(element) {
    var element = document.getElementById(element);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
}

function NavToggle(x) {
    navbar.classList.toggle('scale-0')
    navbar.classList.toggle('scale-100');
    x.classList.toggle("change");
  }