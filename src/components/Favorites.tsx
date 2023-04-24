import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Appbar, Card, Text } from 'react-native-paper';
import { shadow, carColors } from '../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../types/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { getSingleCar } from '../actions/hooks';
import {MaterialIcons} from '@expo/vector-icons'
import styles from '../styles/searchCard.styles';
import { Cars, CarsState } from '../types/reduxTypes';

const Favorites: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const dispatch: Dispatch<any> = useDispatch();
  const favorites = useSelector((state: CarsState) => state.carsData.favorites);

  return (
    <React.Fragment>
      <Appbar.Header statusBarHeight={25} mode='center-aligned'>
        <Appbar.BackAction onPress={() => navigation.goBack()}/>
        <Appbar.Content title="Favorites" />
      </Appbar.Header>
      <ScrollView style={{flex: 1}}>
        <View style={styles.favoritesContainer}>
        {favorites.map((item:Cars) => (
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
                  />
                ) : (
                  <MaterialIcons 
                    style={styles.favoriteIcon} 
                    name="favorite-border" 
                    size={25}
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
        ))}
        </View>
      </ScrollView>
    </React.Fragment>
  )
}

export default Favorites;