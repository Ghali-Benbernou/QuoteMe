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
  return (
    <View style={{flex: 2, backgroundColor: '#111d5e', padding: 30}}>
      <ScrollView style={{flex: 1, paddingTop: 36, backgroundColor: '#111d5e'}}>
        <Text style={styles.title}>
          <Text style={{fontSize: 60, fontFamily: 'Sarpanch-Bold'}}>"</Text>{' '}
          Quote Me !
        </Text>

        <Image style={styles.image} source={require('../../img/logo1.png')} />

        <View
          style={{
            flexDirection: 'column',
            borderColor: 'black',
            borderWidth: 1,
            backgroundColor: 'white',
            borderRadius: 100 / 4,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              padding: 10,
              fontStyle: 'italic',
            }}>
            "{quote}"
          </Text>
          <Text style={{color: 'black', marginLeft: 150, fontWeight: 'bold'}}>
            -{auth}
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          marginBottom: 30,
          height: 50,
          width: 200,
          borderRadius: 100 / 3,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}
        onPress={() => {
          setnumberholder(numgenerator());
        }}>
        <Text style={styles.text}> Yeeees !</Text>
      </TouchableOpacity>
      <Text style={styles.paragraph}>Generate a random Quote !</Text>
      <Text style={styles.paragraph}>No Bad Vibes</Text>
    </View>
  );
}
