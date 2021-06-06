import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import {DripsyProvider} from 'dripsy';
import {EmpContext} from './src/utils/EmpContext.js';
import Presentacion from './src/screens/Presentacion';
import ScannerQR from './src/screens/ScannerQR';
import Activo from './src/screens/Activo';

const window = Dimensions.get("window");
const pantalla = Dimensions.get("screen");

const theme = {
  colors: {
    primary: 'black',

  },
  fontSizes: [14,20],

}


const App = () => {

  const [dimensions, setDimensions] = useState({ window, pantalla });
  const [screen, setScreen] = useState(0);
  const [state, setState] = useState(true);
  const [orientacion, setOrientacion] = useState('');
  const [empleado, setEmpleado] = useState({
      emp_nombre: '',
      emp_numero: '',
      emp_status: '',      
      emp_puesto: '',
      emp_area: '',
      emp_foto: '',
      emp_baja: '',
    });

  const value = {
    dimensions,
    screen,
    state,
    empleado,
    orientacion,
    setEmpleado,
    setScreen,
    setState
  }



  const onChange = ({ window, pantalla }) => {
    setDimensions({ window, pantalla });
  };
 
  console.log(dimensions.window.scale);
  
  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    (dimensions.window.height > dimensions.window.width ) ? setOrientacion(true): setOrientacion(false);                                                            // vertical                 
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return (
    <EmpContext.Provider value={value} >

      <DripsyProvider theme={theme} >
        <ScannerQR />
      {/* {(screen === 0) ? <Presentacion /> 
                : (screen === 1) ? <ScannerQR />     
                : (screen === 2) ? <Activo  />                               
                : <Text> Hola de nuevo</Text> } */}
      </DripsyProvider>

    </EmpContext.Provider>
  );
}


export default App;