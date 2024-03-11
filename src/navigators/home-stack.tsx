import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SurveyScreen} from '@screens';
import {BottomTab} from '@navigators';
import {HomeTabParamList} from '@navigators/types';
const Stack = createNativeStackNavigator<HomeTabParamList>();
export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="SurveyScreen" component={SurveyScreen} />
    </Stack.Navigator>
  );
};
