import { createReducer, on } from "@ngrx/store";
import { ApiSuccess, ApiError } from "../actions/nasa-daily.actions";

export interface NasaDailyState {
    data: any;
    error: any;
}

const initialState: NasaDailyState = {
    data: null,
    error: null
}

export const NasaDailyReducer = createReducer(initialState,
    on(ApiError, (state, action) => ({data: null, error: action.error})),
    on(ApiSuccess, (state, action) => ({data: action.data, error: null}))
)