import {colors} from '@utils';
import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
  },
  auth_contracts_desc_container: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '10%',
    alignSelf: 'center',
  },
  auth_contracts_title: {
    fontSize: 20,
    color: colors.black,
  },
  auth_contracts_content: {
    fontSize: 13,
    color: colors.black,
    textAlign: 'center',
  },
  auth_contracts_container: {
    width: '90%',
    alignSelf: 'center',
  },
  button_container: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
});
