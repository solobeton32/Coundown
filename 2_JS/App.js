
const comingYear = document.querySelector(".coming-year");
const birthDate = prompt("Entrer votre jour de naissance (1-31):");
const birthMonth = prompt("Entrer votre mois de naissance (1-12):");
const today = new Date();
var nextYear;
/**Il compleanno è andato quest'anno se quanto segue è vero:
se il mese di nascita è maggiore del mese corrente
se il mese di nascita è lo stesso ma la data di nascita è maggiore della data corrente */
if (today.getMonth() + 1 > birthMonth || (today.getMonth() + 1 == birthMonth && today.getDate() + 1 > birthDate)) {
    nextYear = new Date().getFullYear() + 1;
}
else {
    nextYear = new Date().getFullYear();
}
comingYear.innerHTML = nextYear;
//function contattore
function countdown() {
    const remaining = new Date(`${nextYear}-${birthMonth}-${birthDate} 00:00:00`) - new Date();
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(remaining / (1000 * 60 * 60)) % 24; //converti millisecondi en une journee
    const minutes = Math.floor(remaining / (1000 * 60)) % 60; //converti millisecondi en heur.
    const seconds = Math.floor(remaining / 1000) % 60; //per ottenere secondi nell'intervallo 0-60.
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
}
countdown()
setInterval(countdown, 1000);