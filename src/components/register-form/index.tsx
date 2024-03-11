import React, {useState} from 'react';
import {
  View,
  Platform,
  KeyboardAvoidingView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Button, TextInput, Text} from '@components';
import {colors, isValidEmail} from '@utils';
import {useAppDispatch} from '@hooks';
import {authRegister} from '@services';
import style from './style';
import {RegisterFormProps} from '@components/types';
export const RegisterForm: React.FC<RegisterFormProps> = props => {
  const {onPress: goBack} = props;
  const dispatch = useAppDispatch();
  const [mail, setMail] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [birthday, setbirthday] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const genderOptions = [
    {
      value: 'male',
      label: 'Erkek',
    },
    {
      value: 'female',
      label: 'Kadın',
    },
  ];

  const renderItem = ({item}: {item: {value: string; label: string}}) => {
    const onPress = () => {
      setGender(item.value);
    };
    return (
      <TouchableOpacity
        style={[
          style.render_item_container,
          {
            backgroundColor:
              gender === item?.value ? colors.primary : colors.white,
          },
        ]}
        onPress={onPress}>
        <Text
          style={[
            style.form_item_text,
            {
              color: gender === item?.value ? colors.white : colors.black,
            },
          ]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };
  const isValidForm = () => {
    if (!nickname.trim() || nickname.length < 3) {
      Alert.alert('Invalid name!', 'Invalid name!');
      return;
    }
    if (!gender.trim() || gender.length < 3) {
      Alert.alert('Invalid gender!', 'Invalid gender!');
      return;
    }
    if (!birthday.trim() || birthday.length < 3) {
      Alert.alert('Invalid birrhdate!', 'Invalid birrhdate!');
      return;
    }
    if (!isValidEmail(mail)) {
      Alert.alert('Invalid mail!', 'Invalid mail!');
      return;
    }
    if (!password.trim() || password.length < 8) {
      Alert.alert('Invalid password!', 'Invalid password!');
      return;
    }
    return true;
  };

  const sumbitForm = () => {
    if (isValidForm()) {
      dispatch(
        authRegister({email: mail, password, nickname, birthday, gender}),
      );
    }
  };

  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={style.container}>
      <View style={style.form_container}>
        <View style={style.form_item_container}>
          <Text style={style.form_item_text} translate="gender" />
          <FlatList
            data={genderOptions}
            keyExtractor={item => item.value}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
          />
        </View>
        <View style={style.form_item_container}>
          <Text style={style.form_item_text} translate="email" />
          <TextInput value={mail} onChangeText={setMail} />
        </View>
        <View style={style.form_item_container}>
          <Text style={style.form_item_text} translate="nickname" />
          <TextInput value={nickname} onChangeText={setNickname} />
          <Text style={style.form_item_desc} translate="nickname_desc" />
        </View>
        <View style={style.form_item_container}>
          <Text style={style.form_item_text} translate="password" />
          <TextInput value={password} onChangeText={setPassword} isPassword />
        </View>
        <View style={style.form_item_container}>
          <Text style={style.form_item_text} translate="birthday" />
          <TextInput value={birthday} onChangeText={setbirthday} />
        </View>
        <View style={style.button_container}>
          <Button text="forward" color="white" onPress={sumbitForm} />
          <Text style={style.register_text} translate="have_account">
            <Text
              style={style.register_text_bold}
              translate="login"
              onPress={() =>
                goBack(
                  setMail,
                  setPassword,
                  setNickname,
                  setGender,
                  setbirthday,
                )
              }
            />
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
