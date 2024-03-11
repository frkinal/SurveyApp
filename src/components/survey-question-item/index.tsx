import React from 'react';
import {View} from 'react-native';
import {SurveyQuestionItemProps} from '@components/types';
import {Icon, Text} from '@components';
import {t} from 'i18n-js';
import style from './style';
export const SurveyQuestionItem: React.FC<SurveyQuestionItemProps> = props => {
  const {contents} = props;
  return (
    <View style={style.container}>
      <View style={style.top_container}>
        <Text style={style.top_container_title} translate="question">
          :{' '}
        </Text>
        <Text
          style={style.top_container_content}
          translate={contents?.question?.content}>
          ?
        </Text>
        <Text style={style.top_container_title} translate="answer">
          :{' '}
        </Text>
        <Text style={style.top_container_content}>
          {contents?.answer?.answer}
        </Text>
      </View>
      <View style={style.mid_container}>
        <View style={style.mid_container_content_container}>
          <Icon icon="Clock" />
          <Text style={style.mid_container_content}>
            {contents.answer.answerTime}
          </Text>
        </View>
      </View>
      <View style={style.bot_container}>
        <View style={style.bot_container_content_container}>
          <Text style={style.bot_container_content} translate="time_spent">
            :
            {`${1800 - Number(contents.answer.answerTimeWithSeconds)} ${t(
              'second',
            )}`}
          </Text>
        </View>
      </View>
    </View>
  );
};
