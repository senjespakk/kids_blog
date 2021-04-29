import { baseUrl } from '../shared/baseUrl';
import { ADD_ALBUM, ALBUM_FAILED, ALBUM_LOADING } from "./Actions";
import { ALBUMS } from "../shared/albums";

export const fetchAlbum = () => (dispatch) => {
    dispatch(albumLoading(true));
    setTimeout(() => {
        dispatch(addAlbums(ALBUMS));
    }, 4000);
    // return fetch(baseUrl)
    //     .then((response) => {
    //         if (response.ok){
    //             return response;
    //         }
    //         else {
    //             var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //             error.response = response;
    //             throw error;
    //         }
            
    //     },
    //     (error) => {
    //         var errMess = new Error(error.message);
    //         throw errMess;
    //     })
    //     .then((response) => response.json())
    //     .then((albums) => dispatch(addAlbums(albums)))
    //     .then((error) => dispatch(albumFailed(error.message)));
}

export const albumLoading = () => ({
    type: ALBUM_LOADING
});

export const albumFailed = (errMsg) => ({
    type: ALBUM_FAILED,
    payload: errMsg
});

export const addAlbums = (albums) => ({
    type: ADD_ALBUM,
    payload: albums
});
