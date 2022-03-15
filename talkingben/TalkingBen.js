var Antwort = ['Yes','No', 'HOHOHO', 'Ughh'];
    function nichtantwort(){
                let zufallszahl =Math.floor(Math.random()*Antwort.length);
                /*alert(zufallszahl)*/
                document.getElementById("ausgabe").innerHTML=Antwort[zufallszahl];
                
             if (zufallszahl=='0'){
                var audio1 = new Audio('yes-1.mp3');
                audio1.play();
             }
             if (zufallszahl=='1'){
                var audio2 = new Audio('no.mp3');
                audio2.play();
             }
             if (zufallszahl=='2'){
                var audio3 = new Audio('hohoho.mp3');
                audio3.play();
             }
             if (zufallszahl=='3'){
                var audio4 = new Audio('ugh.mp3');
                audio4.play();
             }
     }