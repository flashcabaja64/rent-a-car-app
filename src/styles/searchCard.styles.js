import { StyleSheet } from "react-native";
import { colors } from "./theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  favoritesContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: colors.white,
    position: 'absolute',
    right: 5,
    top: 5,
    padding: 5,
    borderRadius: 10
  },
  favoriteIcon: {
    color: colors.lightGray
  },
  favoriteIconClicked: {
    color: 'red'
  },
  cardContainer: {
    width: "95%",
    marginBottom: 20,
    borderRadius: 10,
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

export default styles;