import { NasaDailyReducer } from "./reducers/nasa-daily.reducer";
import * as NasaDailyActions from "./actions/nasa-daily.actions";
import { NasaDailyEffects } from "./effects/nasa-daily.effects";
import { getStateData } from "./selectors/nasa-daily.selector";

export const fromRoot = {
    NasaDailyActions,
    NasaDailyEffects,
    NasaDailyReducer,
    getStateData
};