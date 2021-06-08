import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { DripsyProvider } from 'dripsy';
import { EmpContext } from './src/utils/EmpContext.js';
import Presentacion from './src/screens/Presentacion';
import ScannerQR from './src/screens/ScannerQR';
import Activo from './src/screens/Activo';
import Inactivo from './src/screens/Inactivo';
import ErrorQR from './src/screens/ErrorQR';
import { sonidoConfig } from "./src/utils/SoundConfig.js";

const window = Dimensions.get("window");
const pantalla = Dimensions.get("screen");

const whoosh = sonidoConfig('acceso_correcto');
const whooshy = sonidoConfig('acceso_incorrecto');

const theme = {
  colors: {
    primary: 'black',

  },
  fontSizes: [14, 20],

}

const App = () => {

  const [dimensions, setDimensions] = useState({ window, pantalla });
  const [screen, setScreen] = useState(0);
  const [state, setState] = useState(true);
  const [boton, setBoton] = useState(true)
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

  const value = {
    dimensions,
    screen,
    state,
    empleado,
    orientacion,
    boton,
    setEmpleado,
    setScreen,
    setState,
    onChange,
    whoosh,
    whooshy,
    setBoton
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

  return (
    <EmpContext.Provider value={value} >
      <DripsyProvider theme={theme} >
        {(screen === 0) ? <Presentacion />
          : (screen === 1) ? <ScannerQR />
            : (screen === 2) ? <Activo />
              : (screen === 3) ? <Inactivo />
                : <ErrorQR />}
      </DripsyProvider>
    </EmpContext.Provider>
  );
}


export default App;




