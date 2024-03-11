import {colors} from '@utils';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  top_container: {
    width: '100%',
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  top_container_content: {
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
    width: 120,
    height: 30,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  bot_container_content: {
    fontSize: 13,
    color: colors.white,
  },
});
