import { combineReducers, createStore } from "redux";
import cardDetailReducer from './components/CardContact/CardContact.reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

export const store = createStore (combineReducers({ cardDetailReducer }), composeWithDevTools ());
