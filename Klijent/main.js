import { Knjiga } from "./Knjiga.js";
import { Police } from "./Police.js";
import { Polica } from "./Polica.js";


var listaZanr=[];
fetch("https://localhost:5001/Knjiga/PreuzmiSve")
.then(p=>{
    p.json().then(knjige=>{
        knjige.forEach(knjiga =>{
            var k = knjiga.zanr;
            listaZanr.push(k);
        })
        console.log(listaZanr);
        var p1= new Police(listaZanr);
        p1.crtaj(document.body);
    })
})

var listaZanr2=[];
fetch("https://localhost:5001/Knjiga/PreuzmiSve")
.then(p=>{
    p.json().then(knjige=>{
        knjige.forEach(knjiga =>{
            var k = knjiga.zanr;
            listaZanr2.push(k);
        })
        console.log(listaZanr2);
        var p2= new Police(listaZanr2);
        p2.crtaj(document.body);
    })
})




