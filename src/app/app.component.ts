import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prueba Atmira';

  constructor(){
    //Ponemos el formato de fecha en castellano
    moment.locale('es');
  }
}