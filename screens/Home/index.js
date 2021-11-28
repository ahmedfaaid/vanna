import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  const [query, setQuery] = useState('');

  return (
    <SafeAreaView style={{ backgroundColor: '#ffc602' }} edges={['top']}>
      <Header />
      <View style={styles.selectorSection}>
        <View style={styles.searchSection}>
          <Icon name="search" style={styles.searchIcon} size={16} />
          <TextInput
            style={styles.input}
            placeholder="Search for products"
            value={query}
            onChangeText={string => setQuery(string)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  selectorSection: {
    width: '100%',
    height: '80%',
    paddingTop: 40,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  searchSection: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
  },
  searchIcon: {
    marginRight: 20,
  },
  input: {
    flex: 1,
  },
});

export default Home;

export const HomeStackScreen = () => (
  <ModalStack.Navigator mode="modal" headerMode="none">
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <ModalStack.Screen name="Modal" component={Modal} />
  </ModalStack.Navigator>
);
