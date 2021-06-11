import { FETCH_SMURF, FETCH_SUCCESS, FETCH_FAILED_SMURF, ADD_SMURF, SMURF_ERROR } from '../actions/index'


export const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case(FETCH_SMURF):
            return({ ...state, isFetching: true,
            })
        case(FETCH_SUCCESS):
            return({   ...state, smurfs: action.payload, isFetching: false,
            })
        case(FETCH_FAILED_SMURF):
            return({...state,error: action.payload, isFetching: false
            })
        case(ADD_SMURF):
            return({
                ...state,smurfs: [...state.smurfs, {...action.payload,isFetching: true, id: Date.now()}] // I've tried to add an isFetching here to get a loading status for each new entry.  
            })
        case(SMURF_ERROR):
            return({  ...state,  error: action.payload
            })
        default:
            return state;
    }
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.