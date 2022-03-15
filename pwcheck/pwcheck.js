function comparepw() {
    var old1 = document.getElementById("old1");
    var old2 = document.getElementById("old2");

    if (old1.value == old2.value)
    {
      document.getElementById('outputtxt').innerHTML = "Das Passwort wurde geändert.";
    }        
    else {
      document.getElementById('outputtxt').innerHTML = "Das Passwort wurde nicht geändert.";
    }
   }