//This code is not working
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {StripeProvider, useStripe} from '@stripe/stripe-react-native';
import axios from 'axios';
// import Stripe from './components/Stripe';

export default function Stripe() {
  console.log(typeof useStripe());
  const stripe = useStripe();
  const getName = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      const url = 'http://192.168.18.5:3001/pay';

      const res = await axios.post(url, {name});
      const clientSecret = res.data.clientSecret;
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'Merchant Name',
      });
      if (initSheet.error) return console.log(initSheet.error);
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret: clientSecret,
      });
      if (presentSheet.error) return console.log(presentSheet.error);
      alert('Payment Succeeded');
    } catch (error) {
      alert(error);
    }
  };
  const [name, setName] = React.useState('');
  return (
    <StripeProvider publishableKey="pk_test_51KwsYLCVaKSWzmtARFDdho1GLcbWNjwfEN70wYx3KjNOyC5e75FlDocnJokvvF8zSzQAL0RmVJMZufZO7ZiZLS2J00QClpJ7TF">
      <View>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>
            Pay through debit/
            <Text style={{color: '#FFBF00'}}>credit card</Text>
          </Text>
        </View>
        <View style={{margin: 10, marginTop: 20}}>
          <Text style={{fontSize: 16}}>
            Please enter the full number of the driver whom you want to pay
          </Text>
        </View>
        <View style={{margin: 10}}>
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            name="name"
            onChangeText={setName}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FFBF00',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
