// Imposta la data alla quale stiamo contando alla rovescia
let countDownDate = new Date("jan 11, 2023 15:00:00").getTime();
// Aggiorna il conto alla rovescia ogni 1 secondo
var x = setInterval(function () {

    // Ottieni la data e l'ora di oggi
    var now = new Date().getTime();

    // Trova la distanza tra ora e la data del conto alla rovescia
    var distance = countDownDate - now;

    // Calcoli del tempo per giorni, ore, minuti e secondi
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Visualizza il risultato in un elemento con id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    //Se il conto alla rovescia è terminato, scrivi del testo
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);