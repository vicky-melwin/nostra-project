// Selecting sidenav and menuicon 

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
var newarrivals = document.getElementById("newarrivals")
var newarrivalplace = document.getElementById("newarrivalplace")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})
closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})
newarrivals.addEventListener("click", function() {
    newarrivalplace.style.bottom = 10
})