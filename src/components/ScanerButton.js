import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'

const ScanerButton = () => {
    return (
        <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
    )
}

export default ScanerButton

const styles = StyleSheet.create({

    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
      },
      buttonTouchable: {
        padding: 16
      }

})
