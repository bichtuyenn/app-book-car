
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Signup, Welcome } from './screens';
import MessageList from './screens/Messages';
import NotificationList from './screens/Notification'; // Thêm import này
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
                <Stack.Navigator initialRouteName = 'Welcome'>
                <Stack.Screen name="MessageList" 
                component={MessageList} 
                options = {{
                  headerShown: false
                }}
                />
                <Stack.Screen name="NotificationList" 
                component={NotificationList} 
                options = {{
                  headerShown: false
                }}
                /> 
                <Stack.Screen
                  name = "Login"
                  component = {Login}
                  options = {{
                      headerShown: false
                  }}
                />
                <Stack.Screen
                  name = "Signup"
                  component = {Signup}
                  options = {{
                      headerShown: false
                  }}
                />
                {/* <Stack.Navigator initialRouteName="MessageList" screenOptions={{ headerShown: false }}> */}
                {/* <Stack.Screen name="MessageList" component={MessageList} />
                <Stack.Screen name="NotificationList" component={NotificationList} />  */}
          </Stack.Navigator>
      </NavigationContainer>
  );
}





