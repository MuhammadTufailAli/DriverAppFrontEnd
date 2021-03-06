import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import logo from '../../Assets/Images/smartlogo.png';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import Styles from './Styles';

const Index = ({navigation}) => {
  const Logo = () => {
    return (
      <View style={Styles.imageContainer}>
        <Image source={logo} style={Styles.logoImageStyles} />
      </View>
    );
  };
  const OwnerButton = () => {
    return (
      <TouchableOpacity
        style={Styles.buttonStyles}
        onPress={() => navigation.navigate('Login', {userType: 'D'})}>
        <Text style={Styles.textStyle}>Login as Driver</Text>
      </TouchableOpacity>
    );
  };
  const DriverButton = () => {
    return (
      <TouchableOpacity
        style={Styles.buttonStyles}
        onPress={() => navigation.navigate('Login', {userType: 'O'})}>
        <Text style={Styles.textStyle}>Login as Owner</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Logo />
      <Animatable.View animation="fadeInUpBig">
        <OwnerButton />
        <DriverButton />
      </Animatable.View>
    </View>
  );
};

export default Index;
