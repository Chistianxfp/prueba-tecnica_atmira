import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class NasaDailyService {

  constructor(private http: HttpClient) {}

  getDayPicture(requestDate: string) {
		const url = `https://api.nasa.gov/planetary/apod?api_key=${environment.nasa_api_key}&start_date=${moment(requestDate).subtract(5, 'days').format('YYYY-MM-DD')}&end_date=${requestDate}`;

		return new Observable<any>(observer => {
			this.http.get(url).subscribe({
				next: (v) => observer.next(v),
				error: (e) => observer.error("No hemos encontrado lo que buscas")
			});

			return { unsubscribe() { } };
		});
	}

	getDayPost(requestDate: string){
		const url = `https://api.nasa.gov/planetary/apod?api_key=${environment.nasa_api_key}&date=${requestDate}`;

		return new Observable<any>(observer => {
			this.http.get(url).subscribe({
				next: (v) => observer.next(v),
				error: (e) => observer.error("No hemos encontrado lo que buscas")
			});

			return { unsubscribe() { } };
		});
	}
}
