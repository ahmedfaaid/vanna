import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Modal = ({ navigation, route }) => {
  const { id, text, image, description, packages } = route.params;

  const [selectedPackage, setSelectedPackage] = useState({});

  const onSelectHandler = pack => {
    setSelectedPackage(pack);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.closeBtnContainer}
        onPress={() => navigation.pop()}>
        <MaterialIcon
          name="close"
          color="#D90429"
          solid
          style={styles.closeBtn}
        />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{text}</Text>
          </View>
          <Text style={styles.serviceDescription}>{description}</Text>
          <View style={styles.packageContainer}>
            <Text style={styles.selectOne}>Select One</Text>
            <View style={styles.cardContainer}>
              {packages.map(pack => (
                <TouchableOpacity
                  style={[
                    styles.card,
                    pack.id === selectedPackage.id
                      ? { borderColor: '#D90429' }
                      : null,
                  ]}
                  key={pack.id}
                  onPress={() => onSelectHandler(pack)}>
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>${pack.price}</Text>
                  </View>
                  <View style={styles.details}>
                    <Text style={styles.packageName}>{pack.name}</Text>
                    <Text style={styles.packageDescription}>
                      {pack.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.completeContainer}>
            <View>
              <Text>
                ${selectedPackage ? selectedPackage.price : '0'}{' '}
                <Text>Total</Text>
              </Text>
            </View>
            <TouchableOpacity>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  closeBtnContainer: {
    alignSelf: 'flex-end',
    marginRight: 15,
    marginTop: 10,
  },
  closeBtn: {
    fontSize: 25,
    fontWeight: '300',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    height: 250,
    marginTop: 10,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    overflow: 'hidden',
    borderRadius: 15,
  },
  textContainer: {
    marginTop: 15,
    width: '100%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D90429',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  serviceDescription: {
    marginTop: 15,
    fontSize: 12,
    fontStyle: 'italic',
  },
  packageContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  selectOne: {
    fontSize: 18,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  card: {
    flexDirection: 'row',
    width: '45%',
    height: 80,
    marginTop: 15,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0)',
  },
  priceContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdc6cf',
  },
  priceText: {
    fontSize: 18,
    fontWeight: '500',
  },
  details: {
    justifyContent: 'center',
    padding: 5,
  },
  packageName: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  packageDescription: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  completeContainer: {
    marginTop: 20,
  },
});

export default Modal;
