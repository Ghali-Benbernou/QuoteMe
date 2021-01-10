import React from 'react';
import {Text, View, Share, Button, Image, TouchableOpacity} from 'react-native';

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
  return (
    <View style={{flex:1, width:'100%'}}>
      <View style={{alignItems:'flex-end'}}>
      <TouchableOpacity  onPress={onShare}>
      <Image
          style={{width: 25, height: 25}}
          source={require('../../img/copy.png')}
         />
      </TouchableOpacity>
         
      </View>
    </View>
  );
}
