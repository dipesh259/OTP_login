import React, {useState} from 'react'
import auth from '@react-native-firebase/auth'
import VerifyCode from './screens/OTP/VerifyCode'
import PhoneNumber from './screens/OTP/PhoneNumber';
import HomeScreen from './screens/OTP/HomeScreen';

function Route() {
  const [confirm, setConfirm] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  async function signIn(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      alert(error);
    }
  }

  async function confirmVerificationCode(code) {
    try {
      await confirm.confirm(code);
      setConfirm(null);
    } catch (error) {
      alert('Invalid Code')
    }
  }

  auth().onAuthStateChanged((user) => {
    if(user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  })

  if (authenticated) return <HomeScreen />

  if (confirm) return <VerifyCode onSubmit={confirmVerificationCode} />

  return <PhoneNumber onSubmit={signIn} />
}

export default Route