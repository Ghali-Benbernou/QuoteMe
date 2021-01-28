import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

export default function Categories() {
  const Categ = [
    {
      title: 'GitHub',
    },
    {
      title: 'Web Page',
    },
    {
      title: 'Contact',
    },
  ];
  const navigation = useNavigation();
  return (
    <View>
      <View style={{paddingHorizontal: 20, marginTop: 5}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}
            style={{padding: 10}}>
            <Ionicons name="menu" size={40} color="#111d5e" />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={Categ}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => alert(JSON.stringify(item))}>
              <View
                style={{
                  backgroundColor: '#111d5e',
                  height: 80,
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 5,
                }}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>
                  {' '}
                  {item.title}{' '}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
