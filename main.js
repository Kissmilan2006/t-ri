
document.getElementById('kovetkezo').style.display = "none"; 
document.getElementById('eredmenyjelzo').style.display = "none"; 
document.getElementsByTagName('h2')[0].style.display = "none"; 
        const kerdesek = [
            { kerdes: "Melyik évben kezdődött a második világháború?", helyesValasz: "1939", hibasValaszok: ["1941", "1945", "1938"] },
            { kerdes: "Ki volt a náci Németország vezetője?", helyesValasz: "Adolf Hitler", hibasValaszok: ["Joseph Goebbels", "Hermann Göring", "Heinrich Himmler"] },
            { kerdes: "Melyik ország támadta meg Lengyelországot 1939-ben?", helyesValasz: "Németország", hibasValaszok: ["Oroszország", "Franciaország", "Anglia"] },
            { kerdes: "Melyik város volt a második világháború alatt az USA bombázási célpontja?", helyesValasz: "Hiroshima", hibasValaszok: ["Tokió", "Nagasaki", "Osaka"] },
            { kerdes: "Melyik szövetséges országok támadták meg Normandiát 1944-ben?", helyesValasz: "USA, Nagy-Britannia és Kanada", hibasValaszok: ["Németország", "Olaszország és Japán", "Szovjetunió és Franciaország"] },
            { kerdes: "Mikor ért véget a második világháború Európában?", helyesValasz: "1945. május 8.", hibasValaszok: ["1945. április 30.", "1946. január 1.", "1945. július 1."] },
            { kerdes: "Melyik ország csatlakozott először a Szovjetunióhoz a háború alatt?", helyesValasz: "Lengyelország", hibasValaszok: ["Finnország", "Románia", "Csehszlovákia"] },
            { kerdes: "Milyen hadművelet keretében szálltak partra a szövetségesek Normandiában?", helyesValasz: "D-nap", hibasValaszok: ["Market Garden", "Bagration", "Operation Torch"] },
            { kerdes: "Melyik ország hadat üzent az Egyesült Államoknak 1941-ben?", helyesValasz: "Japán", hibasValaszok: ["Németország", "Olaszország", "Szovjetunió"] },
            { kerdes: "Ki volt a Szovjetunió vezetője a második világháború alatt?", helyesValasz: "Joszif Sztálin", hibasValaszok: ["Vlagyimir Lenin", "Leonid Brezsnyev", "Mihail Gorbacsov"] },
            { kerdes: "Melyik német városban tartották a híres konferenciát 1942-ben?", helyesValasz: "Wannsee", hibasValaszok: ["Berlín", "München", "Hamburg"] },
            { kerdes: "Mi volt a német hadsereg stratégiája a háború első szakaszában?", helyesValasz: "Blitzkrieg", hibasValaszok: ["Vörös Hadsereg", "Sturm und Drang", "Luftwaffe"] },
            { kerdes: "Melyik csata volt a legnagyobb szárazföldi ütközet a második világháború alatt?", helyesValasz: "Stalingrád", hibasValaszok: ["El-Alamein", "Kurzk", "Normandia"] },
            { kerdes: "Melyik országot szállta meg a náci Németország 1939-ben?", helyesValasz: "Csehszlovákia", hibasValaszok: ["Franciaország", "Hollandia", "Dánia"] },
            { kerdes: "Ki volt a brit miniszterelnök a háború alatt?", helyesValasz: "Winston Churchill", hibasValaszok: ["Neville Chamberlain", "Clement Attlee", "Anthony Eden"] },
            { kerdes: "Melyik szövetséges ország volt a legkorábban belépő a háborúba?", helyesValasz: "Lengyelország", hibasValaszok: ["Franciaország", "Anglia", "USA"] },
            { kerdes: "Mi volt a náci Németország utolsó offenzívája a háború alatt?", helyesValasz: "Bulge", hibasValaszok: ["Barbarossa", "Oroszország", "Bagration"] },
            { kerdes: "Melyik városban dobták le az első atombombát?", helyesValasz: "Hiroshima", hibasValaszok: ["Nagasaki", "Tokió", "Osaka"] },
            { kerdes: "Melyik szövetséges ország nem volt tagja a NATO-nak a háború után?", helyesValasz: "Szovjetunió", hibasValaszok: ["Franciaország", "Egyesült Királyság", "USA"] },
            { kerdes: "Melyik német tábornok irányította a Afrika Korps-t?", helyesValasz: "Erwin Rommel", hibasValaszok: ["Gerd von Rundstedt", "Wilhelm Keitel", "Hermann Göring"] },
            { kerdes: "Milyen új technológiákat használtak a németek a háború során?", helyesValasz: "Páncélozott járművek", hibasValaszok: ["Repülőgépek", "Hajók", "Katonai drónok"] },
            { kerdes: "Ki volt a legfontosabb szovjet tábornok a háború alatt?", helyesValasz: "Georgy Zhukov", hibasValaszok: ["Leonid Brezsnyev", "Nikolai Voronov", "Aleksandr Vasilevsky"] },
            { kerdes: "Melyik évben alakult meg a náci párt?", helyesValasz: "1920", hibasValaszok: ["1925", "1933", "1939"] },
            { kerdes: "Ki volt a német hadsereg főparancsnoka a háború végén?", helyesValasz: "Wilhelm Keitel", hibasValaszok: ["Heinrich Himmler", "Hermann Göring", "Erich von Manstein"] },
            { kerdes: "Melyik ország nem csatlakozott a szövetségesekhez?", helyesValasz: "Svédország", hibasValaszok: ["Franciaország", "USA", "Szovjetunió"] },
            { kerdes: "Melyik ország indította el a Blitzkrieg-t?", helyesValasz: "Németország", hibasValaszok: ["Olaszország", "Japán", "Finnország"] },
            { kerdes: "Ki volt a lengyel kormányfő a háború alatt?", helyesValasz: "Władysław Sikorski", hibasValaszok: ["Tadeusz Kosciuszko", "Ludwik Zamenhof", "Józef Piłsudski"] },
            { kerdes: "Melyik évben született a NATO?", helyesValasz: "1949", hibasValaszok: ["1945", "1950", "1948"] },
            { kerdes: "Melyik ország hadat üzent az Egyesült Államoknak 1941-ben?", helyesValasz: "Japán", hibasValaszok: ["Németország", "Olaszország", "Szovjetunió"] },
            { kerdes: "Ki írta a 'Mein Kampf'-ot?", helyesValasz: "Adolf Hitler", hibasValaszok: ["Hermann Göring", "Joseph Goebbels", "Rudolf Hess"] },
            { kerdes: "Mi volt a német haditerv neve a Szovjetunió ellen?", helyesValasz: "Barbarossa", hibasValaszok: ["Tavaszi Ébredés", "D-nap", "Vörös Hadsereg"] },
            { kerdes: "Melyik terület volt a második világháború legnagyobb csatáinak színhelye?", helyesValasz: "Kelet-Európa", hibasValaszok: ["Észak-Afrika", "Nyugat-Európa", "Ázsia"] },
            { kerdes: "Milyen eljárást alkalmaztak a nácik a holokauszt során?", helyesValasz: "Tömeges megsemmisítés", hibasValaszok: ["Katonai támadások", "Fogságba ejtés", "Menekülés"] },
            { kerdes: "Melyik országban volt a híres 'Híd a Kwai folyón'?", helyesValasz: "Burma", hibasValaszok: ["Vietnam", "Japán", "Kína"] },
            { kerdes: "Ki volt a szovjet női pilóták legendás alakja?", helyesValasz: "Lydia Litvyak", hibasValaszok: ["Mariya Vasilyevna", "Nadezhda Popova", "Yevdokiya Zavaly"] },
            { kerdes: "Milyen fontos stratégiai sziget volt a csendes-óceáni harcok során?", helyesValasz: "Midway", hibasValaszok: ["Wake", "Guadalcanal", "Iwo Jima"] },
            { kerdes: "Mi volt a célja a Marshall-tervnek?", helyesValasz: "Európa újjáépítése", hibasValaszok: ["A háború folytatása", "Új fegyverek kifejlesztése", "Szövetségek kialakítása"] },
            { kerdes: "Melyik országban végeztek el elsőként atomkísérleteket?", helyesValasz: "USA", hibasValaszok: ["Németország", "Szovjetunió", "Japán"] }
        ];
        const eredmenyDiv = document.getElementById('eredmeny'); 
        let kerdesekIndex = [];
        let jelenlegiKerdesIndex;
        let pontok  =0;
        let elozo = null; 
