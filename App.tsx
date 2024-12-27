import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInEmpty from './src/pages/logInEmpty';
import Register from './src/pages/register';
import Home from './src/pages/home';
import Notification from './src/pages/notification';
import AddItem from './src/pages/addItem';
export type RootStackParamList = {
  LogInEmpty: undefined;
  Register: undefined;
  Home: undefined;
  // Profile: undefined;
  // Personal: undefined;
  AddItem: undefined;
  Notification: undefined;
  // Editprofile: undefined;
  // Orderdetails: { order: Order }; 
  // Tracking: { order: Order };  // Use the Order type here
  // History: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    // Wrap the entire app with Redux Provider for state management

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogInEmpty" component={LogInEmpty} />
        <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name='AddItem' component={AddItem}/>
          {/* <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Personal" component={Personal} />
        
          <Stack.Screen name="Editprofile" component={Editprofile} />
          <Stack.Screen name="Orderdetails" component={Orderdetails} />
          <Stack.Screen name="Tracking" component={Tracking} />
          <Stack.Screen name="History" component={History} /> */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}
export default App;