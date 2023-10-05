import Carousel from 'react-native-snap-carousel';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
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
      onPress: () => car(),
    },
    {
      key: '2',
      title: 'Conhecenti',
      image: require('../../assets/primeiroencontrocasa.jpg'),
      onPress: () => car(),
    },
    {
      key: '3',
      title: 'Item 3',
      image: require('../../assets/beijinhu.jpg'),
      onPress: () => car(),
    },
    // Adicione mais itens conforme necessário
  ];

  function car() {
    navigation.replace('Detalhes');
  }


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
    backgroundColor: 'yellow'
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
    marginLeft: 60,
    position: 'absolute',
    bottom: 30,
    textAlign: 'center',
    color: 'white',
    // ...PropTypes.style
  },

  voltar:{
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'yellow',
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
