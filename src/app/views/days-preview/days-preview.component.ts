import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { fromRoot } from 'src/app/store';
import * as moment from 'moment';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-days-preview',
  templateUrl: './days-preview.component.html',
  styleUrls: ['./days-preview.component.scss']
})
export class DaysPreviewComponent implements OnInit {
  dailyImages: Array<any> = [];
  constructor(private nasaDailyStore: Store<{nasaDailyState: any}>, private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    //Cargamos las publicaciones
    this.getLastDailyImages();
  }

  getLastDailyImages(){
    //Llamamos al action del reducer y suscribimos
    this.nasaDailyStore.dispatch(fromRoot.NasaDailyActions.ApiGetDayPicture({day: moment().format('YYYY-MM-DD')}));
    this.nasaDailyStore.subscribe(a => a.nasaDailyState.error?this._snackBar.open('Hubo un error cargando las publicaciones', 'Aceptar',{duration: 7000}):this.dailyImages = a.nasaDailyState.data);
  }

  //Formatea una fecha
  formatDate(date: string){
    return moment(date).format('DD-MM-YYYY');
  }

}