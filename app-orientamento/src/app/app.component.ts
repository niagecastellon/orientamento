import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ScuolaComponent } from './scuola/scuola.component';
import { MappaComponent } from './mappa/mappa.component';
import { TipoScuolaComponent } from './tipo-scuola/tipo-scuola.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ScuolaComponent, MappaComponent, TipoScuolaComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-orientamento';
}
