import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { sizes, spacing } from '../styles/theme';
import { Cars } from '../types/reduxTypes';
import { NavigationProps } from '../types/navigation';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { getSingleCar } from '../actions/hooks';

type SearchSuggestionsProps = {
  filteredSeachCars: Cars[];
}

const SearchSuggestions = ({filteredSeachCars}: SearchSuggestionsProps) => {
  const navigation = useNavigation<NavigationProps>();
  const dispatch: Dispatch<any> = useDispatch();

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Top Search Results</Text>
        <Text style={styles.headerText}>$ / Day</Text>
      </View>
      <View style={styles.suggestionContainer}>
        {filteredSeachCars.map(item => (
          <TouchableOpacity key={item.id} onPress={() => {
            dispatch(getSingleCar(item.id));
            navigation.navigate('CarDetails');
          }}>
            <View style={styles.header}>
              <Text style={styles.itemView}>
                {`${item.car} ${item.car_model} ${item.car_model_year}`}
              </Text>
              <Text style={styles.itemView}>
                {item.price}
              </Text>
            </View>
            <View style={styles.itemSeperator}></View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  suggestionContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderColor: 'gray',
    width: "100%",
    flex: 1
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    borderBottomWidth: 5,
    borderBottomColor: 'black'
  },
  header: {
    flexDirection: 'row',
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  itemView: {
    fontSize: sizes.radius,
    paddingTop: spacing.m,
    paddingBottom: spacing.m
  },
  itemSeperator: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  }
})

export default SearchSuggestions;