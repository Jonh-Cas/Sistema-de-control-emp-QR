import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ScanerText = () => {
    return (
      <Text style={styles.centerText}>
        Go to{' '}
        <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
        your computer and scan the QR code.
      </Text>
    )
}

export default ScanerText

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
      },
      textBold: {
        fontWeight: '500',
        color: '#000'
      },

})
