import React from 'react';
import {View, FlatList} from 'react-native';
import {Icon, SurveyListItem, Text} from '@components';
import {SurveyListItemContent} from '@components/types';
import {useAppSelector} from '@hooks';
import style from './style';
export const UserSurveysScreen = () => {
  const {savedSurveys} = useAppSelector(state => state.user);
  const renderItem = ({item}: {item: SurveyListItemContent}) => {
    return <SurveyListItem contents={item} />;
  };
  let sum = 0;
  for (let i = 0; i < savedSurveys.length; i++) {
    sum += Number(savedSurveys[i].point);
  }
  let counter = 0;
  for (let i = 0; i < savedSurveys.length; i++) {
    if (savedSurveys[i].date.slice(0, 9) === new Date().toLocaleDateString()) {
      counter += 1;
    }
  }
  return (
    <View style={style.container}>
      <View style={style.completed_surveys_container}>
        <Text style={style.title} translate="completed_surveys" />
        <View style={style.completed_surveys}>
          <View style={style.completed_surveys_item}>
            <Text style={style.content}>{sum}</Text>
            <Text style={style.content_title} translate="point" />
          </View>
          <View style={style.border} />
          <View style={style.completed_surveys_item}>
            <Text style={style.content}>{savedSurveys.length}</Text>
            <Text style={style.content_title} translate="sum" />
          </View>
          <View style={style.border} />
          <View style={style.completed_surveys_item}>
            <Text style={style.content}>{counter}</Text>
            <Text style={style.content_title} translate="today" />
          </View>
        </View>
      </View>
      <View style={style.list_container}>
        <View style={style.list_header_container}>
          <Icon icon="List" />
          <Text style={style.list_header} translate="list" />
        </View>
        <FlatList
          data={savedSurveys}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};
