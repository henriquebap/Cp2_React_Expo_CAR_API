import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CarDetails = ({ cars }) => {
  if (cars.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Nenhum carro encontrado com esse nome.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {cars.map(car => (
        <View key={car.model} style={styles.carContainer}>
          <Text style={styles.text}>Marca: {car.make}</Text>
          <Text style={styles.text}>Modelo: {car.model}</Text>
          <Text style={styles.text}>Tipo: {getTranslatedClass(car.class)}</Text>
          <Text style={styles.text}>Cilindros: {car.cylinders}</Text>
          <Text style={styles.text}>Tração: {car.drive}</Text>
          <Text style={styles.text}>Combustível: {car.fuel_type === 'gas' ? 'Gasolina' : 'Outro'}</Text>
          <Text style={styles.text}>Média na estrada: {car.highway_mpg}</Text>
          <Text style={styles.text}>Média na cidade: {car.city_mpg}</Text>
          <Text style={styles.text}>Média total: {car.combination_mpg}</Text>
          <Text style={styles.text}>Câmbio: {car.transmission === 'm' ? 'Manual' : 'Automático'}</Text>
          <Text style={styles.text}>Ano: {car.year}</Text>
        </View>
      ))}
    </ScrollView>
  );
};


const getTranslatedClass = (carClass) => {
    switch (carClass) {
      case 'two seater':
        return 'Coupe';
      case 'minicompact car':
        return 'Compacto';
      case 'large car':
        return 'SUV';
      case 'standard pickup truck':
        return 'Caminhão';
      case 'special purpose vehicle':
        return 'Veículo especial';
      case 'midsize car':
        return 'Sedã';
      default:
        return 'Outro';
    }
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  error: {
    fontSize: 16,
    color: 'red',
  },
});

export default CarDetails;
