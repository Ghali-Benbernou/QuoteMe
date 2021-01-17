import React from 'react';
import {View, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

export default function Categories() {
  const Categ = [
    {
      title: 'First Item',
    },
    {
      title: 'Second Item',
    },
    {
      title: 'Third Item',
    },
  ];
  return (
    <View>
      <Text>Category screen</Text>
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
