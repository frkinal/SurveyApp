import React, {useEffect, useState} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {Text} from '@components';
import {colors} from '@utils';
import {QuestionProps} from '@components/types';
import Slider from '@react-native-community/slider';
import style from './style';
export const Question: React.FC<QuestionProps> = props => {
  const {contents, selectOption} = props;
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const primaryData: Array<string> = [
    'great',
    'good',
    'normal',
    'bad',
    'terrible',
  ];
  const secondaryData: Array<string> = [
    'Teşekkür Ederim',
    'Evet',
    'Çok Kötü',
    'Hayır',
    'Harika',
    'Muhteşem',
    'Fena Değil',
    'Normal',
    'Kötü',
  ];
  const tertiaryData = ['😭', '☹️', '😕', '🙂', '😃', '🤣'];
  useEffect(() => {
    if (selectedAnswer !== '') {
      selectOption(selectedAnswer, contents?.question?.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAnswer]);
  useEffect(() => {
    if (contents.answer.answer !== '') {
      setSelectedAnswer(contents.answer.answer);
    }
  }, [contents]);
  const handleSelectAnswer = (answer: string) => setSelectedAnswer(answer);
  function helperEmoji() {
    switch (Number(selectedAnswer).toFixed(1)) {
      case '0.2': {
        return 1;
      }
      case '0.4': {
        return 2;
      }
      case '0.6': {
        return 3;
      }
      case '0.8': {
        return 4;
      }
      case '1.0': {
        return 5;
      }
      default: {
        return 0;
      }
    }
  }
  return (
    <View style={style.container}>
      <View style={style.question_container}>
        <Text translate="lorem" style={style.question} />
      </View>
      {contents.question.type === 'primary' && (
        <>
          <View style={style.options_container}>
            {primaryData.map((item: string, index: number) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => handleSelectAnswer(item)}>
                  <View
                    style={[
                      style.option_container,
                      {backgroundColor: colors[item as keyof typeof colors]},
                      selectedAnswer === item && {marginBottom: 20},
                    ]}>
                    <Text style={style.option_text}>{item}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
          <View style={style.selection_line_container}>
            {primaryData.map((item, index) => {
              return (
                <View
                  key={index}
                  style={[
                    style.selection_line,
                    {
                      backgroundColor:
                        selectedAnswer === item
                          ? colors[item as keyof typeof colors]
                          : colors.gray,
                    },
                  ]}
                />
              );
            })}
          </View>
        </>
      )}
      {contents.question.type === 'secondary' && (
        <View style={style.secondary_options_container}>
          <View style={style.secondary_options_container}>
            {secondaryData.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => handleSelectAnswer(item)}>
                  <View
                    style={[
                      style.secondary_option_container,
                      {
                        backgroundColor:
                          selectedAnswer === item
                            ? colors.primary
                            : colors.secondary,
                      },
                    ]}>
                    <Text
                      style={[
                        style.option_text,
                        {
                          color:
                            selectedAnswer === item
                              ? colors.white
                              : colors.gray,
                        },
                      ]}>
                      {item}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </View>
      )}
      {contents.question.type === 'tertiary' && (
        <View style={style.tertiary_options_container}>
          <Text style={style.emoji}>{tertiaryData[helperEmoji()]}</Text>
          <Slider
            style={style.slider}
            minimumValue={0}
            maximumValue={1}
            step={0.2}
            minimumTrackTintColor={colors.primary}
            maximumTrackTintColor={colors.secondary}
            value={Number(selectedAnswer)}
            onValueChange={value => handleSelectAnswer(value.toString())}
          />
        </View>
      )}
    </View>
  );
};
