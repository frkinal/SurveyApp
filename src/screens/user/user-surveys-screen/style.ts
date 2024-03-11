import {colors} from '@utils';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  completed_surveys_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '10%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  border: {
    width: 1,
    height: '75%',
    backgroundColor: colors.gray,
  },
  completed_surveys: {
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: '5%',
  },
  completed_surveys_item: {
    width: '32%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    fontSize: 25,
    color: colors.primary,
  },
  content_title: {
    fontSize: 15,
    color: colors.gray,
  },
  list_container: {
    flex: 1,
  },
  list_header_container: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  list_header: {
    fontSize: 15,
    color: colors.black,
  },
  footer: {
    height: 100,
  },
});
