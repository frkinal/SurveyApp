import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '@utils';
const {width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
  },
  question_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 15,
    color: colors.black,
    textAlign: 'center',
  },
  options_container: {
    width: '100%',
    height: 80,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option_container: {
    width: 65,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'relative',
  },
  option_text: {
    fontSize: 13,
    lineHeight: 24,
    color: colors.white,
  },
  secondary_options_container: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  secondary_option_container: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 240,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  tertiary_options_container: {
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 100,
    color: colors.primary,
  },
  slider: {
    width,
    height: 50,
  },
  selection_line_container: {
    width: '100%',
    backgroundColor: colors.white,
    marginTop: 25,
    flexDirection: 'row',
    borderRadius: 10,
  },
  selection_line: {
    flex: 1,
    height: 3,
  },
});
