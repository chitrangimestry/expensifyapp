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
import {categories} from '../constants';

const AddExpenseScreen = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const navigation = useNavigation();

  const handleAddExpense = () => {
    if (title && amount && category) {
      // Logic to add trip
      navigation.goBack();
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
              source={require('../assets/images/Ecommerce-webpage-cuate.png')}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={[{color: colors.heading}, styles.inputTextTxt]}>
              For What?
            </Text>
            <TextInput
              value={title}
              onChangeText={value => setTitle(value)}
              style={styles.inputtextField}
            />
            <Text style={[{color: colors.heading}, styles.inputTextTxt]}>
              How Much?
            </Text>
            <TextInput
              value={amount}
              onChangeText={value => setAmount(value)}
              style={styles.inputtextField}
            />
          </View>
          <View style={styles.categoryContainer}>
            <Text style={[{color: colors.heading}, styles.inputTextTxt]}>
              Category
            </Text>
            <View style={styles.categoryBtnContainer}>
              {categories.map(cat => {
                let bgColor = '#ffffff';

                if (cat.value === category) {
                  bgColor = '#a4c7aaff';
                }
                return (
                  <TouchableOpacity
                    onPress={() => setCategory(cat.value)}
                    key={cat.value}
                    style={[styles.categoryBtn, {backgroundColor: bgColor}]}>
                    <Text>{cat.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={handleAddExpense}
            style={[styles.addTripBtn, {backgroundColor: colors.button}]}>
            <Text style={styles.addTripBtnText}>Add Expense</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddExpenseScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    marginTop: -55,
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
    backgroundColor: '#f3f3f3ff',
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
  categoryContainer: {
    marginHorizontal: 16,
    marginTop: -14,
  },
  categoryBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
    gap: 10,
  },
  categoryBtn: {
    borderRadius: 40,
    padding: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginRight: 10,
    color: '#000000',
  },
});
