import { Component, Input, OnInit } from '@angular/core';
import { ScuolaComponent } from '../scuola/scuola.component';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-tipo-scuola',
  standalone: true,
  imports: [ScuolaComponent, CommonModule, NgStyle],
  templateUrl: './tipo-scuola.component.html',
  styleUrl: './tipo-scuola.component.css'
})
export class TipoScuolaComponent implements OnInit {

@Input() scuole: any;

@Input() tipo!: string;

liceo: boolean = false;
tecnico: boolean = false;
professionale: boolean = false;
quadriennali: boolean = false;
istProf: boolean = false;

// @Input() colori!: string[];

// colore1!: string;
// colore2!: string;

ngOnInit(): void {
  // console.log(this.colori);
  // this.colore1 = this.colori[0];
  // this.colore2 = this.colori[1];
  this.checkTipo();
}

checkTipo(): void {
  if (this.tipo == "licei") {
    this.liceo = true;
  }
  if (this.tipo == "tecnici") {
    this.tecnico = true;
  }
  if (this.tipo == "professionali") {
    this.professionale = true;
  }
  if (this.tipo == "istituti professionali") {
    this.istProf = true;
  }
  if (this.tipo == "quadriennali") {
    this.quadriennali = true;
  }
}

}

