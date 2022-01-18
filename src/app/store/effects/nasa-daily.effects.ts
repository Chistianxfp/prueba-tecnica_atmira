import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, of } from "rxjs";
import { NasaDailyService } from "src/app/services/nasa-daily.service";
import * as nasaDailyActions from 'src/app/store/actions/nasa-daily.actions';

@Injectable()
export class NasaDailyEffects{
    constructor(private actions$: Actions, private NasaDailySvc: NasaDailyService){}

    getNasaDailyDataEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(nasaDailyActions.ApiGetDayPicture),
            mergeMap((action) => {
                return this.NasaDailySvc.getDayPicture(action.day).pipe(
                    map(res => nasaDailyActions.ApiSuccess({data: res})),
                    catchError(error => of(nasaDailyActions.ApiError({error})))
                );
            })
        );
    });

    getNasaPostEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(nasaDailyActions.ApiGetDayPost),
            mergeMap((action) => {
                return this.NasaDailySvc.getDayPost(action.day).pipe(
                    map(res => nasaDailyActions.ApiSuccess({data: res})),
                    catchError(error => of(nasaDailyActions.ApiError({error})))
                );
            })
        );
    });
}