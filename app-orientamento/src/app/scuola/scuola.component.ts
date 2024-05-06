import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servizi/api.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-scuola',
  standalone: true,
  imports: [],
  templateUrl: './scuola.component.html',
  styleUrl: './scuola.component.css'
})
export class ScuolaComponent implements OnInit{

  @Input() scuola: any;
  percorsoImg!: string;
  
  ngOnInit(): void {
    this.percorsoImg = "../../assets/loghiScuole/" + this.scuola.logo  + "1.png";
    console.log(this.scuola.logo);
  }

}
