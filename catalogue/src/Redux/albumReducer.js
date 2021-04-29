import { ADD_ALBUM, ALBUM_FAILED, ALBUM_LOADING } from "./Actions";
import { ALBUMS } from '../shared/albums';

export const Albums = (state = {
    isLoading: true,
    errMsg: null,
    albums: []}, action) => {
    switch(action.type){
        case ADD_ALBUM:
            return {...state, isLoading: false, errMsg: null, albums: action.payload};
        case ALBUM_LOADING:
            return {...state, isLoading: true, errMsg: null, albums: []};
        case ALBUM_FAILED:
            return {...state, isLoading: false, errMsg: action.payload, albums: [] };
        default:
            return state;
    }
}