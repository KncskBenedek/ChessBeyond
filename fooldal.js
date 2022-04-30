console.log("Belép a jsbe");
window.addEventListener("load", beilleszt);


function beilleszt() {
    console.log("belép a beillesztbe");
    let n = 0;
    /* const objektum =  */
    fetch("fooldal.json")
        .then(response => response.json())
        .then(data => {
            const tomb = [];
            for (const key in data.fooldal) {
                let tartalom = "";
                ID("content").innerHTML += `<div id="bekezd${n}"><\div>`;
                
                tartalom += `<div class="bekezdes"><div class="tartalom"><h2>${data.fooldal[key].cim}</h2>`;
                tartalom += `<p>${data.fooldal[key].tartalom}</p></div>`;
                tartalom += `<div class="kep"><img src="kepek/${data.fooldal[key].kep}"></img></div></div>`
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