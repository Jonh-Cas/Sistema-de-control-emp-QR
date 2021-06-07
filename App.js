import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import {DripsyProvider} from 'dripsy';

import {EmpContext} from './src/utils/EmpContext.js';
import Presentacion from './src/screens/Presentacion';
import ScannerQR from './src/screens/ScannerQR';
import Activo from './src/screens/Activo';
import Inactivo from './src/screens/Inactivo';
import ErrorQR from './src/screens/ErrorQR';
// import Cascaron from "./src/screens/Cascaron.js";
import Sound from 'react-native-sound'

const window = Dimensions.get("window");
const pantalla = Dimensions.get("screen");

const theme = {
  colors: {
    primary: 'black',

  },
  fontSizes: [14,20],

}
 //=================================================================

 var Sound1 = require('react-native-sound');
  
//  Enable playback in silence mode
 Sound1.setCategory('Playback');
  
 // Load the sound file 'whoosh.mp3' from the app bundle
 // See notes below about preloading sounds within initialization code below.
 var whoosh = new Sound1('acceso_correcto.mp3', Sound.MAIN_BUNDLE, (error) => {
   if (error) {
     console.log('failed to load the sound', error);
     return;
   }
   // loaded successfully
  //  console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
   
 });

 //  Enable playback in silence mode
  Sound1.setCategory('Playback');

var whooshy = new Sound1('acceso_incorrecto.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
 //  console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
  
});



//===================================================================
const App = () => {

  const [dimensions, setDimensions] = useState({ window, pantalla });
  const [screen, setScreen] = useState(0);
  const [state, setState] = useState(true);
  const [orientacion, setOrientacion] = useState('');
  const [empleado, setEmpleado] = useState({
      emp_nombre: "",
      emp_numero: "",
      emp_puesto: "", 
      emp_area: "",
      emp_status: "",
      emp_foto: "",
      emp_baja: "",
    });
    
    const sonidoActivo = () => {
         // Play the sound with an onEnd callback
     whoosh.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
    }
    
    const sonidoInactivo = () => {
      // Play the sound with an onEnd callback
      whooshy.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
    }
  const value = {
    dimensions,
    screen,
    state,
    empleado,
    orientacion,
    setEmpleado,
    setScreen,
    setState,
    onChange,
    sonidoActivo,
    sonidoInactivo,
  }






  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
    console.log(window);
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    (dimensions.window.width > dimensions.window.height)
    ? setOrientacion('horizontal')
    : setOrientacion('vertical')
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return (
    <EmpContext.Provider value={value} >
      <DripsyProvider theme={theme} >
    {(screen === 0) ? <Presentacion /> 
                  : (screen === 1) ?  <ScannerQR />     
                  : (screen === 2) ? <Activo  />                               
                  : (screen === 3) ? <Inactivo />
                  : <ErrorQR /> }
        </DripsyProvider>
    </EmpContext.Provider>
  );
}


export default App;




