import { Component, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ScuolaComponent } from '../scuola/scuola.component';
import { ApiService } from '../servizi/api.service';

@Component({
  selector: 'app-tipo-scuola',
  standalone: true,
  imports: [ScuolaComponent],
  templateUrl: './tipo-scuola.component.html',
  styleUrl: './tipo-scuola.component.css'
})
export class TipoScuolaComponent implements OnInit{

  @Input() scuole: any;

  ngOnInit(): void {

  }

}

  // constructor(private api: ApiService) { }

  // tipiScuole = ["Liceo", "Istituto tecnico", "Professionale"];
  // Licei: string[] = [];
  // Tecnici: string[] = [];
  // Professionali: string[] = [];

      // this.api.searchDataSchools("schools").subscribe((data) => {
      //   data = data.data;
      //   // console.log(data);
      //   for(let i = 0; i < data.length; i++){
      //     if(data[i].attributes.tipo == "Liceo"){
      //       this.Licei.push(data[i].attributes);
      //     }
      //     else if("Istituto Tecnico" in data[i].attributes.tipo){
      //       this.Tecnici.push(data[i].attributes);
      //     }
      //     else if(data[i].attributes.tipo == "Professionale"){
      //       this.Professionali.push(data[i].attributes);
      //     }
      //   }
      //   console.log(this.Licei);
      //   console.log(this.Tecnici);
      //   console.log(this.Professionali);
      // });