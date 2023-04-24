import React, { useState } from 'react';
import { View, TouchableOpacity} from 'react-native';
import { Card, Text, ActivityIndicator } from 'react-native-paper';
import { Cars, CarsState } from '../types/reduxTypes';
import { shadow, carColors } from '../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../types/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { getSingleCar, addFavoriteCar, removeFavoriteCar } from '../actions/hooks';
import ErrorContainer from '../components/ErrorContainer';
import {MaterialIcons} from '@expo/vector-icons';
import styles from '../styles/searchCard.styles';

interface CardProps {
  cars: Cars[];
  loading: boolean;
  error: null | object | undefined | string;
}

let data = [{
  "availability": false, 
  "car": "Mitsubishi", 
  "car_color": "Yellow", 
  "car_model": "Montero", 
  "car_model_year": 2002, 
  "car_vin": "SAJWJ0FF3F8321657", 
  "id": 4, 
  "favorite": true,
  "price": "$2814.46"
} 
]

const SearchCard = ({ cars, loading, error }: CardProps) => {
  const navigation = useNavigation<NavigationProps>();
  // const [clickFavorite, setClickFavorite] = useState(false)
  const dispatch: Dispatch<any> = useDispatch();
  const favorites = useSelector((state: CarsState) => state.carsData.favorites)

  function addFavorite(id:number) {
    dispatch(addFavoriteCar(id))
  }

  function removeFavorite(id:number) {
    dispatch(removeFavoriteCar(id))
  }

  return (
    <>
      {(loading && !cars) || (error) ? (
        <>
          {error && <ErrorContainer />}
          <ActivityIndicator animating={loading} style={{ flex: 1 }} size="large" />
        </>
      ) : (
        cars.map(item => (
          <TouchableOpacity 
            onPress={() => {
              dispatch(getSingleCar(item.id))
              navigation.navigate('CarDetails');
            }} 
            key={item.id} 
            style={[shadow.dark, styles.cardContainer]}
          >
            <Card>
              <Card.Cover source={{ uri: 'https://picsum.photos/300/250' }} />
              <TouchableOpacity style={styles.iconContainer}>
                {
                  (item.favorite && item.favorite == true) ? (
                    <MaterialIcons 
                      style={styles.favoriteIconClicked} 
                      name="favorite" 
                      size={25}
                      onPress={() => removeFavorite(item.id)}
                    />
                  ) : (
                    <MaterialIcons 
                      style={styles.favoriteIcon} 
                      name="favorite-border" 
                      size={25}
                      onPress={() => addFavorite(item.id)}
                    />
                  )
                }
              </TouchableOpacity>
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
          </TouchableOpacity>
        ))
      )}
    </>
  )
}

export default SearchCard;