import Sound from 'react-native-sound'

export const sonidoConfig = (song) => {
    
 var Sound1 = require('react-native-sound');
  
 //  Enable playback in silence mode
  Sound1.setCategory('Playback');
   
  // Load the sound file 'whoosh.mp3' from the app bundle
  // See notes below about preloading sounds within initialization code below.
   var whoosh = new Sound1(song, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
   //  console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
    
  });
 


 return whoosh;
}


export const reproducirSonido = (whoosh) =>{
    whoosh.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
}