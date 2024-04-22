import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import CarDetails from './components/CarDetails';
import axios from 'axios';

const App = () => {
  const [carName, setCarName] = useState('');
  const [carDetails, setCarDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCarDetails = () => {
    setLoading(true);
    setError('');
    axios.get(`https://api.api-ninjas.com/v1/cars?model=${carName}`, {
      headers: {
        'X-Api-Key': 'PERSONAL-API-KEY'
      }
    })
    .then(response => {
      setCarDetails(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Erro ao carregar os detalhes do carro:', error);
      setError('Erro ao carregar os detalhes do carro. Por favor, tente novamente mais tarde.');
      setLoading(false);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ex: Ferrari 812 Superfast"
          value={carName}
          onChangeText={text => setCarName(text)}
        />
        <Button title="Buscar Detalhes" onPress={fetchCarDetails} />
      </View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      {carDetails && <CarDetails cars={carDetails} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default App;
