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

ngOnInit(): void {
  this.checkTipo();
}

str?: string;

checkTipo(): void {
  if (this.tipo == "licei") {
    this.str = `La scelta di un liceo garantirebbe una prosecuzione degli studi all'università
    ma anche l’inserimento nella vita sociale e nel mondo del lavoro.`;
    this.liceo = true;
  }
  if (this.tipo == "tecnici") {
    this.str = `La frequentazione di un istituto tecnico coinvolgerebbe 
    lo studente nel mondo del lavoro e garantirebbe l’ accesso all’università o all’istruzione
     e formazione tecnica superiore.`
    this.tecnico = true;
  }
  if (this.tipo == "professionali") {
    this.str = `Un istituto professionale permetterebbe allo studente di
    acquisire competenze professionali e di inserirsi nel mondo del lavoro.`
    this.professionale = true;
  }
  if (this.tipo == "istituti professionali") {
    this.str = `Un istituto professionale porterebbe lo studente a 
    un rapido inserimento nel mondo del lavoro, ma anche per l’accesso 
    all'università e all'istruzione e formazione tecnica superiore.`
    this.istProf = true;
  }
  if (this.tipo == "quadriennali") {
    this.str = `Un istituto quadriennale è un percorso di studi che
    permette di conseguire un diploma di istruzione secondaria superiore
    in quattro anni, a differenza di altre scuole che richiedono cinque anni.`
    this.quadriennali = true;
  }
}

}