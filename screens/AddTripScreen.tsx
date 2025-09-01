import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../themes';
// import BackButton from '../components/BackButton';
import {useNavigation} from '@react-navigation/native';

const AddTripScreen = () => {
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');
  const navigation = useNavigation();

  const handleAddTrip = () => {
    if (place && country) {
      // Logic to add trip
      if (navigation.canGoBack()) {
      navigation.goBack();
    }
    } else {
      //throw error
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View>
          {/* <View style={styles.headerContainer}>
            <View style={styles.backButton}>
              <BackButton />
            </View>
            <Text style={[{color: colors.heading}, styles.headerText]}>
              Add Trip
            </Text>
          </View> */}
          <View style={styles.imageContainer}>
            <Image
              style={styles.addTripImg}
              source={require('../assets/images/Hotel-Booking-cuate.png')}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={[{color: colors.heading}, styles.inputTextTxt]}>
              Where on Earth
            </Text>
            <TextInput
              value={place}
              onChangeText={value => setPlace(value)}
              style={styles.inputtextField}
            />
            <Text style={[{color: colors.heading}, styles.inputTextTxt]}>
              Which Country?
            </Text>
            <TextInput
              value={country}
              onChangeText={value => setCountry(value)}
              style={styles.inputtextField}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={handleAddTrip}
            style={[styles.addTripBtn, {backgroundColor: colors.button}]}>
            <Text style={styles.addTripBtnText}>Add Trip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddTripScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    justifyContent: 'space-between',
    height: '100%',
    marginVertical: 5,
  },
  headerContainer: {
    position: 'relative',
    // marginTop: 5,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTripImg: {
    width: 300,
    height: 300,
  },
  inputTextTxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputtextField: {
    padding: 10,
    margin: 6,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginBottom: 16,
  },
  inputContainer: {
    margin: 16,
  },
  addTripBtn: {
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 16,
    marginBottom: 18,
  },
  addTripBtnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
