import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import { RootStackParamList, RootTabsParamList } from "../types/navigation";

import Search from '../components/Search';
import Favorites from "../components/Favorites";
import Account from "../components/Account";
import FilterCarDetails from "../screens/FilterCarDetails";
import CarMake from "../screens/CarMake";
import CarColor from "../screens/CarColor";
import FilterModal from "../components/Modal";

const Tab = createBottomTabNavigator<RootTabsParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const tabStyles = {
  height: 75,
  borderTopColor: 'gray',
  top: 10,
}

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home" 
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: tabStyles,
        tabBarLabelStyle: { fontSize: 11 }
      }}
    >
      <Tab.Screen 
        name="Search" 
        component={Search} 
        options={{
          tabBarLabel: "Search",
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "#E32F45",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen 
        name="Favorites" 
        component={Favorites} 
        options={{
          tabBarLabel: "Favorites",
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "#E32F45",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite-border" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen 
        name="Account" 
        component={Account} 
        options={{
          tabBarLabel: "Account",
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "#E32F45",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottomTabs}
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