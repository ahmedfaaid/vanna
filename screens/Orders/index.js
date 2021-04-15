import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const OrderStack = createStackNavigator();

const Orders = () => {
  const orders = [
    {
      service: 'Home Cleaning',
      date: '2021-04-20',
      startTime: '12:00',
      endTime: '14:00',
      status: 'Pending',
    },
    {
      service: 'Lawn Care',
      date: '2020-12-23',
      startTime: '10:00',
      endTime: '13:00',
      status: 'Completed',
    },
    {
      service: 'Electrician',
      date: '2020-11-05',
      startTime: '14:00',
      endTime: '15:00',
      status: 'Cancelled',
    },
  ];

  return (
    <View style={styles.container}>
      {orders.map(order => (
        <View style={styles.card} key={order.date}>
          <Text style={styles.service}>{order.service}</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>
              {new Date(order.date).toDateString()}
            </Text>
            <Text style={styles.time}>
              {order.startTime} - {order.endTime}
            </Text>
          </View>
          <Text style={styles.outerStatus}>
            Status:{' '}
            <Text
              style={[
                styles.innerStatus,
                order.status === 'Cancelled'
                  ? styles.cancelled
                  : order.status === 'Completed'
                  ? styles.completed
                  : styles.pending,
              ]}>
              {order.status}
            </Text>
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  service: {
    color: '#D90429',
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  date: {
    fontSize: 16,
  },
  time: {
    fontSize: 16,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  outerStatus: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  innerStatus: {
    fontStyle: 'italic',
    fontWeight: 'normal',
  },
  pending: {
    color: '#8D99AE',
  },
  completed: {
    color: '#4BB543',
  },
  cancelled: {
    color: '#FF5252',
  },
});

export default Orders;

export const OrderStackScreen = () => (
  <OrderStack.Navigator>
    <OrderStack.Screen name="Orders" component={Orders} />
  </OrderStack.Navigator>
);
