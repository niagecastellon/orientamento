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

  tipoLicei:string = "licei";
  tipoTecnici:string = "tecnici";
  tipoProfessionali:string = "professionali";

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
        if (this.data[i].attributes.tipo.includes("Professionale")) {
          this.professionali.push(this.data[i]);
        }
      }

      console.log(this.licei);
      console.log(this.tecnici);
      console.log(this.professionali);

    });
  }
}