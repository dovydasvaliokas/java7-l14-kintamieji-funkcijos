// Pagrindinė funkcija
window.onload = function() {
    let x;      // kintamojo sukūrimas
    let rezultatas;     // kintamojo sukūrimas
    let rezultatas2;         // KINTAMOJO SUKŪRIMAS

    x = 5;      // reikšmės priskyrimas kintamajui

    rezultatas = skaiciausPadidinimasPenketu(x);
    rezultatas2 = skaiciausPadidinimasPenketu(17);

    console.log(rezultatas);
    console.log(rezultatas2);

}


// Papildoma funkcija
function skaiciausPadidinimasPenketu(x) {
    return x + 5;
}



