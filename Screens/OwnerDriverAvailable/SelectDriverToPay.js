import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as CONSTANT from '../../Constants/Constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('screen');

const SelectDriverToPay = ({navigation}) => {
  useEffect(() => {
    getData();
  }, [data]);
  const [data, setData] = useState();
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
      .get(
        `http://10.0.2.2:3001/carOwner/hiredDriver?carOwnerUserName=${parsedOwner.userName}`,
      )
      .then(response => {
        if (response.data.code == 0) {
          setData(response.data);
        } else {
          alert('SomeThing Went Wrong');
        }
      });
  };
  const AttendaceReq = () => {
    axios
      .get(
        `http://10.0.2.2:3001/carOwner/driverAttendanceReqView?reqId=${data.data.reqId}`,
      )
      .then(response => {
        console.log(response.data);
        if (response.data.code == 0) {
          setAttendanceData(response.data.data);
        } else if (response.data.code == 1) {
          setAttendanceData(response.data.data);
          setAttendanceShow(false);
          alert(response.data.message);
        } else {
          alert('Something went Wrong');
        }
      });
  };
  const AttendanceAction = (status, id) => {
    const action = {
      status,
      id,
    };

    axios
      .post('http://10.0.2.2:3001/carOwner/driverAttendanceAction', action)
      .then(response => {
        alert(response.data.message);

        AttendaceReq();
      });
  };

  const AttendanceHistory = () => {
    axios
      .get(
        `http://10.0.2.2:3001/carOwner/driverAttendanceHistory?reqId=${data.data.reqId}`,
      )
      .then(response => {
        if (response.data.code == 0) {
          console.log(response.data);
          setAttendanceHistoryData(response.data.data);
        } else {
          alert('Somethinh Went Wrong');
        }
      });
  };

  const username = data != undefined && data.driverDetails.userName;

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{fontSize: 40, fontWeight: 'bold'}}>
          Select <Text style={{color: '#FFBF00'}}>Driver</Text>
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          borderWidth: 1,
          width: width * 0.9,
          alignSelf: 'center',
          borderRadius: 25,
          padding: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Pay Driver', {username: username});
          }}>
          <Image
            source={require('../../Assets/Images/Profile.jpg')}
            style={styles.imageStyles}
            resizeMode="cover"
          />

          <View style={styles.ProfileView}>
            <Text style={styles.ProfileTitleText}>Driver User Name</Text>
            <Text style={styles.ProfileText}>{username}</Text>
          </View>
          <View style={styles.ProfileView}>
            <Text style={styles.ProfileTitleText}>Email</Text>
            <Text style={styles.ProfileText}>
              {data != undefined && data.driverDetails.email}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SelectDriverToPay;
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
