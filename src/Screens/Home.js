import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
// import DropDownPicker from "react-native-custom-dropdown";
import {
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
  AppRegistry,
  Dimensions,
} from 'react-native';
// import { DrawerNavigator } from 'react-navigation';
import {quotes} from '../../quotes';

import {styles} from '../../style';
import SharingQuote from '../functions/SharingQuote';
import Navigations from '../Navigations';
import {color} from 'react-native-reanimated';
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
  const navigation = useNavigation();

  const [selectedValue, setSelectedValue] = useState('ALL');

  return (
    <View style={{flex: 1, backgroundColor: mainColor}}>
      {/* Center View */}
      <View style={{paddingHorizontal: 20, marginTop: 5}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}
            style={{padding: 10}}>
            <Ionicons name="menu" size={40} color="white" />
          </TouchableOpacity>

          <Picker
            dropdownIconColor={'white'}
            style={{
              height: 50,
              width: 150,
              paddingTop: 40,
              alignItems: 'center',
              color: 'white',
            }}
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}>
            <Picker.Item label="ALL" value="ALL" />
            <Picker.Item label="Entreprenaria" value="Entreprenaria" />
            <Picker.Item label="Emotional" value="Emotional" />
            <Picker.Item label="Inspirational" value="Inspirational" />
            <Picker.Item label="Motivational" value="Motivational" />
            <Picker.Item label="Happiness" value="Happiness" />
            <Picker.Item label="Wisdom" value="Wisdom" />
            <Picker.Item label="Love" value="Love" />
            <Picker.Item label="Friendship" value="Friendship" />
          </Picker>
        </View>
      </View>

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
        </View>
        <View style={{}}>
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
          marginBottom: 20,
        }}>
        <Text style={{color: mainColor, fontWeight: 'bold'}}>NEW QUOTE</Text>
      </TouchableOpacity>
    </View>
  );
}
