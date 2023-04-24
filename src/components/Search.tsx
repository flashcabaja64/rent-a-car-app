import { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Image, Animated, Text, StyleSheet, View } from 'react-native';
import { fetchCars, getCarMakeColor } from '../actions/hooks';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux'
import { CarsState } from '../types/reduxTypes'
import { connect } from 'react-redux';

import SearchBar from '../screens/SearchBar';
//import DynamicHeader from '../screens/DynamicHeader';
import { sizes, shadow, colors } from '../styles/theme';
import SearchSuggestions from '../screens/SearchSuggestions';
import SearchCard from '../screens/SearchCard';

const carPerson =  require('../../assets/car_person.jpg')

type SearchProps = {
  loading: boolean
}

const Search = ({ loading }: SearchProps) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [searchPhrase, setSearchPhrase] = useState<string>("");

  const dispatch: Dispatch<any> = useDispatch();
  const cars = useSelector((state: CarsState) => state.carsData)
  console.log(cars)

  useEffect(() => {
    dispatch(fetchCars(''));
  },[])

  useEffect(() => {
    dispatch(getCarMakeColor())
  },[loading])

  const styles = StyleSheet.create({ 
    container: {
      height: sizes.height,  
      backgroundColor: colors.white,
    },
    header: {
      position: 'absolute',
      width: "100%"
    },
    scrollContainer: {
      top: 70,
      flex: 1,
      height: sizes.height
    },
    searchCardContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 5,
      paddingBottom: 150
    },
    flexSearchCardIndicator: {
      flex: 1
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SearchBar 
          clicked={clicked} 
          setClicked={setClicked} 
          searchPhrase={searchPhrase} 
          setSearchPhrase={setSearchPhrase}
        />
      </View>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={[styles.searchCardContainer, cars.loading && styles.flexSearchCardIndicator]}>
        { clicked ? <SearchSuggestions /> : <SearchCard cars={cars.cars} loading={cars.loading} /> }
      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = (state:CarsState) => ({
  loading: state.carsData.loading
});

export default connect(mapStateToProps)(Search)