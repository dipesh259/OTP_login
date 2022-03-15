import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/Button';

function VerifyCode(props) {
    const [code, setCode] = useState('');
  return (
    <View style={styles.screen}>
        <Text style={styles.text}>Enter OTP</Text>
        <TextInput autoFocus value={code} onChangeText={setCode} keyboardType='numeric' style={styles.input} />
        <Button buttonColor={'black'}
          title="Verify"
          buttonStyle={{width: '90%', alignSelf: 'center'}}
          textStyle={{fontSize: 20}}
          onPress={() => props.onSubmit(code)}
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

export default VerifyCode;
