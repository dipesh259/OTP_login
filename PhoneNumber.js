import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/Button';

function PhoneNumber(props) {
  const [phoneNumber, setPhoneNumber] = useState(null);

  return (
    <View style={styles.screen}>
        <Text style={styles.text}>Enter Phone Number</Text>
        <TextInput autoFocus style={styles.input} value={phoneNumber} onChangeText={setPhoneNumber} />
        <Button buttonColor={'black'}
          title="Get OTP"
          buttonStyle={{width: '90%', alignSelf: 'center'}}
          textStyle={{fontSize: 20}}
          onPress={() => props.onSubmit(phoneNumber)}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input : {
        borderWidth: 2,
        borderColor: 'lightblue',
        width: 300,
        marginVertical: 30,
        fontSize: 25,
        padding: 10,
        borderRadius: 8,
    },
    text: {
        fontSize: 25,
    },
})

export default PhoneNumber;
