import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servizi/api.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-scuola',
  standalone: true,
  imports: [],
  templateUrl: './scuola.component.html',
  styleUrl: './scuola.component.css',
  
})
export class ScuolaComponent implements OnInit{

  @Input() scuola: any;

  constructor(private api: ApiService) { }
  dataScuole: any;

  ngOnInit(): void {
    this.api.searchDataSchools("schools").subscribe((data) => {
      this.dataScuole = data.data;
    });
  }

}
