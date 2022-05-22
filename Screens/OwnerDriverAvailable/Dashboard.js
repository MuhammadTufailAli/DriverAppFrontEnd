import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import * as CONSTANT from '../../Constants/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
const {width, height} = Dimensions.get('screen');
const Dashboard = ({navigation, route}) => {
  const [data, setData] = useState();

  const HireDriverCheck = async () => {
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
          navigation.navigate('Select Driver');
        } else if (response.data.code == 1) {
          alert(response.data.message);
        } else {
          alert('SomeThing Went Wrong');
        }
      });
  };

  const DriverCheck = () => {
    axios
      .get('http://10.0.2.2:3001/carOwner/availableDrivers')
      .then(response => {
        console.log(response.data);
        if (response.data.code == 0) {
          navigation.navigate('DriverAvailable');
        } else if (response.data.code == 1) {
          alert(response.data.message);
        } else {
          alert('Something went Wrong');
        }
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
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
          <TouchableOpacity onPress={() => navigation.navigate('OwnerProfile')}>
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
                onPress={() => DriverCheck()}>
                <FontAwesome
                  name="drivers-license"
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
                  Available Drivers
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
                <Image
                  source={require('../../Assets/Images/DriverIcon.png')}
                  style={{
                    height: 90,
                    width: 100,
                    marginTop: 10,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontWeight: '500',
                    color: '#fff',
                    fontSize: 18,
                    marginBottom: 5,
                    fontFamily: 'SpaceGrotesk-Bold',
                  }}>
                  My Driver
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
              <FontAwesome
                name="video-camera"
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
                Live Surveillanice
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                alert('Coming Soon');
              }}
              style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#f5d21f',
                borderRadius: 10,
                elevation: 20,
                marginLeft: 10,
                marginRight: 10,
              }}>
              <FontAwesome5
                name="map-marker-alt"
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
                Track Car
              </Text>
            </TouchableOpacity>
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
              onPress={() => CarExpenses()}
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
                  color: '#fff',
                  fontSize: 18,
                  marginBottom: 5,
                  fontFamily: 'SpaceGrotesk-Bold',
                }}>
                Car Expenses
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Payment Method', {
                  firstName: route.params.firstName,
                });
              }}
              style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#f5d21f',
                borderRadius: 10,
                elevation: 20,
                marginLeft: 10,
                marginRight: 10,
              }}>
              <FontAwesome
                name="money"
                color={'#000'}
                size={90}
                style={{marginTop: 10}}
              />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  marginBottom: 5,
                  fontFamily: 'SpaceGrotesk-Bold',
                }}>
                Online Payment
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  imageStyles: {
    borderRadius: 10,
    height: 50,
    width: 50,
    marginLeft: 10,
    alignSelf: 'center',
    marginRight: 20,
  },
});
