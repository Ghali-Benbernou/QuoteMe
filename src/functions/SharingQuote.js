import React from 'react';
import {
  Text,
  View,
  Share,
  Button,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Clipboard from '@react-native-community/clipboard';

export default function SharingQuote({quote, auth}) {
  async function onShare() {
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
  }
  const copyToClipboard = () => {
    Clipboard.setString(quote + ' - ' + auth);
    showToastWithGravity();
  };
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'Quote Copied !',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };
  return (
    <View style={{paddingHorizontal: 20, marginTop: 5}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => copyToClipboard()}>
          <Ionicons name="copy-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onShare}>
          <Ionicons name="share-social-sharp" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
