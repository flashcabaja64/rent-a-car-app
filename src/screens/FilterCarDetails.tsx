import {
  Animated,
  View,
  SafeAreaView,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import SliderContainer from '../components/SliderContainer';
import { Slider } from '@miblanchard/react-native-slider';
import { useCardAnimation } from '@react-navigation/stack';
import { Button } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons'
import styles from '../styles/filterModal.styles';
import { colors } from '../styles/theme'
import { connect } from 'react-redux';
import { CarsState } from '../types/reduxTypes';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux'
import { setFilterYear, filterAllFilteredCars } from '../actions/hooks';

interface FlatListItem {
  name: string;
  subtitle: string;
  routeName: string;
  currentVal: string;
}

const FilterCarDetails = ({ navigation, filteredValues }: any) => {
  const { height } = useWindowDimensions();
  const { current } = useCardAnimation();
  const currentSelectedYear = useSelector((state: CarsState) => state.carsData.filteredValues.years)
  const [year, setYear] = useState<number[]>(currentSelectedYear);
  let currentYear = Number(new Date().getFullYear());

  const dispatch: Dispatch<any> = useDispatch();

  const filterData = [
    { id: 1, name: 'Car Make', subtitle: 'Choose Your Car Make.', routeName: "CarMake", currentVal: filteredValues.make },
    { id: 2, name: 'Car Color', subtitle: 'Choose You Car Color.', routeName: "CarColor", currentVal: filteredValues.color }
  ]

  const ItemSeparatorView = () => {
    return <View style={styles.itemSeperator} />
  };

  const Item = ({ name, subtitle, routeName, currentVal }: FlatListItem) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate(routeName)}>
      <View style={styles.textContainer}>
        <Text style={styles.itemFilterText}>{name}</Text>
        <Text style={styles.itemSubtitle}>{subtitle}</Text>
      </View>
      
      <View style={styles.iconContainer}>
        <Text style={styles.filterValueText}>{currentVal}</Text>
        <View style={styles.chevronIcon}>
          <Entypo name="chevron-right" size={25}/>
        </View>
      </View>
    </TouchableOpacity>
  );

  function filterAllCars() {
    navigation.goBack();
    dispatch(setFilterYear(year));
    dispatch(filterAllFilteredCars())
  }

  return (
    <SafeAreaView style={styles.filterContainer}>
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        ]}
        onPress={navigation.goBack}
      />
      <Animated.View
        style={[
          {
            height: height,
            transform: [
              {
                translateY: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [height, height * 0.5],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
          styles.viewAnimated,
        ]}>
        <View style={styles.viewContainer}>
          <View>
            <MaterialCommunityIcons 
              name='close' 
              color={colors.black} 
              size={26}
              onPress={() => navigation.goBack()}
            />
            <FlatList 
              data={filterData}
              keyExtractor={(item): any => item.id}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={({ item }) => (
                <Item 
                  name={item.name} 
                  subtitle={item.subtitle} 
                  routeName={item.routeName} 
                  currentVal={item.currentVal}
                />
              )}
            />
            {ItemSeparatorView()}
            <SliderContainer
              caption="Years: "
              sliderValue={currentSelectedYear}
            >
              <Slider
                animateTransitions
                maximumTrackTintColor="#d3d3d3"
                maximumValue={currentYear}
                minimumTrackTintColor={colors.secondary}
                minimumValue={1920}
                step={1}
                thumbTintColor={colors.primary}
                value={year}
                onSlidingComplete={(val) => setYear(val)}
              />
            </SliderContainer>
          </View>
          <View style={styles.buttonModalContainer}>
            <Button
              style={styles.closeModalButton}
              mode="contained"
              buttonColor={colors.primary}
              onPress={() => filterAllCars()}>
              Filter
            </Button>
          </View>
          </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const mapStateToProps = (state:CarsState) => ({
  filteredValues: state.carsData.filteredValues
});

export default connect(mapStateToProps)(FilterCarDetails);