import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../themes';
import {useNavigation} from '@react-navigation/native';

// import statusCodes along with GoogleSignin
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {GoogleAuthProvider} from 'firebase/auth/web-extension';
import {signInWithCredential} from 'firebase/auth';
import {auth} from '../config/firebase.config';

GoogleSignin.configure({
  webClientId:
    '251004932218-jle7sqev05d8fkv5va7ehgvcq8t6qd4j.apps.googleusercontent.com',
});

// Somewhere in your code

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const signIn = async () => {
    try {
      const {idToken}: any = await GoogleSignin.signIn();
      const googleCredentials = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(auth, googleCredentials);
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
      } else {
        // sign in was cancelled by user
      }
    } catch (error: any) {
      console.log('Error in sign in: ', error.message);
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          source={require('../assets/images/Welcome.gif')}
          style={styles.welcomeGif}
        />
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.welcomeText}>Expensify</Text>
        <TouchableOpacity
          style={styles.signInBtnContainer}
          onPress={() => navigation.navigate('SignIn' as never)}>
          <Text style={styles.signInBtn}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signInBtnContainer}
          onPress={() => signIn()}>
          <Text style={styles.signInBtn}>Sign In with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpBtnContainer}
          onPress={() => navigation.navigate('SignUp' as never)}>
          <Text style={styles.signUpBtn}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  welcomeGif: {
    marginTop: 30,
    width: 400,
    height: 350,
  },
  txtContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  secondContainer: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginBottom: 28,
  },
  signInBtnContainer: {
    backgroundColor: colors.button,
    padding: 12,
    borderRadius: 50,
    marginBottom: 20,
  },
  signInBtn: {
    fontSize: 26,
    color: '#ffffff',
    textAlign: 'center',
  },
  signUpBtnContainer: {
    backgroundColor: colors.button,
    shadowColor: '#474747ff',
    shadowOffset: {width: 50, height: 40},
    shadowOpacity: 0.25,
    padding: 12,
    borderRadius: 50,
  },
  signUpBtn: {
    fontSize: 26,
    color: '#ffffff',
    textAlign: 'center',
  },
});
