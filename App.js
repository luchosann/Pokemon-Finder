import React, { useState } from 'react';
import { View, 
  TextInput,
  Button,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native';
import PokemonView from './components/pokemonView';
import Buttons_app from './components/buttons_app'


const App = () => {
  const [pokemon, setPokemon] = useState({});
  const [pokemonNumber, setPokemonNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);


  const handleSubmit = async () => {
    setErrorMessage(null);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber.toLowerCase()}`);
      const data = await response.json();
      setPokemon(data);
    } catch (err){
      setErrorMessage(err.message);
    }
  };

  

  return (
    <View style={{flex:1}}>
              <View style={styles.titleContainer}>
                <Text style={styles.pokemonTitle}>Pokemon</Text>
              </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
              <View style={styles.container2}>
                {pokemon.name ? (
                  <View>
                      {errorMessage ? (
                          <View style={styles.errorText}>
                            <Text style={{fontWeight: 'bold'}}>the pokemon does not exist</Text>
                          </View>
                        ) : pokemon ? (
                          <PokemonView name={pokemon.name.toUpperCase()} img={pokemon.sprites.front_default} types={pokemon.types} stats={pokemon.stats}/>
                        ) : (
                        <Text>Loading...</Text>
                      )}
                  </View>
                ) : null}
            </View>
                <Buttons_app pokemonNumber={pokemonNumber}  setPokemonNumber={setPokemonNumber} handleSubmit={handleSubmit}/>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1F1F",
    justifyContent: 'space-around',
  },
  container2: {
    flex: 1,
    padding: 50,
  },
  titleContainer:{
    paddingTop:40,
    padding: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#000000c0'
  },
  pokemonTitle:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    paddingTop: 15
  },
  errorText:{
    flex:1,
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
    paddingBottom: 40
  }
  
});

export default App;