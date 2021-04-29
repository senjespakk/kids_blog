import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Albums } from "./albumReducer";
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            albums: Albums
        }),
        applyMiddleware(thunk)
    );
    return store;
}