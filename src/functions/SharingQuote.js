import React from 'react';
import {Text, View, Share, Button} from 'react-native';

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
    <View>
      <View style={{}}>
        <Button onPress={onShare} title="Share" />
      </View>
    </View>
  );
}
