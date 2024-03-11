import {colors} from '@utils';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.lightGray,
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: colors.primary,
  },
  content_container: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
  header: {
    fontSize: 15,
    color: colors.black,
    textAlign: 'center',
    marginVertical: 10,
  },
  content: {
    fontSize: 14,
    color: colors.gray,
    textAlign: 'justify',
  },
});
