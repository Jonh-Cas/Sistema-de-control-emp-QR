'use strict';

import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';


export const ScanerQR = () => {

  const [empleado, setEmpleado] = useState(
    {
      emp_nombre: '',
      emp_numero: '',
      emp_status: '',      
      emp_puesto: '',
      emp_area: '',
      emp_foto: '',
      emp_baja: '',

    }
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(empleado);
  }, [empleado])


   
   const verificacionQR = ( url ) => {

    try {
       setEmpleado({...url});
       setError(false);
       
    } catch (error) {
      setError(true);
    }
  

   }

   const readScanner = async (e) => {
     const url = await axios.get(e.data)
                            .then(Response => Response.data )
                            .catch(err => err);
     verificacionQR(url);
   } 



    return (

      <View>
        {/* <View style={styles.frameTitle} >
           <Text style={styles.textScanner} > Hola mundo </Text> 
        </View> */}
        
      {/* <View style={styles.frameCamara} > */}
        <QRCodeScanner
        onRead={readScanner}
        flashMode={RNCamera.Constants.FlashMode.off}
          topContent={
            <Text style={styles.centerText}>
              Go to{' '}
              {/* <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on */}
              your computer and scan the QR code.
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
        }
      />
      {/* </View> */}


      </View>

    );
}


const styles = StyleSheet.create({
  frameTitle: {
    borderWidth: 1,
    height: 50,
    width: 400,
    justifyContent: 'center',

  },

  textScanner: {
    textAlign: 'center',
  },  

  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  },
  frameCamara:{
    marginTop: 100,

  }
});



