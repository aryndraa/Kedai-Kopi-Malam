function openNav() {
  var sideNav = document.getElementById("nav-side");
  if (sideNav.classList.contains("active")) {
    sideNav.classList.remove("active");
  } else {
    sideNav.classList.add("active");
  }
}
