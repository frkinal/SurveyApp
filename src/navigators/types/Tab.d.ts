import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {UserSurveyStackParamList} from '@navigators/types';
export type TabParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  UserSurveyStack: UserSurveyStackParamList;
};
export type TabNavigationProp = BottomTabNavigationProp<HomeTabParamList>;
export type TabRouteProps = BottomTabScreenProps<HomeTabParamList>;
