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
import { useCardAnimation } from '@react-navigation/stack';
import { Button } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons'

interface FlatListItem {
  name: string;
  subtitle: string;
  routeName: string;
}

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
  filterContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemSeperator: { 
    height: 0.5, 
    width: '100%', 
    backgroundColor: '#C8C8C8' 
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  itemContainer: {
    flexDirection:"row",
    justifyContent: 'flex-start',
    padding: 10
  },
  itemText: {
    fontSize: 18,
    marginTop: 10,
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
  }
});

const FilterCarDetails = ({ navigation }: any) => {
  const { height } = useWindowDimensions();
  const { current } = useCardAnimation();

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
        <Text style={styles.itemText}>{name}</Text>
        <Text style={styles.itemSubtitle}>{subtitle}</Text>
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
          </View>
          <Button
            style={{ marginTop: 40 }}
            mode="contained"
            onPress={() => navigation.goBack()}>
            Close Modal
          </Button>
          </View>
      </Animated.View>
    </SafeAreaView>
  );
}
export default FilterCarDetails;