function Kreis(form) {
    ergebnis = Math.PI * Math.pow(document.getElementById('Radius').value,2)
    document.getElementById('Ausgabe').innerHTML = "Fläche: " + ergebnis + " cm²";
}