import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import { RootStackParamList, RootTabsParamList } from "../types/navigation";

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
    materialIcon: 'search'
  },
  {
    id: 2,
    name: 'Favorites',
    component: Favorites,
    tabBarLabel: 'Favorites',
    tabBarLabelPosition: 'below-icon',
    tabBarActiveTintColor: `${colors.primary}`,
    materialIcon: 'favorite-border'
  },
  {
    id: 3,
    name: 'Account',
    component: Account,
    tabBarLabel: 'Account',
    tabBarLabelPosition: 'below-icon',
    tabBarActiveTintColor: `${colors.primary}`,
    materialIcon: 'account-circle'
  },
]

const Tabs = () => {

}