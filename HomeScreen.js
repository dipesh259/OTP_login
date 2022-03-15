import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import auth from '@react-native-firebase/auth';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.phoneNumber}>{auth().currentUser.phoneNumber}</Text>
      <View style={{marginTop: '15%'}}>
        <Button
          buttonColor={'white'}
          title="Sign Out"
          titleColor={'red'}
          buttonStyle={{width: '80%', alignSelf: 'center'}}
          textStyle={{fontSize: 20}}
          onPress={() => auth().signOut()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 2,
        borderColor: 'lightblue',
        width: 300,
        marginVertical: 30,
        fontSize: 25,
        padding: 10,
        borderRadius: 8,
    },
    text: {
        fontSize: 18,
    },
    phoneNumber: {
        fontSize: 21,
        marginTop: 20,
    },
})

export default HomeScreen;
