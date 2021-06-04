import React from 'react';
import { Image, View } from 'dripsy';

const Presentacion = () => {
    return (
            <View sx={Styles.frameImage} >
            <Image source={require('../image/logo.png')} 
                   sx={Styles.Imagen} />                   
            </View>
    )
}

export default Presentacion;

 const Styles = {

    frameImage : {
        alignItems: 'center',
        justifyContent: 'center',
        height: ['100%', '100%' ] 
    },

    Imagen:{
    height: ['18%', '20%'],
    width: ['80%', '36%'],
   }
};

