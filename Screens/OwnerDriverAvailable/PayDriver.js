import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import axios from 'axios';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as CONSTANT from '../../Constants/Constants';
export default function PayDriver({navigation, route}) {
  const username = route.params.username;
  const [uri, setUri] = React.useState();
  const [salary, setSalary] = React.useState();
  const [description, setDescription] = React.useState('');

  const SendData = async () => {
    const info = {
      userName: username,
      url: 'Nothing',
      salary: salary,
      description: description,
    };
    if (!salary) {
      alert('Enter salary');
    } else if (!description) {
      alert('Enter description');
    } else {
      try {
        axios
          .post('http://10.0.2.2:3001/driver/driverexpense', info)
          .then(res => res.data)
          .then(data => {
            alert('Successfully Submitted');
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  let options = {
    mediaType: 'photo',
    quality: 1,
    includeBase64: true,
  };

  const openGalery = async () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        includeBase64: true,
      },
      response => {
        if (response.didCancel) {
          alert('Cancel');
        } else {
          setUri(response.assets[0].base64);
        }
      },
    );
  };
  return (
    <View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{fontSize: 40, fontWeight: 'bold'}}>
          <Text style={{color: '#FFBF00'}}>Expenses</Text>
        </Text>
      </View>
      <TouchableOpacity
        onPress={openGalery}
        style={{
          backgroundColor: '#1DA1F2',
          padding: 40,
          alignItems: 'center',
          margin: 10,
          marginTop: 10,
        }}>
        <Text style={{color: 'white'}}>+ Add image</Text>
      </TouchableOpacity>
      <View style={{margin: 10}}>
        <TextInput
          style={{
            height: 40,
            borderColor: '#000000',
            borderBottomWidth: 1,
            marginBottom: 10,
            marginTop: 80,
          }}
          placeholder="Enter Salary"
          name="name"
          keyboardType="numeric"
          onChangeText={setSalary}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Description"
          name="name"
          onChangeText={setDescription}
        />
        <TouchableOpacity
          onPress={() => {
            SendData();
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
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
