import Carousel from 'react-native-snap-carousel';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';


function Carrousel() {
  const navigation = useNavigation();

  const carouselItems = [
    {
      key: '1',
      title: 'Item 1',
      image: require('../../assets/primeiroencontrorua.jpg'),
      onPress: () => car(),
    },
    {
      key: '2',
      title: 'Item 2',
      image: require('../../assets/primeiroencontrocasa.jpg'),
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
        layout={'default'}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={280}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Intro')}>
        <Text>VOLTAAAARRR </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...PropTypes.style
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue'
    ...PropTypes.style
  },
  image: {
    width: 300,
    height: 300,
    ...PropTypes.style
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 130,
    ...PropTypes.style
  },
});

export default Carrousel;
