import React, { useContext } from 'react'
import { View, Text, Image, Flex } from 'dripsy'; 
import { EmpContext } from '../utils/EmpContext';

const Activo = () => {

    const datosContext = useContext(EmpContext);
    const {empleado, setState, setScreen } = datosContext; 
    const {emp_nombre, emp_numero, emp_status, emp_puesto, emp_area, emp_foto } = empleado;
    let fecha = new Date();

    setTimeout( () => {
        setScreen( 1 );
        setState(true);
    }, 2900);

    (typeof fecha.getHours() === '')

    return (
        <View>
            <View sx={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#6AEF92',
            height: ['17%', '17%' ],
            flex: [1,1],
            flexDirection: ['column', 'column'],
    }} >
                <Text sx={styles.title}
                > Accesso Correcto </Text>
            </View>

             <View sx={{
                 height: '60%',
                 width: '100%',
                 marginLeft: ['25%', '10%'],

             }} >
                 <Image source={ {uri: emp_foto } }
                        sx={{ 
                            height: ['100%', '100%'],
                            width: ['48%', '30%' ],
                            marginTop: ['10%', '10%' ],
                            borderRadius: 10,
                            flex: [1,1],
                            flexDirection: ['column', 'row'],
                         }}
                 />
             </View>

             <View sx={{
                 flex: [1,1],
                 marginTop: ['10%', '10%' ],
                 alignItems: 'center',
                 justifyContent: 'center',

             }} >
                 <Text>Empleado: {emp_status} </Text>
             </View>

             <View>
                 <Text>Nombre: {emp_nombre} </Text>
                 <Text>No. de Emp: {emp_numero} </Text>
                 <Text>Puesto: {emp_puesto} </Text>
             </View>

             <View >
                <Text>
                    {fecha.getDate() + '/' + fecha.getMonth()+ '/' +fecha.getFullYear()+ ' ' }
                    {(fecha.getHours() > 12) ? (fecha.getHours() - 12) : (fecha.getHours()) }
                    {':' + fecha.getMinutes() + ' ' } 
                    {(fecha.getHours() > 12) ? 'pm' : 'am' } 
                 </Text>
                 <Text>Sistema de control de Accesso </Text>
             </View>


        </View>
    )
}

export default Activo

const styles = {
    frameTitle: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#6AEF92',
            height: ['17%', '17%' ],
            
    },
    title: {
            fontSize: [30,40], 
            color: '#FFF',
            fontWeight: '700',
            fontFamily: 'Georgia, serif'   
    }
}
