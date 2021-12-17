var navbar = document.getElementById('#nav-mobile');

function scrollToSection(element) {
    var element = document.getElementById(element);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
}

function NavToggle(x) {
    navbar.classList.toggle('hidden')
    x.classList.toggle("change");
  }