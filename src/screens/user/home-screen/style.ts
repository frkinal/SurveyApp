import {colors} from '@utils';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  image_container: {
    flex: 1,
    resizeMode: 'cover',
  },
  gradient: {
    flex: 1,
  },
  container: {
    width: '100%',
    height: '60%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
  },
  hello: {
    fontSize: 15,
    color: colors.black,
    marginVertical: 10,
  },
  name: {
    fontSize: 15,
    color: colors.primary,
  },
  language_container: {
    position: 'absolute',
    top: 50,
    right: 25,
  },
  language: {
    fontSize: 20,
    color: colors.white,
  },
});
