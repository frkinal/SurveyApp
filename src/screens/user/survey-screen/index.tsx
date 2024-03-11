import React, {createRef, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from 'react-native';
import {Button, Icon, Question, Text} from '@components';
import {Home} from '@assets';
import style from './style';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {QuestionContent} from '@components/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {HomeTabNavigationProp} from '@navigators/types';
import {t} from 'i18n-js';
import {ProgressView} from '@react-native-community/progress-view';
import {colors} from '@utils';
import {useAppDispatch} from '@hooks';
import {saveSurvey} from '../../../redux/slices/user-slice';
export const SurveyScreen = () => {
  const now = new Date().toLocaleString();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<HomeTabNavigationProp>();
  const {width} = useWindowDimensions();
  const slider = createRef<FlatList>(null);
  const [prevTime, setPrevTime] = useState<number>();
  const [currentTime, setCurrentTime] = useState<number>();
  const [isOver, setIsOver] = useState<boolean>(false);
  const [sliderState, setSliderState] = useState<{
    item: number;
    offset: number;
  }>({
    item: 0,
    offset: 0,
  });
  const [questions, setQuestions] = useState<
    Array<{
      question: {
        id: number;
        content: string;
        type: string;
      };
      answer: {
        answer: string;
        answerTime: string;
        answerTimeWithSeconds: number;
      };
    }>
  >([]);
  useEffect(() => {
    const arr = Array(10)
      .fill({
        question: {
          id: 1,
          content: 'lorem',
          type: 'primary',
        },
        answer: {
          answer: '',
          answerTime: '',
        },
      })
      .map((item, index) => {
        return {
          ...item,
          question: {
            ...item.question,
            id: index + 1,
            type:
              index % 2 === 0
                ? 'primary'
                : index === 3
                ? 'secondary'
                : 'tertiary',
          },
        };
      });
    setQuestions(arr);
  }, []);
  function GetFirstEmptyIndex(data: QuestionContent[]) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].answer.answer === '') {
        return i;
      }
    }
  }
  useEffect(() => {
    AsyncStorage.getItem('@QUESTIONS').then(data => {
      if (data !== null) {
        setQuestions(JSON.parse(data)?.questions);
        setPrevTime(JSON.parse(data)?.time);
        if (slider) {
          slider.current?.scrollToIndex({
            index: GetFirstEmptyIndex(JSON.parse(data)),
            animated: true,
          });
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (isOver) {
      setTimeout(() => {
        Alert.alert(t('info'), t('survey_complete'), [
          {
            text: t('okay'),
            onPress: () => {
              dispatch(
                saveSurvey({
                  date: now,
                  time: now,
                  title: 'Anket 1',
                  point: Math.floor(Math.random() * 101),
                  questions: questions,
                }),
              );
              AsyncStorage.removeItem('@QUESTIONS');
              navigation.goBack();
            },
          },
        ]);
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOver]);
  const goBack = () => {
    Alert.alert(t('info'), t('survey_alert'), [
      {
        text: t('okay'),
        onPress: () => {
          AsyncStorage.setItem(
            '@QUESTIONS',
            JSON.stringify({questions: questions, time: currentTime}),
          );
          navigation.goBack();
        },
      },
      {
        text: t('close'),
        style: 'cancel',
      },
    ]);
  };
  const renderItem = ({item}: {item: QuestionContent}) => {
    const selectOption = (answer: string, id: number) => {
      const newQuestions = questions.map(question => {
        if (question.question.id === id) {
          return {
            ...question,
            answer: {
              answer,
              answerTime: question.answer.answerTime,
              answerTimeWithSeconds: question.answer.answerTimeWithSeconds,
            },
          };
        } else {
          return question;
        }
      });
      setQuestions(newQuestions);
    };
    return (
      <View style={style.question_container}>
        <Question contents={item} selectOption={selectOption} />
      </View>
    );
  };
  const slideChanged = (e: {nativeEvent: {contentOffset: {x: number}}}) => {
    const item = Math.round(e.nativeEvent.contentOffset.x / width);
    setSliderState({
      item: item,
      offset: item * width,
    });
  };
  return (
    <View style={style.container}>
      <View style={style.header_container}>
        <View style={style.inner_header_container}>
          <TouchableWithoutFeedback onPress={goBack}>
            <View style={style.icon_container}>{Home('primary')}</View>
          </TouchableWithoutFeedback>
          <View style={style.timer_container}>
            <CountdownCircleTimer
              isPlaying={!isOver}
              duration={1800}
              initialRemainingTime={prevTime}
              colors={['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']}
              colorsTime={[7, 5, 2, 0]}
              size={80}
              strokeWidth={8}>
              {({remainingTime}) => {
                const hours = Math.floor(remainingTime / 3600);
                const minutes =
                  Math.floor((remainingTime % 3600) / 60).toString().length ===
                  1
                    ? `0${Math.floor((remainingTime % 3600) / 60)}`
                    : Math.floor((remainingTime % 3600) / 60);
                const seconds =
                  (remainingTime % 60).toString().length === 1
                    ? `0${remainingTime % 60}`
                    : remainingTime % 60;
                if (
                  questions[sliderState?.item]?.answer?.answer !== '' &&
                  questions[sliderState?.item]?.answer?.answerTime === ''
                ) {
                  const newQuestions = questions.map(question => {
                    if (
                      question.answer.answer !== '' &&
                      question.answer.answerTime === ''
                    ) {
                      return {
                        ...question,
                        answer: {
                          answer: question.answer.answer,
                          answerTime: `${hours}:${minutes}:${seconds}`,
                          answerTimeWithSeconds: remainingTime,
                        },
                      };
                    } else {
                      return question;
                    }
                  });
                  setQuestions(newQuestions);
                }
                setCurrentTime(remainingTime);
                return (
                  <Text
                    accessibilityRole="timer"
                    accessibilityLiveRegion="assertive"
                    importantForAccessibility="yes"
                    style={style.countdown_text}>
                    {`${hours}:${minutes}:${seconds}`}
                  </Text>
                );
              }}
            </CountdownCircleTimer>
          </View>
        </View>
        <View style={style.progress_bar_container}>
          <Text
            translate="survey_topic_title"
            style={style.survey_topic_title}
          />
          <View style={style.progress_bar_inner_container}>
            <ProgressView
              progressTintColor={colors.white}
              trackTintColor={colors.white}
              progress={
                sliderState?.item === 9
                  ? 1.0
                  : Number(`0.${sliderState?.item + 1}`)
              }
              style={style.progress_bar}
            />
            <Text style={style.progress_bar_text}>
              {sliderState?.item + 1}
              <Text style={style.progress_bar_text2}>/10</Text>
            </Text>
          </View>
        </View>
      </View>
      {isOver ? (
        <View style={style.content_container}>
          <View style={style.brain_icon_container}>
            <Icon icon="Brain" />
          </View>
          <View style={style.text_container}>
            <Text translate="survey_complete" style={style.survey_complete} />
            <Text
              translate="data_being_created"
              style={style.data_being_created}
            />
          </View>
        </View>
      ) : (
        <View style={style.content_container}>
          {questions?.length > 0 && (
            <FlatList
              ref={slider}
              pagingEnabled
              data={questions}
              horizontal
              onScroll={slideChanged}
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              getItemLayout={(_, index) => ({
                length: width,
                offset: width * index,
                index,
              })}
              renderItem={renderItem}
            />
          )}
          <View style={style.button_container}>
            <TouchableOpacity
              style={style.previous_button}
              disabled={sliderState?.item === 0}
              onPress={() => {
                if (slider.current) {
                  slider.current.scrollToOffset({
                    offset: sliderState.offset - width,
                    animated: true,
                  });
                }
              }}>
              <Icon icon="ArrowLeft" />
            </TouchableOpacity>
            <Button
              text={
                sliderState?.item + 1 === questions?.length
                  ? 'finish'
                  : 'next_question'
              }
              color="white"
              disabled={questions[sliderState?.item]?.answer?.answer === ''}
              onPress={() => {
                if (sliderState?.item + 1 !== questions?.length) {
                  if (slider.current) {
                    slider.current.scrollToOffset({
                      offset: sliderState.offset + width,
                      animated: true,
                    });
                  }
                } else {
                  Alert.alert(t('info'), t('survey_complete_desc'), [
                    {
                      text: t('okay'),
                      onPress: () => setIsOver(true),
                    },
                    {
                      text: t('cancel'),
                      style: 'cancel',
                    },
                  ]);
                }
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};
