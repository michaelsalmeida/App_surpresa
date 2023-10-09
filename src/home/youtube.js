import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, Alert, ImageBackground} from 'react-native';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AudioPlayer() {

  const [musicaAtual, setMusicaAtual] = useState(0);
  const musicas = [
    require('../../assets/musiquinha.mp3'),
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

        
      setIsPlaying(!isPlaying);
    }
  };

  const mudarMusicaParaTras = async () => {
    const tamanhoListaMusica = musicas.length;

    if (musicaAtual != 0) {
      setMusicaAtual(musicaAtual - 1); // Passa para a próxima música

    } else {
      setMusicaAtual(tamanhoListaMusica - 1);
    }

    setMusica(musicas[musicaAtual]);
    if (soundObject) {
        await soundObject.pauseAsync();

        
      setIsPlaying(!isPlaying);
    }
  };

  return (

    <ImageBackground
      source={require('../../assets/coracao2.png')}
      style={estilos.backgroundImage}
    >
      <View style={estilos.container}>
        
        <TouchableOpacity style={estilos.botaoTrocarMusica}>
        <Text style={estilos.aperteaquii}>
            CIFRA
          </Text>
          <Icon name="heart" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={playAudio} style={estilos.botaoTocar}>
          <Icon name={isPlaying ? 'pause' : 'play'} size={40} color="white" />
          <Text style={estilos.aperteaqui}>
            DE
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botaoTrocarMusica}>
        <Text style={estilos.aperteaquii}>
            CESAR
          </Text>
          <Icon name="heart" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}


const estilos = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // ou 'contain' para controlar o comportamento de dimensionamento da imagem de fundo
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  container : {
    flex : 1,
    flexDirection : 'row',
    justifyContent: 'center',
    width : '100%',
    gap : 20,
    alignItems : 'center',
    

  },
  botaoTocar : {
    backgroundColor : 'red',
    width : '40%',
    height : '40%',
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
    width : '15%',
    height : '15%',
    borderRadius : 100,
    justifyContent: 'center',
    alignItems : 'center'
  },
  textoBotaoProximo : {
    color : '#fff',
    fontWeight : 'bold',
    fontSize : 35
  },
  aperteaqui : {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fff'
  },
  aperteaquii : {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff'
  }
});
