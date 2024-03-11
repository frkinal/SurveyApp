import {colors} from '@utils';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  top_container: {
    width: '100%',
    minHeight: 25,
  },
  top_container_title: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: 'bold',
  },
  top_container_content: {
    width: '100%',
    fontSize: 15,
    color: colors.primary,
  },
  mid_container: {
    width: '100%',
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mid_container_content_container: {
    width: '35%',
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  mid_container_content: {
    fontSize: 13,
    marginLeft: 5,
  },
  bot_container: {
    width: '100%',
    height: 35,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  bot_container_content_container: {
    width: 250,
    height: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderRadius: 20,
  },
  bot_container_content: {
    fontSize: 13,
    color: colors.primary,
  },
});
