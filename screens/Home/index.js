import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';
import SalesCard from '../../components/SalesCard';
import Main from './Tabs/Main';
import Custom from './Tabs/Custom';
import Business from './Tabs/Business';
import InfoButton from '../../components/InfoButton';
import Modal from '../Modal';

import stores from '../../utils/stores';
import colors from '../../utils/colors';

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
    <ScrollView
      style={{
        backgroundColor: colors.yellow,
      }}
      contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView edges={['top']}>
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
          <View style={styles.storeSection}>
            {stores.map(store => (
              <TouchableOpacity
                key={store.id}
                style={[
                  styles.storeCard,
                  Platform.OS === 'ios'
                    ? styles.iosShadow
                    : styles.androidShadow,
                ]}
                onPress={() => alert('Pressed')}>
                <Image source={store.image} style={styles.storeImage} />
                <Text style={styles.storeName}>{store.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.featuredSalesSection}>
            <Text style={styles.salesHeading}>Amazing offers everyday!</Text>
            <View style={styles.cardsContainer}>
              <SalesCard
                text="Fresh Meat"
                discount="20"
                image={require('./images/meat.png')}
                color="saleBlue"
              />
              <SalesCard
                text="Fresh Fruits"
                discount="40"
                image={require('./images/fruit.png')}
                color="saleGreen"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  selectorSection: {
    width: '100%',
    height: '100%',
    paddingTop: 40,
    paddingHorizontal: 30,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  searchSection: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.grey,
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
  storeSection: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  storeCard: {
    width: '45%',
    height: 150,
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingBottom: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  storeImage: {
    flex: 1,
    width: '50%',
    resizeMode: 'contain',
  },
  featuredSalesSection: {
    marginTop: 40,
  },
  salesHeading: {
    fontSize: 20,
    fontWeight: '500',
  },
  cardsContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  iosShadow: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  androidShadow: {
    elevation: 20,
    shadowColor: '#52006A',
  },
});

export default Home;

export const HomeStackScreen = () => (
  <ModalStack.Navigator mode="modal" headerMode="none">
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <ModalStack.Screen name="Modal" component={Modal} />
  </ModalStack.Navigator>
);
