import Carousel from 'react-native-snap-carousel';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AudioPlayer from './youtube';
// import PropTypes from 'prop-types';


function Carrousel() {
  const navigation = useNavigation();

  const carouselItems = [
    {
      key: '1',
      title: 'Volta do primeiro encontro',
      image: require('../../assets/primeiroencontrorua.jpg'),
      onPress: () => Alert.alert('Bfpcz'),
    },
    {
      key: '2',
      title: 'Dentro da humilde residência',
      image: require('../../assets/primeiroencontrocasa.jpg'),
      onPress: () => Alert.alert('ep'),
    },
    {
      key: '3',
      title: 'Meu bebê na batera',
      image: require('../../assets/20220806_113124.jpg'),
      onPress: () => Alert.alert('apcrfyelc'),
    },
    {
      key: '4',
      title: 'chave 11',
      image: require('../../assets/beijinhu.jpg'),
      onPress: () => Alert.alert('gznp'),
    },
    {
      key: '5',
      title: 'Muito orgulho de voce',
      image: require('../../assets/20230722_105426.jpg'),
      onPress: () => Alert.alert('lnptel'),
    },
    {
      key: '6',
      title: 'Dia em que pensei que nunca chegaria até onte estamos hoje',
      image: require('../../assets/IMG_20210829_180512326.jpg'),
      onPress: () => Alert.alert('dp'),
    },
    {
      key: '7',
      title: 'Família feliz',
      image: require('../../assets/IMG_20210919_184127635.jpg'),
      onPress: () => Alert.alert('nldlc'),
    },
    {
      key: '8',
      title: 'Trio parada dura',
      image: require('../../assets/IMG_20211113_131023800.jpg'),
      onPress: () => Alert.alert('nzxtrz'),
    },
    {
      key: '9',
      title: 'Te amando incondicionalemnte em segredo',
      image: require('../../assets/IMG-20211209-WA0027.jpg'),
      onPress: () => Alert.alert('xpf'),
    },
    {
      key: '10',
      title: 'Feliz 2 anos de namoro amor da minha vida, espero que esse seja só o inicio da nossa vida juntos até a eternidade',
      image: require('../../assets/IMG-20211031-WA0169.jpg') ,
      onPress: () => Alert.alert('lxzc'),
    },
    // Adicione mais itens conforme necessário
  ];


  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={item.onPress}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
        
      <Carousel
        layout={'stack'}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={400}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Intro')} style={styles.voltar}>
        {/* <Text style={styles.textVoltar}>VOLTAR </Text> */}
        <Image style={styles.imgVoltar} source={require('../../assets/seta-para-baixo.png')}/>
      </TouchableOpacity>

      <AudioPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    
    // ...PropTypes.style
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    // backgroundColor: 'blue'
    // ...PropTypes.style
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: 10,
    objectFit: 'cover'
    // ...PropTypes.style
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 20,
    // ...PropTypes.style
  },

  voltar:{
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 17,
    borderRadius: 100,
    borderColor: 'red',
    // borderWidth: 2
  },
  textVoltar:{
    color: 'red',
    fontWeight: 'bold'
  },
  imgVoltar:{
    transform: [{rotate: '90deg'}],
    width: 30,
    objectFit: 'contain'
  },
});

export default Carrousel;
