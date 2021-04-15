import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { HomeStackScreen } from '../Home';
import { OrderStackScreen } from '../Orders';
import { MoreStackScreen } from '../More';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'home';
    } else if (route.name === 'Orders') {
      iconName = 'clipboard-list';
    } else if (route.name === 'More') {
      iconName = 'list';
    }

    // You can return any component that you like here!
    return <FontAwesome5 name={iconName} color={color} solid />;
  },
});

const AppDrawerScreen = () => (
  <Tab.Navigator
    screenOptions={screenOptions}
    tabBarOptions={{
      activeTintColor: '#D90429',
      inactiveTintColor: 'gray',
    }}>
    <Tab.Screen name="Home" component={HomeStackScreen} />
    <Tab.Screen name="Orders" component={OrderStackScreen} />
    <Tab.Screen name="More" component={MoreStackScreen} />
  </Tab.Navigator>
);

export default AppDrawerScreen;
