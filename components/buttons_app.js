import React from 'react';
import { View, StyleSheet, TextInput, Button} from 'react-native';

const Buttons_app = ({handleSubmit, setPokemonNumber, pokemonNumber}) => {
    return(
        <View style={{backgroundColor: '#F1F1F1F1F', paddingBottom: 90, paddingHorizontal: 50}}>
            <TextInput
            style={styles.InputText}
            onChangeText={(text) => setPokemonNumber(text)}
            value={pokemonNumber}
            keyboardType='text'
            placeholder='Ingrese el nombre del Pokémon'
            />
            <Button title='Buscar' onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    InputText: { 
        marginTop: 50,
        height: 40, 
        padding: 10,
        borderColor: 'gray', 
        borderWidth: 1, 
        backgroundColor: '#f1f1f1'}
});

export default Buttons_app;