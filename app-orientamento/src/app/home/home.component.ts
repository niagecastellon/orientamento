import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TipoScuolaComponent } from '../tipo-scuola/tipo-scuola.component';
import { ApiService } from '../servizi/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, TipoScuolaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private api: ApiService) { }

  data: any;
  licei: any[] = [];  
  tecnici: any[] = [];
  professionali: any = [];
  quadriennali: any = [];
  istProf: any = [];

  tipoLicei:string = "licei";
  tipoTecnici:string = "tecnici";
  tipoProfessionali:string = "professionali";
  tipoIstProf:string = "istituti professionali";
  tipoQuadriennali:string = "quadriennali";

  /*
  Liceo
  Istituto Tecnico Tecnologico
  Istituto Tecnico e Professionale
  Istituo Tecnico Economico Tecnologico
  Liceo Internazionale
  Professionale
  */

  ngOnInit(): void {
    this.api.searchDataSchools().subscribe((data) => {
      this.data = data.data;

      console.log(data);

      // console.log(this.data);
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].attributes.tipo.includes("Liceo")) {
          this.licei.push(this.data[i]);
        }
        if (this.data[i].attributes.tipo.includes("Istituto Tecnico")) {
          this.tecnici.push(this.data[i]);
        }
        if (this.data[i].attributes.tipo.includes("Scuola Professionale")) {
          this.professionali.push(this.data[i]);
        }
        if (this.data[i].attributes.tipo.includes("Istituto Professionale")) {
          this.istProf.push(this.data[i]);
        }
        if (this.data[i].attributes.tipo.includes("Quadriennale")) {
          this.quadriennali.push(this.data[i]);
        }
      }

      console.log("licei " + this.licei);
      console.log("tec " + this.tecnici);
      console.log("prof " + this.professionali);
      console.log("ist " + this.istProf);
      console.log("quad " + this.quadriennali);

    });
  }
}


//tocken = 1c61a26fefc70cfe00fd14f115dcd9fffe09434c1119e6811f361ee767ca34d235ce90e63884b7a2eb663931cb8f90e65c37f8e34ac9ce13a3653f08c85da8d1a4048168c0697593ed516378fc7685a0a972feb7de278477ca5a6c75baa4f9e87014fecffbdee392ec0f8012b22e0889ffc099b14562f8e44c7aec2f1c3580e2