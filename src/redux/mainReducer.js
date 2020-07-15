import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView78584Reducer from '../features/CalendarView78584/redux/reducers';
import EmailAuth78583Reducer from '../features/EmailAuth78583/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView78584: CalendarView78584Reducer,
EmailAuth78583: EmailAuth78583Reducer,

});