import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../../components/Header';
import Main from './Tabs/Main';
import Custom from './Tabs/Custom';
import Business from './Tabs/Business';
import InfoButton from '../../components/InfoButton';
import Modal from '../Modal';

const TopTabs = createMaterialTopTabNavigator();
const HomeStack = createStackNavigator();
const ModalStack = createStackNavigator();

const HomeScreen = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);

const Home = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        <Header />
        <TopTabs.Navigator>
          <TopTabs.Screen name="Main" component={Main} />
          <TopTabs.Screen name="Custom" component={Custom} />
          <TopTabs.Screen name="Business" component={Business} />
        </TopTabs.Navigator>
        <View style={styles.infoContainer}>
          <InfoButton text="How To Use" />
          <InfoButton text="Satisfaction Guarantee" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    width: '100%',
    height: '100%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopColor: '#9f9f9f',
    borderTopWidth: 2,
  },
});

export default Home;

export const HomeStackScreen = () => (
  <ModalStack.Navigator mode="modal" headerMode="none">
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <ModalStack.Screen name="Modal" component={Modal} />
  </ModalStack.Navigator>
);
