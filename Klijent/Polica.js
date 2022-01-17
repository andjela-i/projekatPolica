import { Knjiga } from "./Knjiga.js";

export class Polica
{
    constructor(ime,kont,id)
    {
        this.id=id;
        this.listaKnjiga=[];
        this.ime=ime;
        this.kontGlavni=kont;
    }

    crtaj(host)
    {        
        let l = document.createElement("label");
        l.innerHTML=this.ime;
        l.className="policaIme";
        host.appendChild(l);

        let d = document.createElement("div");
        d.className="polica"
        this.kont=d;
        host.appendChild(d);
        this.crtajSveKnjige();
    }

    novaKnjiga(knjiga)
    {
        fetch("https://localhost:5001/Knjiga/PreuzmiNaziv/"+knjiga,
                    {
                        method:"GET"
                    }).then(s=>
                        {
                            if(s.ok){
                                s.json().then(data=>{
                                    this.listaKnjiga.push(data);
                                    this.crtajKnjigu(data);
                                })
                            }
                            if(s.status==400){
                                alert("ne postoji knjiga sa tim nazivom u bazi podataka");
                            }
                            
                        })
    }

    crtajKnjigu(data)
    {
        var knjiga=new Knjiga(data.id,data.naziv,this.kontGlavni);
        knjiga.nacrtajKnjigu(this.kont,this.kontGlavni);
        console.log(this.kontGlavni);
    }

    crtajSveKnjige()
    {
        this.listaKnjiga.forEach(el=>
            {
                this.crtajKnjigu(el);
            })
    }
}