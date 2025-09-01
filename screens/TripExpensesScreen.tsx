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
import EmptyList from '../components/EmptyList';
import {useNavigation} from '@react-navigation/native';
import ExpenseCard from '../components/expenseCard';
// import BackButton from '../components/BackButton';

const TripExpensesScreen = (props: any) => {
  const navigation = useNavigation();

  console.log('Props in TripExpensesScreen: ', props);
  const {id, place, country} = props.route.params;

  console.log('Trip Details:', id, place, country);
  const items: {
    id: number;
    title: string;
    amount: number;
    category: 'food' | 'shopping' | 'entertainment' | 'commute' | 'other';
  }[] = [
    {
      id: 1,
      title: 'Ate Sandwich',
      amount: 4,
      category: 'food',
    },
    {
      id: 2,
      title: 'Bought a Jacket',
      amount: 65,
      category: 'shopping',
    },
    {
      id: 3,
      title: 'Watched a Movie',
      amount: 100,
      category: 'entertainment',
    },
    {
      id: 4,
      title: 'Bought souvenirs',
      amount: 56,
      category: 'shopping',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainViewContainer}>
        <View style={styles.headerContainer}>
          
          <View style={ styles.headerText}>
            <Text style={[{color: colors.heading}, styles.headerTextPlace]}>
              {place}
            </Text>
            <Text style={[{color: colors.heading}, styles.headerTextCountry]}>
              {country}
            </Text>
          </View>
        </View>
        <View style={styles.bannerContainer}>
          <Image
            source={require('../assets/images/RomanticGetaway-bro.png')}
            style={styles.bannerImage}
          />
        </View>
        <View style={styles.recentTripContainer}>
          <View style={styles.recentTrips}>
            <Text style={[{color: colors.heading}, styles.recentTripText]}>
              All Expenses
            </Text>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => navigation.navigate('AddExpense' as never)}>
              <Text>Add Expense</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.flatListViewContainer}>
            <FlatList
              style={styles.flatListItems}
              data={items}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              ListEmptyComponent={
                <EmptyList message={"You haven't added any trips yet"} />
              }
              renderItem={({item}) => {
                return <ExpenseCard item={item} />;
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TripExpensesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainViewContainer: {
    paddingHorizontal: 16,
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  headerContainer: {
    position: 'relative',
    // marginTop: 5,
  },
  headerText: {
    marginTop : -38,
  },
  headerTextPlace: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerTextCountry: {
    fontSize: 18,
    fontWeight: 'semibold',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 2,
    left: 0,
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
    borderRadius: 40,
    marginBottom: 6,
  },
  bannerImage: {
    width: '100%',
    height: 350,
  },
  recentTripContainer: {
    // padding: 16,
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
    //   borderRadius: 20,
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
