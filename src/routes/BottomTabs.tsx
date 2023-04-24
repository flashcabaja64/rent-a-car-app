import React from 'react';
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import { RootTabsParamList } from "../types/navigation";

import Search from '../components/Search';
import Favorites from "../components/Favorites";
import Account from "../components/Account";
import { colors } from "../styles/theme";
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<RootTabsParamList>();

const data = [
  {
    id: 1,
    name: 'Search',
    component: Search,
    tabBarLabel: 'Search',
    tabBarLabelPosition: 'below-icon',
    tabBarActiveTintColor: `${colors.primary}`,
    materialIcon: 'search',
    size: 26
  },
  {
    id: 2,
    name: 'Favorites',
    component: Favorites,
    tabBarLabel: 'Favorites',
    tabBarLabelPosition: 'below-icon',
    tabBarActiveTintColor: `${colors.primary}`,
    materialIcon: 'favorite-border',
    size: 26
  },
  {
    id: 3,
    name: 'Account',
    component: Account,
    tabBarLabel: 'Account',
    tabBarLabelPosition: 'below-icon',
    tabBarActiveTintColor: `${colors.primary}`,
    materialIcon: 'account-circle',
    size: 26
  },
]

const tabStyles = {
  height: 75,
  borderTopColor: 'gray',
  top: 10,
}

const TabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home" 
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: tabStyles,
        tabBarLabelStyle: { fontSize: 11 }
      }}
    >
      {
        data.map((item:any) => (
          <Tab.Screen
            name={item.name}
            key={item.id}
            component={item.component}
            options={{
              tabBarLabel: item.tabBarLabel,
              tabBarLabelPosition: item.tabBarLabelPosition,
              tabBarActiveTintColor: item.tabBarActiveTintColor,
              tabBarIcon: ({ color }) => (
                <MaterialIcons name={item.materialIcon} color={color} size={item.size}/>
              ),
            }}
          />
      ))
      }
      </Tab.Navigator>
  )
}

export default TabScreen;