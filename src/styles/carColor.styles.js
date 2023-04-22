import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewAnimated: {
    width: '100%',
  },
  viewContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E5E5E5',
    borderRadius: 20,
  },
  itemSeperator: { 
    height: 0.5, 
    width: '100%', 
    backgroundColor: '#C8C8C8' 
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 0
  },
  itemContainer: {
    flexDirection:"row",
    justifyContent: 'flex-start',
    padding: 10
  },
  itemText: {
    fontSize: 18,
    marginTop: 1,
    paddingLeft: 10
  },
  itemSubtitle: {
    fontSize: 12,
    color: '#707070',
    paddingLeft: 10,
    fontWeight: "500"
  },
  chevronIcon: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  radioButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 70,
    height: 40,
  }
});

export default styles;