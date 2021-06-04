/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
// import type {Node} from 'react';
// import { SafeAreaView } from 'react-native';
import {ScanerQR} from './src/components/ScanerQR';
import Presentacion from './src/screens/Presentacion';
import {DripsyProvider} from 'dripsy';

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

    setTimeout(() => {
       setScreen(1); 
    }, 4000);

   return (
     <DripsyProvider theme={theme} >

       {/* <Presentacion /> */}
       {(screen === 0) ? <Presentacion /> : <ScanerQR /> }
       
     
     </DripsyProvider>

   );
 };
 


 export default App;
 