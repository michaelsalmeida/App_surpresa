import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Audio } from 'expo-av';


export default function AudioPlayer() {

  const [musica, setMusica] = useState(require('../../assets/bbbb.mp3'));
  const listaMusicas = [require('../../assets/aaaa.mp3'), require('../../assets/bbbb.mp3')]
  const playAudio = async () => {
    const soundObject = new Audio.Sound();

    try {
      await soundObject.loadAsync(musica);
      await soundObject.playAsync();
    } catch (error) {
      console.error('Erro ao reproduzir o áudio', error);
    }
  };

  return (
    <View>
      <Button title="Reproduzir Áudio" onPress={playAudio} />
      <Button title="Próxima" onPress={playAudio}/>
    </View>
  );
}