import React, {useEffect} from 'react'
import Smurf from './Smurf';
import {fetchSmurfs} from '../actions/index'
import {connect} from 'react-redux';

 const SmurfList = (props)=> {

    useEffect(() => {
        props.fetchSmurfs();
    }, [])

   

    return(
    <div className="listContainer"> 
     {props.isLoading ? <h3>Loading data...</h3>:
        props.smurfs.map((smurf)=>{
        return(<Smurf smurf={smurf}/>)
            })}
    </div>
    );
}



const mapStateToProps =(state)=>{
    return{
        isLoading: state.isLoading,
        errorMessage: state.errorMessage,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps,{fetchSmurfs})(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.