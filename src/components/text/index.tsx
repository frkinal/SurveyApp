import React from 'react';
import {Text as RNText} from 'react-native';
import {t} from '@languages';
import {TextProps} from '@components/types';
export const Text: React.FC<TextProps> = props => {
  const {style, translate, children, ...rest} = props;
  return (
    <RNText style={style} {...rest}>
      {translate && t(`${translate}`)}
      {children}
    </RNText>
  );
};
