import React, {useEffect, useRef, useState} from 'react';
import {
  ImageBackground,
  Animated,
  ScrollView,
  View,
  useWindowDimensions,
} from 'react-native';
import {AuthContracts, LoginForm, RegisterForm} from '@components';
import style from './style';
import {useAppDispatch} from '@hooks';
import {getAllUser} from '@services';
export const AuthScreen = () => {
  const dispatch = useAppDispatch();
  const animation = useRef(new Animated.Value(0)).current;
  const {width} = useWindowDimensions();
  const scrollView = useRef<ScrollView>(null);
  const [sliderState, setSliderState] = useState<{
    item: number;
    offset: number;
  }>({
    item: 0,
    offset: 0,
  });
  useEffect(() => {
    dispatch(getAllUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const slideChanged = (e: {nativeEvent: {contentOffset: {x: number}}}) => {
    const item = Math.round(e.nativeEvent.contentOffset.x / width);
    setSliderState({
      item: item,
      offset: item * width,
    });
  };
  const createAccount = (
    mail: (val: string) => void,
    password: (val: string) => void,
  ) => {
    if (scrollView.current) {
      scrollView?.current?.scrollTo({
        x: width,
        animated: true,
      });
    }
  };
  const haveAccount = (
    mail: (val: string) => void,
    password: (val: string) => void,
    nickname: (val: string) => void,
    gender: (val: string) => void,
    birthday: (val: string) => void,
  ) => {
    if (scrollView.current) {
      scrollView?.current?.scrollTo({
        x: -width,
        animated: true,
      });
      mail('');
      password('');
      nickname('');
      gender('');
      birthday('');
    }
  };
  return (
    <ImageBackground
      source={require('../../../assets/images/survey-app-bg.png')}
      style={style.image_container}>
      <View style={style.container}>
        <View style={style.line} />
        <ScrollView
          ref={scrollView}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: animation}}}],
            {useNativeDriver: false},
          )}>
          <LoginForm
            onPress={(
              mail: (val: string) => void,
              password: (val: string) => void,
            ) => createAccount(mail, password)}
          />
          <ScrollView>
            <RegisterForm
              onPress={(
                mail: (val: string) => void,
                password: (val: string) => void,
                nickname: (val: string) => void,
                gender: (val: string) => void,
                birthday: (val: string) => void,
              ) => haveAccount(mail, password, nickname, gender, birthday)}
            />
          </ScrollView>
          <ScrollView>
            <AuthContracts />
          </ScrollView>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
