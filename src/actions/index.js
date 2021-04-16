import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
export const ADDING_SMURF_DATA = "ADDING_SMURF_DATA";
export const ERROR_MESSAGE = "ERROR_MESSAGE"

export const fetchSmurfs =() => {
    return(dispatch) =>{
        dispatch({type:FETCH_START})
        axios.get('http://localhost:3333/smurfs')
        .then((res) =>{
            console.log(res.data)
            dispatch({type:FETCH_SMURFS_SUCCESS, payload: res.data}) //added payload 
        })
        .catch((err)=>{
            dispatch({type:FETCH_SMURFS_FAILURE, payload: err.message})
        })
    }
}
export const addSmurf =(data) => {
    return({type:ADDING_SMURF_DATA, payload:data});
}

export const errorMessage =(message) => {
    return({type:ERROR_MESSAGE, payload:message});
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.