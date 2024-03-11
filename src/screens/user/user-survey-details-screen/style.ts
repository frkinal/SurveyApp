import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '@utils';
const {height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  list_header_container: {
    width: '100%',
    height: 20,
  },
  header_container: {
    width: '100%',
    height: Platform.OS === 'ios' ? 200 : 150,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  inner_header_container: {
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  icon_container: {
    width: 45,
    height: 45,
    backgroundColor: colors.white,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    top: Platform.OS === 'ios' ? 25 : 0,
  },
  point_container: {
    width: 45,
    height: 45,
    backgroundColor: colors.white,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    top: Platform.OS === 'ios' ? 25 : 0,
  },
  point: {
    fontSize: 20,
    color: colors.primary,
  },
  title_container: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.white,
  },
  content_container: {
    width: '100%',
    height: height - (Platform.OS === 'ios' ? 200 : 150),
  },
  footer: {
    height: 100,
  },
});
