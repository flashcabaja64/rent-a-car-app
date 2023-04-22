import {
  Animated,
  View,
  SafeAreaView,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  Text,
} from 'react-native';
import { useState } from 'react';
import { Button, RadioButton } from 'react-native-paper';
import { useCardAnimation } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import styles from '../styles/filterModal.styles';
import { colors } from '../styles/theme';

const CarColor = ({ navigation, carColors }: any) => {
  const { width, height } = useWindowDimensions();
  const { current } = useCardAnimation();
  const [radioValue, setRadioValue] = useState("");
  let newColors = ['All Colors', ...carColors];
  
  const ItemSeparatorView = () => {
    return <View style={styles.itemSeperator} />
  };

  const Item = ({ name, index }: FlatListItem) => (
    <RadioButton.Item label={name} value={name} key={index}/>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
      }}>
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
            height: height * 0.5,
            bottom: -35,
            transform: [
              {
                translateX: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [width, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
          styles.viewAnimated,
        ]}>
        <View style={styles.viewContainer}>
          <View style={styles.buttonContainer}>
            <MaterialCommunityIcons 
              name="keyboard-backspace" 
              size={30}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.modalTextTitle}>Select Car Color</Text>
            <Button 
              mode="contained"
              compact={true}
              buttonColor={colors.primary}
              style={styles.button}
              labelStyle={styles.buttonText}
              onPress={() => navigation.navigate("FilterCarDetails")}
            >
              Save
            </Button>
          </View>

          <View style={{ flex:1 }}>
            <RadioButton.Group onValueChange={newVal => setRadioValue(newVal)} value={radioValue}>
              <FlatList 
                data={newColors}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={({ item, index }) => (
                  <Item name={item} key={index} />
                )}
              />
            </RadioButton.Group>
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({
  carColors: state.carsData.carColors
});

export default connect(mapStateToProps)(CarColor);