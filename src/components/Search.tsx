import { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { fetchCars, getCarMakeColor, searchMakeModel } from '../actions/hooks';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux'
import { Cars, CarsState } from '../types/reduxTypes'
import { connect } from 'react-redux';

import SearchBar from '../screens/SearchBar';
//import DynamicHeader from '../screens/DynamicHeader';
import { sizes, shadow, colors } from '../styles/theme';
import SearchSuggestions from '../screens/SearchSuggestions';
import SearchCard from '../screens/SearchCard';

//const carPerson =  require('../../assets/car_person.jpg')

type SearchProps = {
  loading: boolean;
  filteredCars: Cars[];
  filteredSeachCars: Cars[];
  error: null | object | undefined | string;
}

const Search = ({ loading, filteredCars, filteredSeachCars, error }: SearchProps) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [searchPhrase, setSearchPhrase] = useState<string>("");

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(fetchCars(''));
  },[])

  useEffect(() => {
    dispatch(getCarMakeColor())
  },[loading])

  useEffect(() => {
    setTimeout(() => {
      dispatch(searchMakeModel(searchPhrase.toLowerCase()))
    }, 400)
  }, [searchPhrase])

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
      <ScrollView style={styles.scrollContainer} contentContainerStyle={[styles.searchCardContainer, loading && styles.flexSearchCardIndicator]}>
        { clicked ? <SearchSuggestions filteredSeachCars={filteredSeachCars}/> : <SearchCard cars={filteredCars} loading={loading} error={error}/> }
      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = (state:CarsState) => ({
  loading: state.carsData.loading,
  error: state.carsData.error,
  filteredCars: state.carsData.filteredCars,
  filteredSeachCars: state.carsData.filteredSearchCarsResults
});

export default connect(mapStateToProps)(Search)