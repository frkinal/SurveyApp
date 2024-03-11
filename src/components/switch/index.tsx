import React, {useState} from 'react';
import {View} from 'react-native';
import {Switch as RNPSwitch} from 'react-native-paper';
import {Text} from '@components';
import {SwitchProps} from '@components/types';
import {colors} from '@utils';
import style from './style';
export const Switch: React.FC<SwitchProps> = props => {
  const {content, important, ...rest} = props;
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={style.container}>
      <View style={style.switch_container}>
        <RNPSwitch
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
          color={colors.primary}
          {...rest}
        />
      </View>
      <View style={style.content_container}>
        <Text
          style={style.content}
          children={important && ' *'}
          translate={content}
        />
      </View>
    </View>
  );
};
