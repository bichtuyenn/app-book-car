import React from 'react'
import IonIcon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './Home'
import Activities from './Activities'
import Payment from './Payment'
import Messages from './Messages';
import Account from './Account'

const Bottom = createBottomTabNavigator();
const TabIcon = ({ name, focused }) => {
    return (
      <IonIcon name={name} size={25} color={focused ? "#4390f7" : "#000"} />
    );
  };
  
const homeScreenOptions = (headerShown, name) => {
    return {
      headerShown,
      tabBarLabel: name,
      tabBarIcon: () => <TabIcon name={name} />,
    };
  };
  
const MainBottom = () => {
    return (
      <Bottom.Navigator>
        <Bottom.Screen name="Home" component={Home} options={homeScreenOptions(false, "home")} />
        <Bottom.Screen name="Activities" component={Activities} options={homeScreenOptions(false, "grid")} />
        <Bottom.Screen name="Payment" component={Payment} options={homeScreenOptions(false, "grid")} />
        <Bottom.Screen name="Messages" component={Messages}
          options={{
              ...homeScreenOptions(false, "heart"),
              tabBarBadge: 3,
              tabBarBadgeColor: "red",}}/>
        <Bottom.Screen name="Account" component={Account} options={homeScreenOptions(false, "person")} />
      </Bottom.Navigator>
    );
  };
  
  export default MainBottom;
  