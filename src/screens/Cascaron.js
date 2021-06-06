/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 // import type {Node} from 'react';
 import { Text } from 'react-native';
 import {ScannerQR} from './src/screens/ScannerQR';
 import Presentacion from './src/screens/Presentacion';
 import {DripsyProvider} from 'dripsy';
 import Activo from './src/screens/Activo';
 
 const theme = {
   colors: {
     text: '#000',
     background: '#fff',
     primary: '#07c',
     secondary: '#05a',
     accent: '#609',
     muted: '#f6f6f6',
   },
 
   fonts: {
     body: 'system-ui, sans-serif',
     heading: 'system-ui, sans-serif',
     monospace: 'Menlo, monospace',
   },
   fontWeights: {
     body: 400,
     heading: 700,
     bold: 700,
   },
   lineHeights: {
     body: 1.5,
     heading: 1.125,
   },
 
 }
 
  
 
  const App = () => {
 
   const [screen, setScreen] = useState(0);
   const [state, setState] = useState(true);
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
 
     // { 
     // emp_nombre: "Pedro Pica Piedras",
     // emp_numero: "001456",
     // emp_puesto: "Gerente de QA", 
     // emp_area: "QA", 
     // emp_status: "activo",
     // emp_foto: "https://cdn.pixabay.com/photo/2016/03/12/23/18/girl-1252995_960_720.jpg"
     // }
   );
 
 
     setTimeout(() => {
        setScreen(1); 
     }, 4000);
 
    return (
      <DripsyProvider theme={theme} >
 
        {/* <Presentacion /> */}
        {/* <Activo empleado={empleado}
                setState={setState}    
                setScreen={setScreen} /> */}

        
      
      </DripsyProvider>
 
    );
  };
  
 
 
  export default App;
  