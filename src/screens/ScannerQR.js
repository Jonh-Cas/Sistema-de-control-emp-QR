'use strict';

import React, { useContext, useEffect, useState } from 'react';
import { View } from 'dripsy'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';
import { EmpContext } from '../utils/EmpContext';


 const ScannerQR = () => {
  
  const datosContext = useContext(EmpContext);
  const { orientacion, state, empleado, setScreen, setState, setEmpleado } = datosContext;
  const [camara, setCamara] = useState(false); 


   const verificacionQR = ( url ) => {
    try {
       const {emp_status} = url;
       setEmpleado({...url});
       (emp_status === 'activo')? setScreen(2) : (emp_status === 'inactivo')
                                ? setScreen(3) : setScreen(4) 
    } catch (error) {
      setScreen(5)
      console.log('error: ', error );
    }
   }

   const readScanner = async (e) => {
     setState(false);
     const url = await axios.get(e.data)
                            .then(Response => Response.data )
                            .catch(err => {console.log('Error url:', err) });
     console.log('valor: ', typeof url);                      
     verificacionQR(url);
   } 

    return (
      <View sx={{ 
        justifyContent: 'center',
        alignSelf: 'center',  
      }}
       >
        <QRCodeScanner
        onRead={readScanner}
        flashMode={RNCamera.Constants.FlashMode.off}
        permissionDialogMessage='Necesitas permiso para acceder a la camara'
        reactivateTimeout={3500}
        showMarker={true}
        reactivate={state}
        fadeIn={camara}
        markerStyle={{
          alignContent: 'center',
        }}

        />

     </View>
    );
}

export default  ScannerQR; 

const styles = {
    marcoQRH: {       

    }


}





