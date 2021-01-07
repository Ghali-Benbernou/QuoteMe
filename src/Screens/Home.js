import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {quotes} from '../../quotes';

import {styles} from '../../style';
// You can import from local files

// import {quotes} from './quotes';
function numgenerator() {
  var randomNumber = Math.floor(Math.random() * 320) + 1;
  return randomNumber;
}

export default function Home() {
  const [numberholder, setnumberholder] = useState(0);

  const quote = quotes[numberholder].text;
  const auth = quotes[numberholder].from;

  const mainColor = '#111d5e';
  return (
    <View style={{flex: 1, backgroundColor: mainColor}}>
      {/* Center View */}
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
          }}>
          <Image style={styles.image} source={require('../../img/logo1.png')} />
          <View>
            <Text style={styles.title}>Quote Me !</Text>
          </View>
        </View>

        <View
          style={{
            height: '20%',
            backgroundColor: 'white',
            margin: '4%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            elevation: 5,
          }}>
          <ScrollView style={{padding: 20}}>
            <Text style={{textAlign: 'left'}}>
              {quote} {'\n'} - {auth}
            </Text>
          </ScrollView>
        </View>
      </View>

      {/* Bottom View */}
      <TouchableOpacity
        onPress={() => {
          setnumberholder(numgenerator());
        }}
        style={{
          backgroundColor: 'white',
          height: 60,
          borderRadius: 30,
          margin: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: mainColor, fontWeight: 'bold'}}>NEW QUOTE</Text>
      </TouchableOpacity>
    </View>
  );
}