let kerdesSzamlalo = 0; 
function kezdes() {
  
    document.getElementById('marad').style.display = "none"; 
    document.getElementById('kovetkezo').style.display = "unset"; 
    kerdesSzamlalo = 1; 
    while (kerdesekIndex.length < 20) {
        const index = Math.floor(Math.random() * kerdesek.length);
        if (!kerdesekIndex.includes(index)) {
            kerdesekIndex.push(index);
        }
    }
    betoltKerdes();
}
function betoltKerdes() {
    if (kerdesekIndex.length === 0) {
        document.getElementById('game').style.display = "none"; 
        document.getElementById('eredmeny').style.display = "none"; 
        document.getElementById('kovetkezo').style.display = "none"; 
        return; 
    }

    jelenlegiKerdesIndex = kerdesekIndex.pop();
    const aktualisKerdes = kerdesek[jelenlegiKerdesIndex];
    document.getElementById('kerdes').innerText = `${kerdesSzamlalo}. kérdés: ${aktualisKerdes.kerdes}`;

    kerdesSzamlalo++;

    const valaszok = [aktualisKerdes.helyesValasz, ...aktualisKerdes.hibasValaszok];
    keverValaszok(valaszok);

    const valaszokDiv = document.getElementById('valaszok');
    valaszokDiv.innerHTML = '';

    valaszok.forEach(valasz => {
        const gomb = document.createElement('button');
        gomb.innerText = valasz;
        gomb.classList.add("valaszok");
        gomb.onclick = () => ellenorizValasz(valasz === aktualisKerdes.helyesValasz, gomb);
        valaszokDiv.appendChild(gomb);
    });

    document.getElementById('eredmeny').innerText = '';
}

    

