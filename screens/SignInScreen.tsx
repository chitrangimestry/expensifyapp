import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
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
import Snackbar from 'react-native-snackbar';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase.config';
import {useDispatch, useSelector} from 'react-redux';
import {setUserLoading} from '../redux/slices/userSlice';
import Loading from '../components/Loading';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const {loading} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (email && password) {
      // Logic to add trip
      try {
        dispatch(setUserLoading(true));
        await signInWithEmailAndPassword(auth, email, password);
        dispatch(setUserLoading(false));
        navigation.navigate('Home');
      } catch (error) {
        dispatch(setUserLoading(false));
        Snackbar.show({
          text: error.message,
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'red',
        });
      }
    } else {
      //throw error
      Snackbar.show({
        text: 'Email and Password are required',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
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
          <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'padding' : 'height'}
            enabled
            keyboardVerticalOffset={150}>
            <ScrollView keyboardShouldPersistTaps="handled">
              <View style={styles.imageContainer}>
                <Image
                  style={styles.addTripImg}
                  source={require('../assets/images/Sign-in-bro.png')}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={[{color: colors.heading}, styles.inputTextTxt]}>
                  Email
                </Text>
                <TextInput
                  value={email}
                  onChangeText={value => setEmail(value)}
                  style={styles.inputtextField}
                />
                <Text style={[{color: colors.heading}, styles.inputTextTxt]}>
                  Password
                </Text>
                <TextInput
                  value={password}
                  secureTextEntry
                  onChangeText={value => setPassword(value)}
                  style={styles.inputtextField}
                />
                <TouchableOpacity style={styles.forgotPasswordTxt}>
                  <Text>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>

        <View>
          {loading ? (
            <Loading />
          ) : (
            <TouchableOpacity
              onPress={handleSubmit}
              style={[styles.addTripBtn, {backgroundColor: colors.button}]}>
              <Text style={styles.addTripBtnText}>Sign In</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

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
  forgotPasswordTxt: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
