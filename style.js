import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    padding: 8,
    height: 50,
  },

  paragraph: {
    margin: 0,
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'white',
  },
  image: {
    height: 200,
    width: 150,
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111d5e',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
