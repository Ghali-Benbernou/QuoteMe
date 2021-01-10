import React from 'react';
import {Text,
   View,
    Share,
     Button,
      Image,
       TouchableOpacity,
      ToastAndroid,} from 'react-native';

import Clipboard from '@react-native-community/clipboard';

export default function SharingQuote({quote, auth}) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: quote + ' - ' + auth,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log('shared with activity type of ' + result.activityType);
        } else {
          // shared
          console.log('shared');
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log('dismissed');
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const copyToClipboard = () => {
    Clipboard.setString(
      quote + ' - ' + auth,
    ); };
    
  return (
   
      <View style={{ paddingHorizontal:20, marginTop:5}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <TouchableOpacity  onPress={copyToClipboard}>
      <Image
          style={{width: 35, height: 25,padding:15, marginLeft:30,}}
          source={require('../../img/copy2.png')} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={onShare}>
      <Image
          style={{width: 10, height: 10, padding: 12, marginRight:30}}
          source={require('../../img/share.png')} />
      </TouchableOpacity>
        </View>
      
      </View>
  
  );
}
