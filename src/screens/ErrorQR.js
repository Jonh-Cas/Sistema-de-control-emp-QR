import React, { useContext } from 'react'
import { View, Text, Image } from 'dripsy';
import { EmpContext } from '../utils/EmpContext';
import axios from 'axios';

const Activo = () => {

    const datosContext = useContext(EmpContext);
    const {dimensions, empleado, setState, setScreen } = datosContext; 
    const {emp_nombre,  emp_status, emp_baja,  } = empleado;
    const { window } = dimensions;
    let fecha = new Date();
    let option = {hour: "numeric", hour12:"false"}

  

    const EnvioDatos = async() => {

    await  axios({
            method: 'post',
            // url: '/login',
            data: empleado,
          }).then(e => console.log(e) )
            .catch(err => console.log(err));
            console.log(JSON.stringify(empleado));
    }


    setTimeout( () => {
        setScreen( 1 );
        setState(true);
    }, 2900);

    const styles = {
        frameTitle: {
            height:[window.height/10 , window.height/8],
            width: [window.width , window.width],
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FF6363',
            
        },
        title: {
            color: '#FFF',
            fontSize: [25 ,30]
        },
    
        framePhoto: {
            alignItems: ['center' ,'flex-start'],
            flexDirection: ['column', 'row'],
        },

        photo: {
            height: [window.height/2.5, window.height/1.5],
            width: [window.width/2, window.width/3],
            marginTop: ['5%', '2%'],
            marginLeft: [, '6%'],
            borderRadius: 15
        },

        frameStatus: {
            height: [window.height/13, window.height/10 ],
                    width: [window.width/2, window.width/2.5 ],
                    backgroundColor: '#FF6363',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 30,
                    marginTop: [2,'40%'],
                    marginLeft: [, '15%'],
        },

        estatus: {
            color: '#FFF',
            fontSize: [20, 25 ]
        },

        frameText: {
            marginTop: 10,
            marginLeft: [, '25%'],
            height: [window.height/4, ]
        }, 

        textName: {
            fontSize: [17,25],
            marginTop: [, '7%'],
            borderBottomColor: '#000',
        },

        textData: {
            fontSize: [18,25],
            borderBottomColor: '#000',
            marginTop: [,'4%']
        },

        frameDate: {
            marginTop: ['40%', '0%' ],
            alignItems: ['center', 'flex-end'],
            height: [window.height, window.height],
        },

    }



    return (
        <View>

                <View sx={styles.frameTitle} >
                    <Text sx={styles.title} >Error de QR </Text>
                </View>
                 
                 <View sx={styles.framePhoto} >
                     <Image source={ require('../image/invalido.png') }
                            sx={styles.photo} />
                <View>

                <View sx={styles.frameStatus} >
                    <Text sx={styles.estatus} >Invalido QR </Text>
                </View>



                </View>
             </View>

             <View sx={styles.frameDate} >
                <Text>
                    {fecha.toLocaleDateString() + ' ' } 
                    {fecha.toLocaleTimeString('en-US', option) }
                 </Text>
                 <Text> Sistema de control de Accesso </Text>
             </View>

        </View>
    )
}

export default Activo;