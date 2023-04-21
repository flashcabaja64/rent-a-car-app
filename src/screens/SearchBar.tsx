import { TextInput, View, StyleSheet, Button, Keyboard } from 'react-native';
import { Feather, Entypo } from "@expo/vector-icons";
import { colors, shadow, sizes } from '../styles/theme'

type SearchBarProps = {
  clicked: boolean;
  setClicked: (clicked: boolean) => void;
  searchPhrase: string;
  setSearchPhrase: (searchPhrase: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ clicked, setClicked, setSearchPhrase, searchPhrase }) => {
  return (
    <View style={[styles.container]}>
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
    width: "95%",
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
  input: {
    fontSize: 20,
    backgroundColor: colors.white,
    marginLeft: 10,
    width: "90%",
  }
})

export default SearchBar;