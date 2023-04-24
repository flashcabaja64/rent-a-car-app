import { StackNavigationProp } from '@react-navigation/stack';

export type RootTabsParamList = {
  "Home": undefined;
  "Search": undefined;
  "Favorites": undefined;
  "Account": undefined;
};

export type RootStackParamList = {
  "Main": undefined;
  "CarMake": undefined;
  "CarColor": undefined;
  "FilterCarDetails": undefined;
  "CarDetails": undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList, "FilterCarDetails">
export type CarDetailsProps = StackNavigationProp<RootStackParamList, "CarDetails">