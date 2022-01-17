import { Knjiga } from "./Knjiga.js";
import { Polica } from "./Polica.js";
export class Police
{
    constructor(listaZanr){
        this.listaZanr=listaZanr;
        this.kont=null;
        this.listaPolica=[];
    }

    crtaj(host){
        this.kont=document.createElement("div");
        this.kont.className="glavniKont";
        host.appendChild(this.kont);
        
        let leviKont = document.createElement("div");
        leviKont.className="leviKont";
        this.kontLevi=leviKont;
        this.kont.appendChild(leviKont);

        let desniKont = document.createElement("div");
        desniKont.className="desniKont";
        this.kontDesni=desniKont;
        this.kont.appendChild(desniKont);

        let infoKont = document.createElement("div");
        infoKont.className="infoKont";
        this.infoKont=infoKont;
        this.kont.appendChild(infoKont);

        let formaKont = document.createElement("div");
        formaKont.className="formaKont";
        leviKont.appendChild(formaKont);

        let prikazKont = document.createElement("div");
        prikazKont.className="prikazKont";
        leviKont.appendChild(prikazKont);

        var tabela = document.createElement("table");
        tabela.className="tabela";
        prikazKont.appendChild(tabela);

        var tabelaHead=document.createElement("thead");
        tabela.appendChild(tabelaHead);

        var tabelaBody=document.createElement("tbody");
        tabelaBody.className="tabelaBody";
        tabela.appendChild(tabelaBody);

        this.crtajFormu(formaKont);

    }
    
    crtajFormu(host){

        let d = document.createElement("div");
        host.appendChild(d);
        let l =document.createElement("label");
        l.innerHTML="Izlistaj knjige zanra:"
        d.appendChild(l);

        let list= Array.from(new Set(this.listaZanr));
        console.log(list);

        let se = document.createElement("select");
        d.appendChild(se);

        let op;
        list.forEach((zanr,index) => {
            op=document.createElement("option");
            op.innerHTML=zanr;
            op.value=zanr;
            se.appendChild(op);
        });

        let btnIzlistaj = document.createElement("button");
        btnIzlistaj.innerHTML="Izlistaj";
        btnIzlistaj.onclick=(ev)=>this.IzlistajKnjige();
        d.appendChild(btnIzlistaj);

        d=document.createElement("div");
        host.appendChild(d);
        let pD =document.createElement("input");
        pD.type="text";
        pD.className="imePoliceDodaj";
        d.appendChild(pD);

        let btnDodajPolicu = document.createElement("button");
        btnDodajPolicu.innerHTML="Dodaj policu";
        btnDodajPolicu.onclick=(ev)=>this.dodajPolicu(pD.value);
        d.appendChild(btnDodajPolicu);

        d=document.createElement("div");
        host.appendChild(d);
        let pI =document.createElement("input");
        pI.type="text";
        pI.className="imePoliceIzbrisi";
        d.appendChild(pI);

        let btnIzbrisiPolicu = document.createElement("button");
        btnIzbrisiPolicu.innerHTML="Izbrisi policu";
        btnIzbrisiPolicu.onclick=(ev)=>this.izbrisiPolicu(pI.value);
        d.appendChild(btnIzbrisiPolicu);

        d=document.createElement("div");
        host.appendChild(d);
        l =document.createElement("label");
        l.innerHTML="Dodaj knjigu:";
        d.appendChild(l);
        let pK =document.createElement("input");
        pK.type="text";
        pK.className="knjigaInput";
        d.appendChild(pK);
        d=document.createElement("div");
        host.appendChild(d);
        l =document.createElement("label");
        l.innerHTML="na policu:";
        d.appendChild(l);
        let pP =document.createElement("input");
        pP.type="text";
        pP.className="policaInput";
        d.appendChild(pP);

        d=document.createElement("div");
        host.appendChild(d);
        let btnDodajKnjigu = document.createElement("button");
        btnDodajKnjigu.innerHTML="Dodaj";
        btnDodajKnjigu.onclick=(ev)=>this.dodajKnjigu(pK.value,pP.value);
        d.appendChild(btnDodajKnjigu);

        d=document.createElement("div");
        host.appendChild(d);
        l =document.createElement("label");
        l.innerHTML="Promeni ime police:";
        d.appendChild(l);
        let p =document.createElement("input");
        p.type="text";
        p.className="promeniPolInput1";
        d.appendChild(p);
        d=document.createElement("div");
        host.appendChild(d);
        l =document.createElement("label");
        l.innerHTML="u:";
        d.appendChild(l);
        var p2 =document.createElement("input");
        p2.type="text";
        p2.className="promeniPolinput2";
        d.appendChild(p2);

        d=document.createElement("div");
        host.appendChild(d);
        let btnPromeni = document.createElement("button");
        btnPromeni.innerHTML="Promeni";
        btnPromeni.onclick=(ev)=>this.promeniPolicu(p.value,p2.value);
        d.appendChild(btnPromeni);
    }

