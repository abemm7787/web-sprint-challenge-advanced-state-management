import axios from 'axios';
// THUNK
export const FETCH_SMURF = "FETCH_SMURF";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILED_SMURF = "FETCH_FAILED_SMURF";

// STANDARD ACTION
export const ADD_SMURF = "ADD_SMURF";
export const SMURF_ERROR = "SMURF_ERROR";


// Thunk action to display a list of smurf, loading status, and an error if the fetch fails.
export const fetchSmurfs = () => {
    return (dispatch => {
        dispatch({type: FETCH_SMURF});
    
        axios.get('http://localhost:3333/smurfs')
          .then(res => {
            dispatch({type: FETCH_SUCCESS, payload:res.data});
          })
          .catch(error =>{
            dispatch({type: FETCH_FAILED_SMURF, payload:error});
          })
    });
}

export const addSmurf = (smurf) => {
    return ({type:ADD_SMURF, payload:smurf})
}

export const fetchStart = () => {
    return({type:FETCH_SMURF});
}

export const fetchSuccess = (smurfs) => {
    return({type:FETCH_SUCCESS, payload:smurfs});
}

export const fetchFail = (error) => {
    return({type:FETCH_FAILED_SMURF, payload:error});
}

export const setError = (error) => {
    return({type:SMURF_ERROR, payload:error})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.