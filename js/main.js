const km = parseInt(prompt("Inserisci il numero dei chilometri che vuoi percorrere"));

const eta = parseInt(prompt("Inserisci la tua età"));

const prezzoKm = 0.21;

let totCosto = km * prezzoKm;

if (eta < 18){
    let sconto = totCosto / 100 * 20;
    totCosto = totCosto - sconto;
    document.getElementById('costo').innerHTML=`Hai diritto allo sconto per gli under 18 del 20%, il prezzo è di ${totCosto.toFixed(2)} €`;
} else if (eta > 65){
    let sconto = totCosto / 100 * 40;
    totCosto = totCosto - sconto;
    document.getElementById('costo').innerHTML=`Hai diritto allo sconto per gli over 65 del 40%, il prezzo è di ${totCosto.toFixed(2)} €`;
} else {
    document.getElementById('costo').innerHTML=`Il prezzo è di ${totCosto.toFixed(2)} €`;
}