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
      <View style={{paddingVertical: 16, paddingHorizontal: 24}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}
            // style={{padding: 10}}
          >
            <Ionicons name="menu" size={40} color="white" />
          </TouchableOpacity>

          <Picker
            dropdownIconColor={'white'}
            style={{
              height: 48,
              width: 112,
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

      <View style={{flex: 1, justifyContent: 'center', padding: 32}}>
        <View>
          <Text style={styles.title}>Quote Me !</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 50,
          }}>
          <Image style={styles.image} source={require('../../img/logo2.png')} />
        </View>

        <View
          style={{
            height: '25%',
            backgroundColor: 'white',

            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
            elevation: 4,
            padding: 24,
          }}>
          <ScrollView
            style={{
              minHeight: '100%',
            }}>
            <View
              style={{
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <View
                style={{
                  flex: 1,
                }}>
                <Text
                  style={{
                    textAlign: 'left',
                    fontStyle: 'italic',
                    fontSize: 16,
                    lineHeight: 20,
                    fontWeight: '500',
                    // paddingVertical: 4,
                  }}>
                  {quote}
                </Text>
              </View>
              <Text
                style={{
                  textAlign: 'right',
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 20,
                  paddingTop: 8,
                }}>
                - {auth}
              </Text>
            </View>
          </ScrollView>
        </View>
        <View>
          <SharingQuote quote={quote} auth={auth} />
        </View>
        <View style={{height: 56, width: 1}}></View>

        {/* Bottom View */}
        <TouchableOpacity
          onPress={() => {
            setnumberholder(numgenerator());
          }}
          style={{
            backgroundColor: 'white',
            height: 56,
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 4,
          }}>
          <Text
            style={{
              color: mainColor,

              textAlign: 'left',

              fontSize: 15,
              lineHeight: 20,
              fontWeight: '500',
            }}>
            NEW QUOTE
          </Text>
        </TouchableOpacity>
        <View style={{height: 24, width: 1}}></View>
      </View>
    </View>
  );
}
