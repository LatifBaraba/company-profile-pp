import { GET_ALBUM, 
    GET_ALBUM_SUCCESS, 
    GET_ALBUM_FAILURE,
    } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/album/list`;

export function fetchAlbum(token) {
    return (dispatch) => {
        axios(URL, {
            method: 'POST',
            data: {
                limit: "100",
                offset: "0",
                filters: [
                    {
                        field: "is_deleted",
                        keyword: "false"
                    }
                ],
                order: "created_at",
                sort: "ASC",
                created_at_from: "",
                created_at_to: "",
                publish_at_from: "",
                publish_at_to: ""
            },
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
        .then(res => {
            dispatch(getAlbumSuccess(res.data.data));
        })
        .catch(err => {
            console.log(err)
            dispatch(getAlbumFailure(err));
        });
    };
};

// Get Album
const getAlbumSuccess = (payload) => ({
type: GET_ALBUM_SUCCESS,
payload
});

const getAlbumFailure = () => ({
type: GET_ALBUM_FAILURE
});

const getAlbum = () => ({
type: GET_ALBUM
});