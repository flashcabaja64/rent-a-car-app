import { StyleSheet } from "react-native";

const borderWidth = 4;
export const trackMarkStyles = StyleSheet.create({
    activeMark: {
      borderColor: 'red',
      borderWidth,
      left: -borderWidth / 2,
    },
    inactiveMark: {
      borderColor: 'grey',
      borderWidth,
      left: -borderWidth / 2,
    },
});

export const sliderStyles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    margin: 16,
    paddingBottom: 32,
  },
  sliderContainer: {
    paddingTop: 50,
  },
  sliderTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderText: {
    fontSize: 18
  }
});

const modalStyles = StyleSheet.create({
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
  filterContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemFilterText: {
    fontSize: 18,
    marginTop: 10,
    paddingLeft: 10
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
  modalTextTitle: {
    fontSize: 18,
    fontWeight: "500"
  },
  chevronIcon: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
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
    height: 35,
  },
  buttonModalContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  closeModalButton: { 
    marginTop: 40,
    width: "50%",
    
  },
  buttonText: {
    marginVertical: 7
  }
});

export default modalStyles;