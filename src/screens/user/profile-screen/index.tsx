import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {ProfileItem, ContractItem} from '@components';
import {ContractItemContents, ProfileItemContents} from '@components/types';
import {Profile} from '@assets';
import style from './style';
export const ProfileScreen = () => {
  const data = [
    {title: 'Nicname', content: 'John Doe'},
    {title: 'E-mail', content: 'jhon@doe.com'},
    {title: 'Doğum Tarihi', content: '01.01.1111'},
    {title: 'Cinsiyet', content: 'Erkek'},
  ];
  const about = [
    {
      title: 'Gizlilik Politikası',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      title: 'Şartlar ve Koşullar',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
  ];
  const renderProfileItem = ({item}: {item: ProfileItemContents}) => {
    return <ProfileItem contents={item} />;
  };
  const renderContractItem = ({item}: {item: ContractItemContents}) => {
    return <ContractItem contents={item} />;
  };
  return (
    <View style={style.container}>
      <View style={style.profile_container}>
        <View>{Profile('primary')}</View>
        <Text style={style.profile_text}>PROFİL</Text>
      </View>
      <View style={style.render_item_container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderProfileItem}
          ListHeaderComponent={
            <View style={style.header_container}>
              <Text style={style.header_text}>Hesap Bilgileri</Text>
            </View>
          }
        />
      </View>
      <View style={style.render_item_container}>
        <FlatList
          data={about}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderContractItem}
          ListHeaderComponent={
            <View style={style.header_container}>
              <Text style={style.header_text}>Sözleşmeler</Text>
            </View>
          }
        />
      </View>
    </View>
  );
};
