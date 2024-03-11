import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {Modal} from '@components';
import {ContractItemProps} from '@components/types';
import style from './style';
export const ContractItem: React.FC<ContractItemProps> = props => {
  const [modalVisible, setmodalVisible] = useState<boolean>(false);
  const {
    contents: {title, content},
  } = props;
  const changeModalVisible = () => setmodalVisible(!modalVisible);
  return (
    <TouchableWithoutFeedback onPress={changeModalVisible}>
      <View style={style.container}>
        <Text style={style.title}>{title}</Text>
        <Modal
          modalVisible={modalVisible}
          changeModalVisible={changeModalVisible}>
          <View style={style.content_container}>
            <Text style={style.header}>{title}</Text>
            <Text style={style.content}>{content}</Text>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};
