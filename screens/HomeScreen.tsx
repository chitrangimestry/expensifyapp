import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../themes';
import randomImage from '../assets/images/RandomImage';
import EmptyList from '../components/EmptyList';
import { useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
  const trips = [
    {
      id: 1,
      place: 'Amsterdam',
      country: 'Netherlands',
    },
    {
      id: 2,
      place: 'Prague',
      country: 'Czech Republic',
    },
    {
      id: 3,
      place: 'Barcelona',
      country: 'Spain',
    },
    {
      id: 4,
      place: 'New York',
      country: 'USA',
    },
    {
      id: 5,
      place: 'London',
      country: 'UK',
    },
    {
      id: 6,
      place: 'Dublin',
      country: 'Ireland',
    },
    {
      id: 7,
      place: 'Tokyo',
      country: 'Japan',
    },
    {
      id: 8,
      place: 'Paris',
      country: 'France',
    },
    {
      id: 9,
      place: 'Edinburgh',
      country: 'Scotland',
    },
    {
      id: 10,
      place: 'Cardigan',
      country: 'Wales',
    },
  ];
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Text style={[styles.logoText, {color: colors.heading}]}>
          Expensify
        </Text>
        <TouchableOpacity style={styles.logoutButton}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={require('../assets/images/Trip-bro.png')}
          style={styles.bannerImage}
        />
      </View>
      <View style={styles.recentTripContainer}>
        <View style={styles.recentTrips}>
          <Text style={[{color: colors.heading}, styles.recentTripText]}>
            Recent Trips
          </Text>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => navigation.navigate('AddTrip' as never)}>
            <Text>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flatListViewContainer}>
          <FlatList
            style={styles.flatListItems}
            data={trips}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent={
              <EmptyList message={"You haven't added any trips yet"} />
            }
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('TripExpenses' as never, item)}
                  style={styles.tripContainerButton}>
                  <View>
                    <Image source={randomImage()} style={styles.tripImg} />
                    <Text style={[{color: colors.heading}, styles.placeText]}>
                      {item.place}
                    </Text>
                    <Text style={[{color: colors.heading}, styles.countryText]}>
                      {item.country}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  logoText: {
    fontSize: 26,
    fontWeight: 'bold',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
  },
  logoutButton: {
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 50,
  },
  bannerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d7f0ec',
    borderRadius: 40,
    marginHorizontal: 16,
    marginBottom: 6,
    marginTop: 20,
  },
  bannerImage: {
    width: '100%',
    height: 300,
    resizeMode: 'center',
  },
  recentTripContainer: {
    padding: 16,
  },
  recentTrips: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recentTripText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  flatListViewContainer: {
    marginTop: 12,
    marginBottom: 26,
    height: 430,
  },
  flatListItems: {
    marginHorizontal: 6,
  },
  tripImg: {
    width: 150,
    height: 150,
    resizeMode: 'center',
    marginBottom: 10,
  },
  placeText: {
    fontWeight: 'bold',
  },
  countryText: {
    fontSize: 12,
  },
  tripContainerButton: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 20,
    marginBottom: 16,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
  },
});
