export class Knjiga
{
    constructor(id,naziv,kont)
    {
        this.kontGlavni=kont;
        this.id=id;
        this.naziv=naziv;
    }

    nacrtajKnjigu(host,infoKont){

        let d= document.createElement("div");
        host.appendChild(d);
        d.className="elementKnjiga";
        let d2=document.createElement("div");
        d2.className="knjiga";
        d2.innerHTML=this.naziv;
        d.value=this.id;
        d.appendChild(d2);
        let btnInfo=document.createElement("button");
        btnInfo.innerHTML="info";
        btnInfo.className="knjigaInfo";
        d.appendChild(btnInfo);
        btnInfo.onclick=(ev)=>this.knjigaInfo(infoKont);

    }

    knjigaInfo(infoKont){
        fetch("https://localhost:5001/Spoj/PreuzmiAutorKnjiga/"+this.id,
        {
            method:"GET"
        }).then(s=>
            {
                if(s.ok)
                {
                    s.json().then(data=>{
                        console.log(data);
                        this.crtajInfo(data,infoKont);
                    })
                }
            })
    }

    crtajInfo(data,infoKont)
    {
        /* var roditelj=this.kont.parentNode;
        console.log(roditelj);
        roditelj.removeChild(infoKont);
        infoKont=document.createElement("div");
        infoKont.className="infoKont";
        roditelj.appendChild(infoKont); */
        var el=this.kontGlavni.querySelector(".infoKont");
        var roditelj=el.parentNode;
        roditelj.removeChild(el);
        el=document.createElement("div");
        el.className="infoKont";
        roditelj.appendChild(el);

        infoKont=el;
        var div = document.createElement("div");
        div.className="infoDiv";
        infoKont.appendChild(div);
        var d=document.createElement("div");
        div.appendChild(d)
        var l=document.createElement("label");
        l.innerHTML="Naziv:";
        var l2=document.createElement("label");
        l2.innerHTML=data[0].imeKnjige;
        d.appendChild(l);
        d.appendChild(l2);

        d=document.createElement("div");
        div.appendChild(d);
        l=document.createElement("label");
        l.innerHTML="Zanr:";
        l2=document.createElement("label");
        l2.innerHTML=data[0].zanr;
        d.appendChild(l);
        d.appendChild(l2);

        d=document.createElement("div");
        div.appendChild(d);
        l=document.createElement("label");
        l.innerHTML="Godina izdanja:";
        l2=document.createElement("label");
        l2.innerHTML=data[0].godinaIzdanja;
        d.appendChild(l);
        d.appendChild(l2);

        d=document.createElement("div");
        div.appendChild(d);
        l=document.createElement("label");
        l.innerHTML="Ime autora:";
        l2=document.createElement("label");
        l2.innerHTML=data[0].imeAutora;
        d.appendChild(l);
        d.appendChild(l2);

        d=document.createElement("div");
        div.appendChild(d);
        l=document.createElement("label");
        l.innerHTML="Prezime autora:";
        l2=document.createElement("label");
        l2.innerHTML=data[0].prezimeAutora;
        d.appendChild(l);
        d.appendChild(l2);

        d=document.createElement("div");
        div.appendChild(d);
        l=document.createElement("label");
        l.innerHTML="Godina rodjenja:";
        l2=document.createElement("label");
        l2.innerHTML=data[0].godinaRodjenja;
        d.appendChild(l);
        d.appendChild(l2);

        d=document.createElement("div");
        div.appendChild(d);
        l=document.createElement("label");
        l.innerHTML="Godina smrti:";
        l2=document.createElement("label");
        l2.innerHTML=data[0].godinaSmrti;
        d.appendChild(l);
        d.appendChild(l2);

    }
}