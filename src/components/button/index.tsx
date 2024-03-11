import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {Text} from '@components';
import {ButtonProps} from '@components/types';
import {colors} from '@utils';
import {container, text as textStyle} from './style';
export const Button: React.FC<ButtonProps> = props => {
  const {text, preset = 'primary', color, isLoading = false, ...rest} = props;
  return (
    <TouchableOpacity
      {...rest}
      style={container[preset as keyof typeof container]}>
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={[
          textStyle[preset as keyof typeof textStyle],
          {color: colors[color], display: isLoading ? 'none' : 'flex'},
        ]}
        translate={text}
      />
      {isLoading && <ActivityIndicator size="large" color={colors[color]} />}
    </TouchableOpacity>
  );
};
