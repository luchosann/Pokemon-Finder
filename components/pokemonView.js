import React from 'react';
import { useFonts } from 'expo-font';
import { Text, View, Image, StyleSheet} from 'react-native';

const PokemonView = ({ img, name, types, stats }) => {
    const [fontsLoaded] = useFonts({
      'Pokemon-RojoFuego': require('../assets/PKMN_RBYGSC.ttf')
    });
    
    if (!fontsLoaded) {
      return null;
    }

  return (
    <View style={styles.pokemonContainer}>
      <Image
        style={styles.pokemonImage}
        source={{ uri: img }}
      />
      <Text style={styles.pokemonName}>{name}</Text>
      <View style={styles.typesContainer}>
        <View style={styles.types}>
          { types.map((type, index) => (
            <Text
              key={`${type.type.name}-${index}`}
              style={styles.type}
            >
              {type.type.name}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <View style={styles.stat} key={`${stat.stat.name}-${index}`}>
            <Text style={styles.statName}>{stat.stat.name}:</Text>
            <Text style={styles.statValue}>{stat.base_stat}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonContainer: {
    shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.26,
      shadowRadius: 6,
      elevation: 6,

    backgroundColor: '#F8F8F8F8',
    borderRadius: 10,
    borderColor: '#D6D6D6',
    borderWidth: 2,

    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop:20    
  },
  pokemonImage: {
    width: 200, 
    height: 200
  },
  pokemonName:{
    fontFamily: 'Pokemon-RojoFuego',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  types: {
    flexDirection: 'row',
  },
  statsContainer: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    direction: 'inherit',
    flexWrap: 'wrap'
  },
  stat: {
    margin: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 5
  },
  statName: {
    fontWeight: 'bold',
    fontFamily: 'Pokemon-RojoFuego',
  },
  statValue: {
    fontWeight: 'normal',
    fontFamily: 'Pokemon-RojoFuego',

  },
  type:{
    padding: 10,
    margin: 10,
    
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Pokemon-RojoFuego',

    borderRadius: 10,
    backgroundColor: 'coral'
  },
});

export default PokemonView;