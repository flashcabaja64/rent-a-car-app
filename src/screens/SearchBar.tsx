import { TextInput, View, StyleSheet, Button, Keyboard } from 'react-native';
import { Feather, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors, shadow } from '../styles/theme';
import { useNavigation } from '@react-navigation/native';

type SearchBarProps = {
  clicked: boolean;
  setClicked: (clicked: boolean) => void;
  searchPhrase: string;
  setSearchPhrase: (searchPhrase: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ clicked, setClicked, setSearchPhrase, searchPhrase }) => {
  const navigation = useNavigation();
  
  return (
    <View style={[styles.container, shadow.dark]}>
      <View style={
        clicked
          ? styles.searchBar__clicked
          : styles.searchBar__unclicked
      }>
        <Feather 
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        <TextInput 
          style={styles.input}
          placeholder='Search car make or model'
          onFocus={() => setClicked(true)}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
        />
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ paddingRight: 1 }} onPress={() => {
              setSearchPhrase("")
          }}/>
        )}
      </View>
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
      {!clicked && (
        <MaterialCommunityIcons 
          name="filter-variant" 
          size={35} 
          style={styles.filterIcon}
          onPress={() => navigation.navigate('FilterCarDetails')}
        />
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    position: 'absolute',
    top: 40
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "90%",
    backgroundColor: colors.white,
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: colors.white,
    alignItems: "center",
    borderRadius: 15,
    justifyContent: "space-evenly",
  },
  filterIcon: {
    position: 'relative',
    left: 10
  },
  input: {
    fontSize: 20,
    backgroundColor: colors.white,
    marginLeft: 10,
    width: "90%",
  }
})

export default SearchBar;