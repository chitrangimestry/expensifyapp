import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AddTrip from '../screens/AddTripScreen';
import AddExpense from '../screens/AddExpenseScreen';
import TripExpensesScreen from '../screens/TripExpensesScreen';

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
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
}
