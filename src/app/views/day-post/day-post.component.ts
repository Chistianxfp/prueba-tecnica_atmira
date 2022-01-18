import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { fromRoot } from 'src/app/store';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-day-post',
  templateUrl: './day-post.component.html',
  styleUrls: ['./day-post.component.scss']
})
export class DayPostComponent implements OnInit {
  dayPost: any = null;
  constructor(private nasaDailyStore: Store<{nasaDailyState: any}>, private router: Router, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    //Recogemos la fecha a consultar de la ruta
    this.route.paramMap.subscribe(
			(params) => {
        if(params.get('date')){
          const date = params.get('date');
          if(date){
            //Recogemos la publicación
            this.getDayPost(date);
          }else{
            //Volvemos al dashboard
            this.router.navigate(['/']);
          }
        }
			}
		);
  }

  getDayPost(date: string){
    //Llamamos al action del reducer y suscribimos
    this.nasaDailyStore.dispatch(fromRoot.NasaDailyActions.ApiGetDayPost({day: moment(date).format('YYYY-MM-DD')}));
    this.nasaDailyStore.subscribe(a => a.nasaDailyState.error?this._snackBar.open('Hubo un error cargando la publicación', 'Aceptar',{duration: 7000}):this.dayPost = a.nasaDailyState.data?a.nasaDailyState.data:null);
  }

  //Formatea una fecha
  formatDate(date: string){
    return moment(date).format('DD-MM-YYYY');
  }

}