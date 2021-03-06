import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js';

let nextSeqId = 0;

export const fetchWeatherStarted = () => ({
    type : FETCH_STARTED,
});

export const fetchWeatherSuccess = (result) => ({
    type : FETCH_SUCCESS,
    result
});

export const fetchWeatherFailure = (error)=> ({
    type : FETCH_FAILURE,
    error
});

export const fetchWeather = (cityCode) => {
    return (dispatch) => {
        const apiUrl = `/data/cityinfo/${cityCode}.html`;
        const seqId = ++nextSeqId;
        const dispatchIfVaild = (action) => {
            if(seqId === nextSeqId){
                return dispatch(action);
            }
        }

        dispatchIfVaild(fetchWeatherStarted());

        fetch(apiUrl).then((response) => {
            if(response.status !== 200){
                throw new Error('Failed to get response with status ' + response.status);
            }
            response.json().then((responseJson) => {
                dispatchIfVaild(fetchWeatherSuccess(responseJson.weatherinfo));
            }).catch((error) => {
                dispatchIfVaild(fetchWeatherFailure(error));
            });
        });
    };
}