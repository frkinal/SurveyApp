import {QuestionContent} from '@components/types';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export type UserSurveyStackParamList = {
  UserSurveysScreen: undefined;
  UserSurveyDetailsScreen: {
    title: string;
    date: string;
    time: string;
    point: number;
    questions: Array<QuestionContent>;
  };
};
export type UserSurveyStackNavigationProp =
  NativeStackNavigationProp<UserSurveyStackParamList>;
export type UserSurveyStackRouteProps = RouteProp<UserSurveyStackParamList>;
