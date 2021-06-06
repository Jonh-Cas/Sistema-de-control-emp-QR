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
      emp_nombre: "Pedro Pica Piedras",
      emp_numero: "001456",
      emp_puesto: "Gerente de QA", 
      emp_area: "QA",
      emp_status: "activo",
      emp_foto: "https://cdn.pixabay.com/photo/2016/03/12/23/18/girl-1252995_960_720.jpg",
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
    setState,
    onChange
  }

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });

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

  // const cambioOrientacion = ( ) => {

  //   return <ScannerQR />

  // }
  

  return (
    <EmpContext.Provider value={value} >
      <DripsyProvider theme={theme} >

      <Activo />
        {/* {(screen === 0) ? <Presentacion /> 
                  : (screen === 1) ?  <ScannerQR />     
                  : (screen === 2) ? <Activo  />                               
                  : <Text> Hola de nuevo</Text> } */}
        </DripsyProvider>
    </EmpContext.Provider>
  );
}


export default App;




