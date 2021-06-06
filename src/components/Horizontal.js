import React, { useContext } from 'react';
import { Text } from 'react-native';
import { EmpContext } from '../utils/EmpContext';
import Presentacion from '../screens/Presentacion';
import Activo from '../screens/Activo';
import { ScannerQR } from '../screens/ScannerQR';


const Horizontal = () => {
    
    const datosContext = useContext(EmpContext);
    const {screen} = datosContext;

    return (
        <>
            {/* <Text> Hola Vertical {JSON.stringify(screen)} </Text> */}

        {(screen === 0) ? <Presentacion /> 
            : (screen === 1) ? <ScannerQR /> 

            : (screen === 2) ? <Activo />
                                       
            : <Text> Hola de nuevo</Text> }
        </>

    )
}

export default Horizontal;


