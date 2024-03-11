import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {TabParamList} from '@navigators/types';
export type HomeTabParamList = {
  BottomTab: TabParamList;
  SurveyScreen: undefined;
};
export type HomeTabNavigationProp = BottomTabNavigationProp<HomeTabParamList>;
export type HomeTabRouteProps = BottomTabScreenProps<HomeTabParamList>;
