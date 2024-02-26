import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from "@react-navigation/stack";
import Splash from './screens/splash';
import Posts from './screens/posts';
import Profile from './screens/profile';
import BottomNav from './screens/bottomtab';

const stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <stack.Screen name="Splash" component={Splash} options={{headerShown: true, headerTintColor: 'black'}}/>
        <stack.Screen name="Posts" component={Posts} options={{headerShown: true, headerStyle:{
          backgroundColor: 'black',}, headerTintColor:'white'}}/>
        <stack.Screen name="Profile" component={Profile} options={{headerShown: true}}/>
        <stack.Screen name='BottomTab' component={BottomNav} options={{headerShown: false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}
