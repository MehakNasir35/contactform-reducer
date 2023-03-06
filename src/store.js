import { combineReducers, createStore } from "redux";
import cardDetailReducer from './components/CardContact/CardContact.reducer';

export const store = createStore(combineReducers({ cardDetailReducer }));
