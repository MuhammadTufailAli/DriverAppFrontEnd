import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import * as CONSTANT from '../../Constants/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('screen');
//My Driver, Attendance Request
//AvailAble Driver
const DashboardDriver = ({navigation, route}) => {
  const [userName, setUserName] = useState();
  const CarExpenses = async () => {
    let OwnerData = await AsyncStorage.getItem('OwnerData');
    let parsedOwner = JSON.parse(OwnerData);
    const carOwnerUserName = parsedOwner.userName;

    axios
      .get(
        `http://10.0.2.2:3001/carOwner/hiredDriver?carOwnerUserName=${carOwnerUserName}`,
      )
      .then(response => {
        if (response.data.code == 0) {
          navigation.navigate('MyDriver');
        } else if (response.data.code == 1) {
          alert(response.data.message);
        } else {
          alert('SomeThing Went Wrong');
        }
      });
  };

  const HireDriverCheck = async () => {
    let DriverData = await AsyncStorage.getItem('DriverData');
    let parsedDriver = JSON.parse(DriverData);
    const driverUserName = parsedDriver.userName;

    axios
      .get(
        `http://10.0.2.2:3001/driver/allRequests?driverUserName=${parsedDriver.userName}`,
      )
      .then(response => {
        console.log(response.data);
        if (response.data.code == 0) {
          navigation.navigate('DriverRequest');
        } else if (response.data.code == 1) {
          alert(response.data.message);
        } else {
          alert('SomeThing Went Wrong');
        }
      });
  };
  const mybooking = async () => {
    let DriverData = await AsyncStorage.getItem('DriverData');
    let parsedDriver = JSON.parse(DriverData);
    const driverUserName = parsedDriver.userName;

    CONSTANT.API.get(
      `/driver/hireBy?driverUserName=${parsedDriver.userName}`,
    ).then(response => {
      if (response.data.code == 0) {
        navigation.navigate('MyBooking');
      } else if (response.data.code == 1) {
        alert(response.data.message);
      } else {
        alert('Something went Wrong');
      }
    });
  };

  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="#2e2e2e" />
        <View
          style={{
            height: 60,
            backgroundColor: '#2e2e2e',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              marginLeft: 20,
              fontSize: 18,
              fontFamily: 'SpaceGrotesk-Medium',
            }}>
            Welcome {route.params.firstName}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('DriverProfile')}>
            <Image
              source={require('../../Assets/Images/Profile.jpg')}
              style={styles.imageStyles}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../Assets/Images/smartlogo.png')}
          style={{alignSelf: 'center', height: 120, marginTop: 20, width: 250}}
          resizeMode="cover"
        />
        <View
          style={{
            width: width * 0.9,
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 30,
            backgroundColor: '#808080',
            paddingBottom: 20,
            paddingTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignContent: 'center',
              alignItems: 'center',

              borderRadius: 10,
              marginTop: 10,
              marginBottom: 10,
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#f5d21f',
                borderRadius: 10,
                elevation: 20,
                marginRight: 10,
                marginLeft: 10,
              }}>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => mybooking()}>
                <Ionicicons
                  name="ios-car-sport-sharp"
                  size={85}
                  color="#000"
                  style={{marginTop: 10}}
                />
                <Text
                  style={{
                    fontWeight: '500',
                    color: '#fff',
                    fontSize: 18,
                    marginBottom: 5,
                    fontFamily: 'SpaceGrotesk-Bold',
                  }}>
                  My Booking
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#f5d21f',
                borderRadius: 10,
                elevation: 20,
                marginLeft: 10,
                marginRight: 10,
              }}>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => HireDriverCheck()}>
                <FontAwesome5
                  name="user-friends"
                  size={85}
                  color={'#000'}
                  style={{marginTop: 10}}
                />
                <Text
                  style={{
                    fontWeight: '500',
                    color: '#fff',
                    fontSize: 18,
                    marginBottom: 5,
                    fontFamily: 'SpaceGrotesk-Bold',
                  }}>
                  Requests
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignContent: 'center',
              alignItems: 'center',

              borderRadius: 10,
              marginTop: 20,
              marginBottom: 10,
            }}>
            <View
              onStartShouldSetResponder={() => alert('Coming Soon')}
              style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#f5d21f',
                borderRadius: 10,
                elevation: 20,
                marginRight: 10,
                marginLeft: 10,
              }}>
              <MaterialCommunityIcons
                name="google-maps"
                size={90}
                color="#000"
                style={{marginTop: 10}}
              />
              <Text
                style={{
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: 18,
                  marginBottom: 5,
                  fontFamily: 'SpaceGrotesk-Bold',
                }}>
                Map
              </Text>
            </View>

            <View
              onStartShouldSetResponder={() => alert('Coming Soon')}
              style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#f5d21f',
                borderRadius: 10,
                elevation: 20,
                marginLeft: 10,
                marginRight: 10,
              }}>
              <Fontisto
                name="credit-card"
                color={'#000'}
                size={90}
                style={{marginTop: 10}}
              />
              <Text
                style={{
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: 18,
                  marginBottom: 5,
                  fontFamily: 'SpaceGrotesk-Bold',
                }}>
                Online Payment
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignContent: 'center',
              alignItems: 'center',

              borderRadius: 10,
              marginTop: 20,
              marginBottom: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Driver Expense', {
                  username: route.params.username,
                });
              }}
              style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#f5d21f',
                borderRadius: 10,
                elevation: 20,
                marginRight: 10,
                marginLeft: 10,
              }}>
              <FontAwesome5
                name="money-check-alt"
                color={'#000'}
                size={90}
                style={{marginTop: 10}}
              />
              <Text
                style={{
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: 18,
                  marginBottom: 5,
                  fontFamily: 'SpaceGrotesk-Bold',
                }}>
                Car Expenses
              </Text>
            </TouchableOpacity>

            <View
              onStartShouldSetResponder={() => alert('Coming Soon')}
              style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#f5d21f',
                borderRadius: 10,
                elevation: 20,
                marginLeft: 10,
                marginRight: 10,
              }}>
              <MaterialIcons
                name="live-help"
                color={'#000'}
                size={90}
                style={{marginTop: 10}}
              />
              <Text
                style={{
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: 18,
                  marginBottom: 5,
                  fontFamily: 'SpaceGrotesk-Bold',
                }}>
                Help
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardDriver;
const styles = StyleSheet.create({
  imageStyles: {
    borderRadius: 10,
    height: 50,
    width: 50,

    alignSelf: 'center',
    marginRight: 10,
  },
});
