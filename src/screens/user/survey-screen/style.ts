import {colors} from '@utils';
import {Dimensions, Platform, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
    height: '65%',
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
  timer_container: {
    top: Platform.OS === 'ios' ? 25 : 0,
  },
  countdown_text: {
    color: colors.white,
    fontSize: 16,
  },
  content_container: {
    width: '100%',
    height: height - (Platform.OS === 'ios' ? 200 : 150),
  },
  progress_bar_container: {
    width: '100%',
    height: '35%',
    paddingHorizontal: 20,
  },
  survey_topic_title: {
    fontSize: 15,
    color: colors.white,
  },
  progress_bar_inner_container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  progress_bar: {
    flex: 1,
  },
  progress_bar_text: {
    fontSize: 16,
    color: colors.white,
  },
  progress_bar_text2: {
    fontSize: 13,
    color: colors.gray,
  },
  selection_line: {
    height: 3,
  },
  question_container: {
    width,
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_container: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  previous_button: {
    width: 45,
    height: 45,
    backgroundColor: colors.secondary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  brain_icon_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  text_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  survey_complete: {
    fontSize: 25,
    color: colors.black,
  },
  data_being_created: {
    fontSize: 20,
    color: colors.gray,
  },
});