function ellenorizValasz(helyes, hely) {
    const eredmenyDiv = document.getElementById('eredmeny');

   
    if (elozo) {
        elozo.classList.remove("jo");
        elozo.classList.remove("rossz");
    }

    
    if (helyes) {
        hely.classList.add("jo");
        pontok+= 1
        console.log( document.getElementsByTagName("h2"))
        document.getElementsByTagName("h2")[0].innerHTML = "pontok:"+pontok
        eredmenyDiv.innerHTML = "Helyes válasz!";
        eredmenyDiv.classList.add("helyes");
        eredmenyDiv.classList.remove("helytelen");
    } else {
        hely.classList.add("rossz");
        eredmenyDiv.innerHTML = "Helytelen válasz. Próbáld újra!";
        eredmenyDiv.classList.add("helytelen");
        eredmenyDiv.classList.remove("helyes");
    }

    
    elozo = hely;

   document.getElementsByClassName("valaszok")[0].disabled = true;
   document.getElementsByClassName("valaszok")[1].disabled = true;
   document.getElementsByClassName("valaszok")[2].disabled = true;
   document.getElementsByClassName("valaszok")[3].disabled = true;
    
    if (kerdesekIndex.length === 0) {
        document.getElementById('kovetkezo').innerText = "Kérlek, kezd újra a játékot!";
    }
}
document.getElementById('kovetkezo').onclick = () => {
    if (kerdesekIndex.length > 0) {
        betoltKerdes();
    } else {
        let a =100-pontok / 20 *100
        console.log(a)
       
        document.getElementById('kovetkezo').style.display = "none"; 
        document.getElementById('eredmeny').style.display = "none"; 
        document.getElementById('game').style.display = "none"; 
        document.getElementById('eredmenyjelzo').style.display = "block"; 
        document.getElementsByTagName('h2')[0].style.display = "block"; 
        document.getElementsByClassName("green")[0].style.height = a+"%";

    }

   
    if (elozo) {
        elozo.classList.remove("jo");
        elozo.classList.remove("rossz");
    }
    eredmenyDiv.classList.remove("helyes");
    eredmenyDiv.classList.remove("helytelen");
};

       
        function keverValaszok(tomb) {
            for (let i = tomb.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [tomb[i], tomb[j]] = [tomb[j], tomb[i]];
            }
        }

    
        document.getElementById("marad").onclick = () => kezdes();
       
