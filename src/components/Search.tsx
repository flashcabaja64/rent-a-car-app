import { useState } from 'react';
import { SafeAreaView, ScrollView, Image, Animated, Text, StyleSheet, View } from 'react-native';
import SearchBar from '../screens/SearchBar';
//import DynamicHeader from '../screens/DynamicHeader';
import { sizes, shadow, colors } from '../styles/theme';
import SearchSuggestions from '../screens/SearchSuggestions';

const carPerson =  require('../../assets/car_person.jpg')

const Search: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [searchPhrase, setSearchPhrase] = useState<string>("");

  const styles = StyleSheet.create({ 
    container: {
      height: sizes.height, 
      position: 'relative', 
      backgroundColor: colors.white
    },
    header: {
      position: 'absolute',
      width: "100%"
    },
    scrollContainer: {
      top:70,
      flex: 1,
      height: sizes.height
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, shadow.dark]}>
        <SearchBar 
          clicked={clicked} 
          setClicked={setClicked} 
          searchPhrase={searchPhrase} 
          setSearchPhrase={setSearchPhrase}
        />
      </View>
        <ScrollView style={styles.scrollContainer} contentContainerStyle={{ paddingBottom: 150 }}>
          { clicked ? <SearchSuggestions /> : <></> }
        </ScrollView>
    </SafeAreaView>
  )
}

export default Search;