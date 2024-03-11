import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStack} from '@navigators';
import {useAppSelector} from '@hooks';
import {AuthScreen, SplashScreen} from '@screens';
import {AppStackParamList} from '@navigators/types';
const Stack = createNativeStackNavigator<AppStackParamList>();
export const AppStack = () => {
  const {isAuthenticated} = useAppSelector(state => state.auth);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuthenticated === '1' ? (
        <Stack.Screen name="HomeStack" component={HomeStack} />
      ) : isAuthenticated === '-1' ? (
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      ) : (
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
      )}
    </Stack.Navigator>
  );
};
