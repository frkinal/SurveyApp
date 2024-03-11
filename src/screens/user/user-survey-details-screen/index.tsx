import React from 'react';
import {View, TouchableWithoutFeedback, FlatList} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  UserSurveyStackNavigationProp,
  UserSurveyStackRouteProps,
} from '@navigators/types';
import {Home} from '@assets';
import {SurveyQuestionItem, Text} from '@components';
import style from './style';
import {QuestionContent} from '@components/types';
export const UserSurveyDetailsScreen = () => {
  const navigation = useNavigation<UserSurveyStackNavigationProp>();
  const route = useRoute<UserSurveyStackRouteProps>();
  const {title, date, time, point, questions} = route.params;
  const goBack = () => navigation.goBack();
  const renderItem = ({item}: {item: QuestionContent}) => {
    return <SurveyQuestionItem contents={item} />;
  };
  return (
    <View style={style.container}>
      <View style={style.header_container}>
        <View style={style.inner_header_container}>
          <TouchableWithoutFeedback onPress={goBack}>
            <View style={style.icon_container}>{Home('primary')}</View>
          </TouchableWithoutFeedback>
          <View style={style.point_container}>
            <Text style={style.point}>{point}</Text>
          </View>
        </View>
        <View style={style.title_container}>
          <Text style={style.title}>{title}</Text>
        </View>
      </View>
      <View style={style.content_container}>
        <FlatList
          data={questions}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={
            <View style={style.list_header_container}></View>
          }
          ListFooterComponent={<View style={style.footer} />}
        />
      </View>
    </View>
  );
};
