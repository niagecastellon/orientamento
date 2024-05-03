import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servizi/api.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-scuola',
  standalone: true,
  imports: [],
  templateUrl: './scuola.component.html',
  styleUrl: './scuola.component.css',
  
})
export class ScuolaComponent implements OnInit{

  constructor(private api: ApiService) { }
  dataScuole: any;
  visible: boolean = false;

  ngOnInit(): void {
    this.api.searchDataSchools("schools").subscribe((data) => {
      this.dataScuole = data.data;
      console.log(this.dataScuole[0]);
    });
  }

  proca(): void{
    console.log("proca");
    this.visible = !this.visible;
  }


}
