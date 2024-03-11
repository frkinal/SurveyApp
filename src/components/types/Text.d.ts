import {TextProps as RNTextProps} from 'react-native';
import {I18nType} from '@languages';
export interface TextProps extends RNTextProps {
  translate?: I18nType;
}
