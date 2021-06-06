'use strict';

import React, { useContext, useEffect, useState } from 'react';
import { View } from 'dripsy'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Dimensions } from "react-native";
import { RNCamera } from 'react-native-camera';
import axios from 'axios';
import { EmpContext } from '../utils/EmpContext';


 const ScannerQR = () => {
  //  
  const datosContext = useContext(EmpContext);
  const { state, orientacion, empleado, dimensions, setScreen, setState, setEmpleado, onChange, } = datosContext;
  const [camara, setCamara] = useState(false);
  const { window } = dimensions; 
  const estiloH = (window.scale === 3)
                ? {width: 240,
                  height: '60%'}
                : (window.scale === 2)
                ? {width: 400,
                  height: '50%'} : 300 

  const estiloV = (window.scale === 3)
                ? {width:  250,
                   height: 250 }
                : (window.scale === 2) 
                ? {width:  400,
                   height: 400 }
                : 300 ;
  
  //  useEffect(() => {
  //    Dimensions.addEventListener("change", onChange);

  //    return () => {
  //      Dimensions.removeEventListener("change", onChange);

  //    };
  //  });

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

          markerStyle={(orientacion === 'horizontal')
            ? estiloH : estiloV
          }
        
          cameraStyle={ styles.camara }

        />

     </View>
    );
}

export default  ScannerQR; 

const styles = {
    marcoQRH: {
      height: '60%',
    },

    camara: {
      height: '100%',
      width: '100%'
    },

}





