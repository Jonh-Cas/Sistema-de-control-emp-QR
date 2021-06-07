// import React from 'react'
// import { View, Text } from 'react-native'
// import Sound from 'react-native-sound'

// var Sound1 = require('react-native-sound');
 
// // Enable playback in silence mode
// Sound1.setCategory('Playback');
 
// // Load the sound file 'whoosh.mp3' from the app bundle
// // See notes below about preloading sounds within initialization code below.
// var whoosh = new Sound1('whoosh.mp3', Sound.MAIN_BUNDLE, (error) => {
//   if (error) {
//     console.log('failed to load the sound', error);
//     return;
//   }
//   // loaded successfully
//   console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
 
//   // Play the sound with an onEnd callback
//   whoosh.play((success) => {
//     if (success) {
//       console.log('successfully finished playing');
//     } else {
//       console.log('playback failed due to audio decoding errors');
//     }
//   });
// });


// const Cascaron = () => {
//   return (
//     <View>
//       <Text></Text>
//     </View>
//   )
// }

// export default Cascaron;
