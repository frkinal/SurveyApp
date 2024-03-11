import {I18nType} from '@languages';
import {SwitchProps} from 'react-native-paper';
export interface SwitchProps extends SwitchProps {
  content: I18nType;
  important?: boolean;
}
