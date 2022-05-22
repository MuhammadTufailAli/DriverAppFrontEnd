import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import * as CONSTANT from '../../Constants/Constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('screen');

const DriverExpense = ({navigation, route}) => {
  const username = route.params.username;
  useEffect(() => {
    getData();
  }, [data]);
  const [data, setData] = useState();
  const [receivedData, setReceivedData] = useState([]);
  const [OwnerUserName, setOwnerUserName] = useState();
  const [AttendaceShow, setAttendanceShow] = useState(false);
  const [AttendanceData, setAttendanceData] = useState();
  const [AttendanceHistoryShow, setAttendanceHistoryShow] = useState(false);
  const [AttendanceHistoryData, setAttendanceHistoryData] = useState();

  const getData = async () => {
    let OwnerData = await AsyncStorage.getItem('OwnerData');
    let parsedOwner = JSON.parse(OwnerData);
    setOwnerUserName(parsedOwner.userName);
    axios
      .get(`http://10.0.2.2:3001/driver/driverexpense?userName=${username}`)
      .then(response => {
        console.log(response.data.data);
        setReceivedData(response.data.data);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{fontSize: 40, fontWeight: 'bold'}}>
          Expense <Text style={{color: '#FFBF00'}}>History</Text>
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#404040',
          height: '100%',
          borderRadius: 25,
          marginTop: 20,
        }}>
        <FlatList
          data={receivedData}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  marginTop: 20,
                  borderWidth: 1,
                  borderColor: '#FFBF00',
                  width: width * 0.9,
                  alignSelf: 'center',
                  borderRadius: 10,
                  padding: 10,
                }}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                  Salary:{' '}
                  <Text style={{fontWeight: 'normal'}}>{item.salary}</Text>
                </Text>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                  Description:{' '}
                  <Text style={{fontWeight: 'normal'}}>{item.description}</Text>
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default DriverExpense;
const styles = StyleSheet.create({
  ProfileView: {
    flexDirection: 'row',
    width: width * 0.8,
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderBottomWidth: 1,
    marginBottom: 5,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  ProfileTitleText: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 16,
    marginBottom: 10,
    alignSelf: 'center',
    textAlign: 'center',
  },
  ProfileText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'SpaceGrotesk-Regular',
  },
  imageStyles: {
    borderRadius: 10,
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 5,
  },
});
