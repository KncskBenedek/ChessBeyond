//console.log("Bel�p a jsbe");
window.addEventListener("load", beilleszt);


function beilleszt() {
    //console.log("bel�p a beillesztbe");
    let n = 0;
    /* const objektum =  */
    fetch("events.json")
        .then(response => response.json())
        .then(data => {
            const tomb = [];
            for (const key in data.fooldal) {
                let tartalom = "";
                ID("content").innerHTML += `<div id="bekezd${n}"><\div>`;

                tartalom += `<div class="tartalom"><h2>${data.fooldal[key].cim}</h2>`;
                tartalom += `<p>${data.fooldal[key].tartalom}</p></div>`;
                tartalom += `<img src="kepek/${data.fooldal[key].kep}" class="kep" alt="kep"></img>`
                tomb.push(tartalom);
                n++;
            }
            for (let index = 0; index < tomb.length; index++) {
                ID(`bekezd${index}`).innerHTML = tomb[index];
            }
        })

}


function ID(elem) {
    return document.getElementById(elem);
}

function $(elem) {
    return document.querySelectorAll(elem);
}