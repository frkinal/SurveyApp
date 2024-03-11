import React from 'react';
import {View} from 'react-native';
import {Button, Text, Switch} from '@components';
import style from './style';
export const AuthContracts = () => {
  return (
    <View style={style.container}>
      <View style={style.auth_contracts_desc_container}>
        <Text
          style={style.auth_contracts_title}
          translate="auth_contracts_desc"
        />
        <Text style={style.auth_contracts_content} translate="lorem" />
      </View>
      <View style={style.auth_contracts_container}>
        <Switch content="lorem" important />
        <Switch content="lorem" important />
        <Switch content="lorem" />
      </View>
      <View style={style.button_container}>
        <Button text="forward" color="white" />
      </View>
    </View>
  );
};
