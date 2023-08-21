import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
// import PropTypes from 'deprecated-react-native-prop-types';
import PropTypes from 'prop-types';



function Intro () {

    const navigation = useNavigation();

  function goToHome () {
      navigation.navigate('Home');
  }
    

  const slides = [
    {
      key: '1',
      title: 'OLÁ, MEU AMOR',
      text: 'Fiz essa surpresinha para o seu aniversário, espero que goste...',
      image: require('./assets/coracao.png'),
    },
    {
      key: '2',
      title: 'AVISOS IMPORTANTES!!!',
      text: 'Estou fazendo isso desde junho antes das minhas férias do curso, fui fazendo ao mesmo tempo que estudava programar para celular, então se ficar algo feio ou crashar do nada, me perdoe, estou me aperfeiçoando ;-; ...',
      image: require('./assets/atencao.png'),
    },
    {
      key: '3',
      title: 'PREPARADA PARA VIAGEM NO TEMPO?',
      text: 'Perdão por nao ter feito nada maravilhoso para você, perdão por não ter condicões financeiras de te dar algo muito melhor, não é muito mas eu fiz de coração para você, espero que goste, meu amor ^-^',
      image: require('./assets/emote.png'),
    }
  ];

  function renderSlid({ item }){
    return(
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Image source={require('./assets/background.png')} style={{bottom: 0, position: 'absolute', width: '100%', height: '100%'}}></Image>
        <View>
          <Image
            source={item.image}
            style={styles.image}
          >
          </Image>

        </View>
          <View>
            <Text style={{paddingTop: 25, paddingBottom: 10, fontSize: 23, fontWeight: 'bold', color: '#009cff', textAlign: 'center'}}>{item.title}</Text>
            <Text style={{textAlign: 'center', color: '#fff', paddingHorizontal: 25, fontSize: 15}}>{item.text}</Text>

          </View>
      </View>
      
    );
  }


    return(
      <View style={{flex: 1}}>
     
      <AppIntroSlider
        renderItem={renderSlid}
        data={slides}
        activeDotStyle={{
          backgroundColor: '#009cff',
          width: 30
        }}

        renderNextButton={() => <Text style={styles.botaoProximo}>PRÓXIMO </Text>}
        renderDoneButton={() => <Text style={styles.botaoEntrar}>VAMOS LÁ </Text>}
        onDone={goToHome}
        style={styles.back}

      />

      </View>
    );

  }

export default Intro;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-evenly',
    alignItems: 'center',
    ...PropTypes.style

  },
  image: {
    width: 200,
    height: 200,
    ...PropTypes.style
  },

  botaoProximo: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    color: 'black',
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    ...PropTypes.style
  },

  botaoEntrar: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    color: 'black',
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    ...PropTypes.style
  }
})