import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from "../types/navigation";
import FilterCarDetails from "../screens/FilterCarDetails";
import CarMake from "../screens/CarMake";
import CarColor from "../screens/CarColor";
import CarDetails from "../screens/CarDetails";
import BottomTabs from "./BottomTabs";

const Stack = createStackNavigator<RootStackParamList>();

const Tabs = () => {
  return (
    <BottomTabs />
  )
}

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="CarDetails"
        component={CarDetails}
        options={{ headerShown: false }}
      />
      <Stack.Group
        screenOptions={{
        presentation: 'transparentModal',
        headerShown: false,
        
      }}>
        <Stack.Screen 
          name="FilterCarDetails" 
          component={FilterCarDetails}
        />
        
        <Stack.Screen 
          name="CarMake" 
          component={CarMake}
        />
        <Stack.Screen 
          name="CarColor" 
          component={CarColor}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default MainStack;