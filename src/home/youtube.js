import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AudioPlayer() {
  const [musicaAtual, setMusicaAtual] = useState(0);
  const musicas = [
    require('../../assets/YourMan.mp3'),
    require('../../assets/aaaa.mp3'),
    require('../../assets/bbbb.mp3')
  ];
  const [musica, setMusica] = useState(musicas[musicaAtual]);
  const [soundObject, setSoundObject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    loadSound();
  }, [musica]);

  const loadSound = async () => {
    const sound = new Audio.Sound();

    try {
      await sound.loadAsync(musica);
      setSoundObject(sound);
    } catch (error) {
      console.error('Erro ao carregar o áudio', error);
    }

    // Não é necessário descarregar o áudio aqui
  };

  const playAudio = async () => {
    if (soundObject) {
      if (isPlaying) {
        await soundObject.pauseAsync();
      } else {
        await soundObject.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const mudarMusicaParaFrente = async () => {
    const tamanhoListaMusica = musicas.length;

    if (musicaAtual >= tamanhoListaMusica - 1) {
      setMusicaAtual(0); // Reinicia a lista de músicas
    } else {
      setMusicaAtual(musicaAtual + 1); // Passa para a próxima música
    }

    setMusica(musicas[musicaAtual]);
    if (soundObject) {
        await soundObject.pauseAsync();

        await soundObject.playAsync();

        
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <View style={estilos.container}>
      <TouchableOpacity onPress={playAudio} style={estilos.botaoTrocarMusica}>
        <Icon name="backward" size={20} color="white" />
      </TouchableOpacity>

      <TouchableOpacity onPress={playAudio} style={estilos.botaoTocar}>
        <Icon name={isPlaying ? 'pause' : 'play'} size={40} color="white" />
      </TouchableOpacity>

      <TouchableOpacity onPress={mudarMusicaParaFrente} style={estilos.botaoTrocarMusica}>
        <Icon name="forward" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}


const estilos = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'row',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    width : '100%',
    gap : 30,
    alignItems : 'center'

  },
  botaoTocar : {
    backgroundColor : 'red',
    width : 160,
    height : 160,
    borderRadius : 100,
    justifyContent: 'center',
    alignItems : 'center',
  },
  textoTocar : {
    color : '#fff',
    fontSize : 24
  },
  botaoTrocarMusica : {
    backgroundColor : 'red',
    width : 70,
    height : 70,
    borderRadius : 100,
    justifyContent: 'center',
    alignItems : 'center'
  },
  textoBotaoProximo : {
    color : '#fff',
    fontWeight : 'bold',
    fontSize : 35
  }
});
