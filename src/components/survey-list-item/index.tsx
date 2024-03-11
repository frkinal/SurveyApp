import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import style from './style';
import {SurveyListItemProps} from '@components/types';
import {Icon} from '@components';
import {Icons} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {UserSurveyStackNavigationProp} from '@navigators/types';
export const SurveyListItem: React.FC<SurveyListItemProps> = props => {
  const navigation = useNavigation<UserSurveyStackNavigationProp>();
  const [botVisible, setBotVisible] = useState<boolean>(false);
  const {
    contents: {title, time, date, point},
  } = props;
  const handlePress = () => setBotVisible(!botVisible);
  const navigateDetailsScreen = () =>
    navigation.navigate('UserSurveyDetailsScreen', {
      ...props.contents,
    });

  const icon: keyof typeof Icons = botVisible ? 'ArrowDown' : 'ArrowRight';
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={style.container}>
        <View style={style.top_container}>
          <Text style={style.top_container_content}>{title}</Text>
          <Icon icon={icon} />
        </View>
        <View style={style.mid_container}>
          <View style={style.mid_container_content_container}>
            <Icon icon="Calendar" />
            <Text style={style.mid_container_content}>{date?.slice(0, 9)}</Text>
          </View>
          <View style={style.mid_container_content_container}>
            <Icon icon="Clock" />
            <Text style={style.mid_container_content}>{time?.slice(10)}</Text>
          </View>
        </View>
        {botVisible && (
          <TouchableWithoutFeedback onPress={navigateDetailsScreen}>
            <View style={style.bot_container}>
              <View style={style.bot_container_content_container}>
                <Text style={style.bot_container_content}>
                  Modunuz: {point}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
