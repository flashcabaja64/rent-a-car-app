import {
  Animated,
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { useState } from 'react';
import { useCardAnimation } from '@react-navigation/stack';
import { Button, Checkbox } from 'react-native-paper';

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
});
const FilterCarDetails = ({ navigation }: any) => {
  const { height } = useWindowDimensions();
  const { current } = useCardAnimation();
  const [checked, setChecked] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
          
          <Button
            style={{ marginTop: 40 }}
            mode="contained"
            onPress={navigation.goBack}>
            Close Modal
          </Button>
        </View>
      </Animated.View>
    </View>
  );
}
export default FilterCarDetails;