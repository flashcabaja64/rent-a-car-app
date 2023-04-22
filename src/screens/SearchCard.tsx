import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text, ActivityIndicator } from 'react-native-paper';
import { shadow, spacing, carColors } from '../styles/theme';
import { Cars, CarsState } from '../types/reduxTypes';

import { getCarMakeColor } from '../actions/fetchCars';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux'

interface CardProps {
  cars: Cars[];
  loading: boolean;
}

const SearchCard = ({ cars, loading }: CardProps) => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getCarMakeColor());
  },[])
  const colors = useSelector((state: CarsState) => state.carsData.carColors);
  
  const load = false;
  const caca = [
    {
      id: 1,
      car: "Mitsubishi",
      car_model: "Montero",
      car_color: "Yellow",
      car_model_year: 2002,
      car_vin: "SAJWJ0FF3F8321657",
      price: "$2814.46",
      availability: false
    },
    {
      id: 2,
      car: "Mitsubishi",
      car_model: "Montero",
      car_color: "Blue",
      car_model_year: 2002,
      car_vin: "SAJWJ0FF3F8321657",
      price: "$2814.46",
      availability: false
    },
    {
      id: 3,
      car: "Mitsubishi",
      car_model: "Montero",
      car_color: "Green",
      car_model_year: 2002,
      car_vin: "SAJWJ0FF3F8321657",
      price: "$2814.46",
      availability: false
    }
  ]
  return (
    <>
      {load ? (
        <ActivityIndicator animating={true} size="large" />
      ) : (
      caca.map(item => (
        <Card key={item.id} style={[shadow.dark, styles.cardContainer]}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Title 
            titleVariant='titleLarge' 
            titleStyle={styles.cardTitle}
            title={`${item.car} ${item.car_model} ${item.car_model_year}`}
          />
          <View style={styles.itemSeperator} />
          <Card.Content>
            <View style={styles.carColorContainer}>
              <Text variant="titleMedium" style={styles.carColorText}>Car Color:</Text>
              <View style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20/2,
                  position: 'relative',
                  right: 50,
                  top: 2,
                  backgroundColor: `${carColors[item.car_color]}`
                }} 
                />
              
              <Text variant="titleMedium" style={styles.priceText}>{`${item.price}`} / day</Text>
            </View>
          </Card.Content>
        </Card>
      ))
      )}
    </>
  )
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    width: "95%",
    marginBottom: 20,
    backgroundColor: "white",
  },
  cardTitle: {
    fontWeight: '600'
  },
  carColorContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between'
  },
  carColorText: {
    fontWeight: "500",
  },
  itemSeperator: { 
    height: 1, 
    width: '90%', 
    position: 'relative',
    left: 15,
    backgroundColor: '#C8C8C8' 
  },
  priceText: {
    fontWeight: "500"
  }
})

export default SearchCard;