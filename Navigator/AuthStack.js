import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash/Index';
import Login from '../Screens/Login/Index';
import OwnerSignUp from '../Screens/SignUp/OwnerSignUp';
import DriverSignUp from '../Screens/SignUp/DriverSignUp';
import DriverRequest from '../Screens/DriverRequests/Index';
import OwnerDriverAvailable from '../Screens/OwnerDriverAvailable/Index';
import DriverDetails from '../Screens/OwnerDriverAvailable/DriverDetails';
import Dashboard from '../Screens/OwnerDriverAvailable/Dashboard';
import MyDriver from '../Screens/OwnerDriverAvailable/MyDriver';
import Stripe from '../Screens/OwnerDriverAvailable/Stripe';
import PaymentMethod from '../Screens/OwnerDriverAvailable/PaymentMethod';
import DriverDashboard from '../Screens/DriverRequests/DashbordDriver';
import DriverExpense from '../Screens/DriverRequests/DriverExpense';
import MyBooking from '../Screens/DriverRequests/MyBooking';
import OwnerProfile from '../Screens/OwnerDriverAvailable/Profile';
import DriverProfile from '../Screens/DriverRequests/DriverProfile';
import FirstScreen from '../Screens/FirstScreen/Index';
import SelectDriverToPay from '../Screens/OwnerDriverAvailable/SelectDriverToPay';
import PayDriver from '../Screens/OwnerDriverAvailable/PayDriver';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Driver Expense" component={DriverExpense} />
      <Stack.Screen name="Pay Driver" component={PayDriver} />
      <Stack.Screen name="Stripe" component={Stripe} />
      <Stack.Screen name="Payment Method" component={PaymentMethod} />
      <Stack.Screen name="OwnerSignUp" component={OwnerSignUp} />
      <Stack.Screen name="DriverSignUp" component={DriverSignUp} />
      <Stack.Screen name="DriverRequest" component={DriverRequest} />
      <Stack.Screen name="DriverAvailable" component={OwnerDriverAvailable} />
      <Stack.Screen name="DriverDetail" component={DriverDetails} />
      <Stack.Screen name="DashBoard" component={Dashboard} />
      <Stack.Screen name="MyDriver" component={MyDriver} />
      <Stack.Screen name="Select Driver" component={SelectDriverToPay} />
      <Stack.Screen name="DriverDashboard" component={DriverDashboard} />
      <Stack.Screen name="MyBooking" component={MyBooking} />
      <Stack.Screen name="OwnerProfile" component={OwnerProfile} />
      <Stack.Screen name="DriverProfile" component={DriverProfile} />
    </Stack.Navigator>
  );
};

export default AuthStack;
