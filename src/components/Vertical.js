
import React, { useContext } from 'react'
import { Text } from 'react-native'
import {View } from 'dripsy'
import { EmpContext } from '../utils/EmpContext'
import Presentacion from '../screens/Presentacion';
import Activo from '../screens/Activo';
import { ScannerQR } from '../screens/ScannerQR';

const Vertical = () => {

    const datosContext = useContext(EmpContext);
    const {screen } = datosContext;

    return (
        <View>
            {/* <Text> Hola Vertical {JSON.stringify(screen)} </Text> */}
            {(screen === 0) ? <Presentacion /> 
                : (screen === 1) ? <ScannerQR /> 
    
                : (screen === 2) ? <Activo />
                                           
                : <Text> Hola de nuevo</Text> }

        </View>

  
    )
}

export default Vertical;
