import React, {useState} from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({value})=>{

    //HOOKS

    const [counter, setCounter]=useState(0)

    //Regresa un arreglo
    //console.log(nombre,setNombre);

    const fn_clickNext = () =>{
        //console.log(ev)
        setCounter(counter+1)
    }

    const fn_clickPrev = () =>{
        //console.log(ev)
        setCounter(counter-1)
    }

    return (<>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>

        {/* Evento click */}
        <button onClick={fn_clickPrev}>-1</button>
        <button onClick={()=> setCounter(value)}>Reset</button>
        <button onClick={fn_clickNext}>+1</button>

    </>)
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;

//rafcp
