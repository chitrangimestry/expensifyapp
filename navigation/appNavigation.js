import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddTrip from '../screens/AddTripScreen';
import AddExpense from '../screens/AddExpenseScreen';
import TripExpensesScreen from '../screens/TripExpensesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {useDispatch, useSelector} from 'react-redux';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../config/firebase.config';
import {setUser} from '../redux/slices/userSlice';

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  const {user} = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log('User in AppNavigation: ', user);

  onAuthStateChanged(auth, u => {
    dispatch(setUser(u));
  });

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddTrip"
            component={AddTrip}
            options={{headerShown: true, title: 'Add Trip'}}
          />
          <Stack.Screen
            name="AddExpense"
            component={AddExpense}
            options={{headerShown: true, title: 'Add Expense'}}
          />
          <Stack.Screen
            name="TripExpenses"
            component={TripExpensesScreen}
            options={{headerShown: true, title: 'Trip Expenses'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              headerShown: true,
              presentation: 'modal',
              title: 'Sign In',
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              headerShown: true,
              presentation: 'modal',
              title: 'Sign Up',
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
