import React, { useContext } from 'react';
import { Image, View } from 'dripsy';
import { EmpContext } from '../utils/EmpContext';

const Presentacion = () => {

    const datosContext = useContext(EmpContext)
    const {orientacion, setScreen } = datosContext;

    setTimeout(() => {
        setScreen(1);
    }, 3000);    

    return (
            <View sx={ styles.frameImage} >
            <Image source={require('../image/logo.png')} 
                   sx={ (orientacion) ? styles.ImagenV : styles.ImagenH} />                   
            </View>
    )
}

export default Presentacion;

 const styles = {

    frameImage: {
        alignItems: 'center',
        justifyContent: 'center',
        height: ['100%', '100%' ] 
    },
    
    ImagenV:{
    height: ['14%','15%'],
    width: [240 , 500],  
    },

    ImagenH:{
    height: [, 110, '22%'],
    width: [, 300 , 500]
   },
  
};

