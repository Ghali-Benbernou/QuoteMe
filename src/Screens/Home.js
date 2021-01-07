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
import SharingQuote from '../functions/SharingQuote';
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
        <View>
          <Text style={styles.title}>Quote Me !</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            // marginVertical: 20,
            paddingTop: 50,
            marginBottom: -2,
          }}>
          <Image style={styles.image} source={require('../../img/logo1.png')} />
        </View>

        <View
          style={{
            height: '25%',
            backgroundColor: 'white',
            marginHorizontal: '4%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            elevation: 5,
            paddingHorizontal: 20,
          }}>
          <ScrollView style={{margin: 10}}>
            <Text
              style={{textAlign: 'left', fontStyle: 'italic', fontSize: 20}}>
              {quote} {'\n'}
            </Text>
            <Text style={{textAlign: 'right', fontWeight: 'bold'}}>
              - {auth}
            </Text>
          </ScrollView>
          <SharingQuote quote={quote} auth={auth} />
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
