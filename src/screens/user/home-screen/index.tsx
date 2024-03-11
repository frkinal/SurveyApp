import React, {useEffect, useState} from 'react';
import {View, ImageBackground, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {HomeTabNavigationProp} from '@navigators/types';
import I18n from 'i18n-js';
import {useAppDispatch, useAppSelector} from '@hooks';
import {changeLanguageProcess} from '../../../redux/slices/auth-slice';
import style from './style';
export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<HomeTabNavigationProp>();
  const navigateSurveyScreen = () => navigation.navigate('SurveyScreen');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('tr');
  const {user, language} = useAppSelector(state => state.auth);
  useEffect(() => {
    AsyncStorage.getItem('@LANGUAGE').then(session => {
      if (session !== null) {
        setSelectedLanguage(session);
      } else {
        setSelectedLanguage('tr');
      }
    });
  }, []);
  useEffect(() => {
    I18n.locale = selectedLanguage;
    AsyncStorage.setItem('@LANGUAGE', selectedLanguage);
    dispatch(changeLanguageProcess(selectedLanguage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage]);
  const changeLanguage = () =>
    setSelectedLanguage(selectedLanguage === 'tr' ? 'en' : 'tr');
  return (
    <ImageBackground
      source={require('../../../assets/images/survey-app-bg.png')}
      style={style.image_container}>
      <LinearGradient
        colors={['transparent', '#FFFFFF']}
        style={style.gradient}
        start={{x: 0, y: 0.3}}
        end={{x: 0, y: 0.5}}>
        <TouchableOpacity
          onPress={changeLanguage}
          style={style.language_container}>
          <Text style={style.language}>{language?.toUpperCase()}</Text>
        </TouchableOpacity>
        <View style={style.container}>
          <Text style={style.hello} translate="hello">
            {' '}
            <Text style={style.name}>
              {user?.name?.firstname?.toUpperCase()}
            </Text>
          </Text>
          <Button
            text="start_survey"
            color="white"
            onPress={navigateSurveyScreen}
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};
