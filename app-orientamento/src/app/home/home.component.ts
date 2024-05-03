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


  ngOnInit(): void {
    this.api.searchDataSchools("schools").subscribe((data) => {
      this.data = data.data;
    });

    this.licei.push(this.data[0]);
    this.licei.push(this.data[2]);
    this.licei.push(this.data[5]);
    this.licei.push(this.data[6]);

    this.tecnici.push(this.data[1]);
    this.tecnici.push(this.data[3]);
    this.tecnici.push(this.data[4]);  

    this.professionali.push(this.data[3]);
    this.professionali.push(this.data[7]);
    this.professionali.push(this.data[8]);
    this.professionali.push(this.data[9]);

    console.log(this.licei);
    console.log(this.tecnici);
    console.log(this.professionali);
  }
  
}