    dodajPolicu(imee)
    {
        if(imee===""){
            alert("unesite naziv police");
            return;
        }
        var id;
        fetch("https://localhost:5001/Polica/DodajPolicu/"+imee,
        {
            method:"POST"
        }).then(s=>
            {
                if(s.ok){
                    s.json().then(data=>
                        {
                            console.log(data);
                            id=data;
                            var pol=new Polica(imee,this.kont,id);
                            var host=this.kont.querySelector(".desniKont");
                            this.listaPolica.push(pol);
                            console.log(this.listaPolica);
                            pol.crtaj(host);
                        })
                }
            })
    }

    promeniPolicu(polica1,polica2)
    {
        console.log(polica1);
        console.log(polica2);
        let id;
        let listKnjiga=[];
        fetch("https://localhost:5001/Polica/PreuzmiSve")
        .then(p=>{
            p.json().then(police=>{
                    police.forEach(polica =>{
                    var p = polica;
                    if(polica1===p.ime){
                        id=p.id;
                    }
                })
                if(id===""||id===undefined||id===null){
                    alert("unesite policu koja vec postoji");
                    return;
                }
                fetch("https://localhost:5001/Polica/PromeniPolicu/"+id+"/"+polica2,
                    {
                        method:"PUT"
                    })


                this.listaPolica.forEach(el=>
                    {
                        if(el.ime===polica1)
                        el.ime=polica2;
                    })
                    this.crtajPonovoPolice();
            })
        })
    }

    izbrisiPolicu(imee)
    {
        console.log(imee);
        let ind;
        fetch("https://localhost:5001/Polica/PreuzmiSve")
        .then(p=>{
            p.json().then(police=>{
                    police.forEach(polica =>{
                    var p = polica;
                    if(imee==p.ime){
                        var rez=this.nalaziSeNaPolici(p.id);
                        console.log(rez);
                        if(this.nalaziSeNaPolici(p.id))
                        {
                        ind=p.id;
                        var res=[];
                        this.listaPolica.forEach(el=>
                            {
                                if(el.ime===imee);
                                else
                                {
                                    res.push(el);
                                }
                            })
                        console.log(res);
                        this.listaPolica=res;
                        console.log(this.listaPolica);
                    }
                    }
                })
                if(ind===""||ind===undefined||ind===null){
                    alert("unesite policu koja vec postoji");
                    return;
                }
                console.log(ind);
                this.crtajPonovoPolice();
                fetch("https://localhost:5001/Polica/IzbrisiPolicu/"+ind,
                    {
                        method:"DELETE"
                    })
         })
        })
    }

    nalaziSeNaPolici(id){
        var lista=[];
        this.listaPolica.forEach(el=>
            {
                lista.push(el.id);
            });
        if(lista.includes(id))
        return true;
        else return false;
    }

    dodajKnjigu(knjiga,polica){
        var pom=[];
        this.listaPolica.forEach(el=>{
            pom.push(el.ime)
        });
        if(!pom.includes(polica))
        {
            alert("unesite policu koja postoji");
            return;
        }

        this.listaPolica.forEach(el=>{
            if(el.ime===polica)
            el.novaKnjiga(knjiga,this.kont);
        });

    }

    crtajPonovoPolice(){
        var roditelj=this.kontDesni.parentNode;
        roditelj.removeChild(this.kontDesni);
        this.kontDesni=document.createElement("div");
        this.kontDesni.className="desniKont";
        this.kont.appendChild(this.kontDesni);

        var x=this.kont.querySelector(".infoKont");
        var roditelj2=x.parentNode;
        roditelj2.removeChild(x);
        x=document.createElement("div");
        x.className="infoKont";
        this.kont.appendChild(x);
        this.infoKont=x;
        this.listaPolica.forEach(el=>
            {
                el.crtaj(this.kontDesni);
            })
    }



    IzlistajKnjige(){

        let optionEl=this.kont.querySelector("select");
        var zanr=optionEl.options[optionEl.selectedIndex].value;

        var zaPrikaz=this.obrisiPrethodniSadrzaj();
        var listaKnjiga=[];
        fetch("https://localhost:5001/Knjiga/Preuzmi/"+zanr,
        {
            method:"GET"
        }).then(s=>
            {
                if(s.ok){
                    s.json().then(data=>
                        {
                            console.log(data);
                            this.nacrtajTabelu(zaPrikaz,data);
                        })
                }
            })
        
    }

    nacrtajTabelu(host,data)
    {

        var tr;
        var el;
        data.forEach(elem=>{
            tr=document.createElement("tr");
            host.appendChild(tr);
            el=document.createElement("td");
            el.innerHTML=elem.naziv;
            tr.appendChild(el);
            el=document.createElement("td");
            el.innerHTML=elem.zanr;
            tr.appendChild(el);
        })
    }

    obrisiPrethodniSadrzaj()
        {
            var zaPrikaz=this.kont.querySelector(".tabelaBody");
            console.log(zaPrikaz);
            var roditelj=zaPrikaz.parentNode;
            roditelj.removeChild(zaPrikaz);
            zaPrikaz=document.createElement("tbody");
            zaPrikaz.className="tabelaBody";
            roditelj.appendChild(zaPrikaz)
            return zaPrikaz;
        }
}