import { createSelector } from "@ngrx/store";
import { NasaDailyState } from "../reducers/nasa-daily.reducer";

const getData = (state: NasaDailyState): any => state.data;

const getStateData = createSelector(
    (state: {nasaDailyState: NasaDailyState}) => state.nasaDailyState,
    getData
);

export {getStateData};