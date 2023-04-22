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

interface FlatListItem {
  name: string;
  subtitle: string;
  routeName: string;
}

const FilterCarDetails = ({ navigation }: any) => {
  const { height } = useWindowDimensions();
  const { current } = useCardAnimation();
  const [year, setYear] = useState([]);
  console.log(year)

  const filterData = [
    { id: 1, name: 'Car Make', subtitle: 'Choose Your Car Make.', routeName: "CarMake" },
    { id: 2, name: 'Car Color', subtitle: 'Choose You Car Color.', routeName: "CarColor" }
  ]

  const ItemSeparatorView = () => {
    return <View style={styles.itemSeperator} />
  };

  const Item = ({ name, subtitle, routeName }: FlatListItem) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate(routeName)}>
      <View style={styles.textContainer}>
        <Text style={styles.itemFilterText}>{name}</Text>
        <Text style={styles.itemSubtitle}>{subtitle}</Text>
        {/* {route.params.previous == "CarColor" ? (
          <Text style={{color: 'red'}}>{route.params.selection}</Text>
        ): (
          <Text style={{color: 'red'}}>{route.params.selection}</Text>
        )} */}
      </View>
      <View style={styles.chevronIcon}>
        
        <Entypo name="chevron-right" size={25}/>
      </View>
    </TouchableOpacity>
  );

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
            <FlatList 
              data={filterData}
              keyExtractor={(item): any => item.id}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={({ item }) => (
                <Item name={item.name} subtitle={item.subtitle} routeName={item.routeName} />
              )}
            />
            {ItemSeparatorView()}
            <SliderContainer
              caption="Years: "
              sliderValue={[1920, Number(new Date().getFullYear())]}
            >
              <Slider
                animateTransitions
                maximumTrackTintColor="#d3d3d3"
                maximumValue={Number(new Date().getFullYear())}
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
              onPress={() => navigation.goBack()}>
              Close Modal
            </Button>
          </View>
          </View>
      </Animated.View>
    </SafeAreaView>
  );
}
export default FilterCarDetails;