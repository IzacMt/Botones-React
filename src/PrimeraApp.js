//FC
import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ({saludo,predeterminado} ) => {

    //const saludo='Mensaje de variable';
    /* const objetoTry ={
        nombre: 'Izac',
        id:12345
    } */

    return (
      <>
          <h1>Hola, soy una variable: {saludo}</h1>
          <p>{predeterminado}</p>
          {/* <p>Este es un objeto: </p>
          <pre>{JSON.stringify(objetoTry.nombre,null,3)}</pre> */}

      </>
    );
}


PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

//Props Default

PrimeraApp.defaultProps = {
    predeterminado : 'Este es el Prop Predeterminado'
}

export default PrimeraApp;