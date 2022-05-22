import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function PaymentMethod({navigation, route}) {
  return (
    <View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{fontSize: 40, fontWeight: 'bold'}}>
          Payment <Text style={{color: '#FFBF00'}}>Methods</Text>
        </Text>
      </View>
      <View style={{margin: 20}}>
        <Text style={{fontSize: 16}}>
          Choose the payment method through which you want to pay your driver
        </Text>
      </View>
      <View
        style={{backgroundColor: '#404040', height: '100%', borderRadius: 25}}>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Stripe');
            }}
            style={{
              margin: 10,
              marginTop: 22,
              padding: 5,
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#FFBF00',
            }}>
            <FontAwesome
              name="cc-stripe"
              color={'#5433FF'}
              size={55}
              style={{margin: 10}}
            />
            <Text
              style={{
                margin: 25,
                marginLeft: 68,
                fontSize: 16,
                color: 'white',
              }}>
              Pay through debit/credit card
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert('Coming Soon');
            }}
            style={{
              margin: 10,
              marginTop: 22,
              padding: 5,
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#FFBF00',
            }}>
            <Image
              source={require('../../Assets/Images/easypaisa.png')}
              style={{width: 55, height: 55, margin: 10}}
              resizeMode="cover"
            />
            <Text
              style={{
                margin: 25,
                marginLeft: 88,
                fontSize: 16,
                color: 'white',
              }}>
              Pay through EasyPaisa
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              alert('Coming Soon');
            }}
            style={{
              margin: 10,
              marginTop: 22,
              padding: 5,
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#FFBF00',
            }}>
            <Image
              source={require('../../Assets/Images/jazzcash.png')}
              style={{width: 110, height: 55, margin: 10}}
              resizeMode="cover"
            />
            <Text
              style={{
                margin: 25,
                marginLeft: 36,
                fontSize: 16,
                color: 'white',
              }}>
              Pay through JazzCash
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DashBoard', {
                firstName: route.params.firstName,
              });
            }}
            style={{
              padding: 20,
              backgroundColor: '#FFBF00',
              margin: 10,
              marginTop: 22,
              alignItems: 'center',
              borderRadius: 40,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              BACK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default PaymentMethod;
