import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserSurveyDetailsScreen, UserSurveysScreen} from '@screens';
import {UserSurveyStackParamList} from '@navigators/types';
const Stack = createNativeStackNavigator<UserSurveyStackParamList>();
export const UserSurveyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="UserSurveysScreen" component={UserSurveysScreen} />
      <Stack.Screen
        name="UserSurveyDetailsScreen"
        component={UserSurveyDetailsScreen}
      />
    </Stack.Navigator>
  );
};
