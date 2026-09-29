window.onload = function(){
    alert("welcome to Roast & Reverie!");
let year=document.getElementById("year");
if (year){
    year.innerHTML = new Date().getFullYear();}
};
function showAvailability(id){document.getElementById(id).innerHTML="Availability:available";}