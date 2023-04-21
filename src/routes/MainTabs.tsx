import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import { RootStackParamList, RootTabsParamList } from "../types/navigation";

import Search from '../components/Search';
import Favorites from "../components/Favorites";
import Account from "../components/Account";

const Tab = createBottomTabNavigator<RootTabsParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

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
      >
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default MainStack;