import { createAction, props } from "@ngrx/store";

export const ApiGetDayPicture = createAction('API GET DAILY PICTURE', props<{day: string}>());
export const ApiGetDayPost = createAction('API GET DAY POST', props<{day: string}>());

export const ApiSuccess = createAction('API SUCCESS', props<{data: any}>());
export const ApiError = createAction('API ERROR', props<{error: any}>());