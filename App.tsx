/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/HomeScreen';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type {PropsWithChildren} from 'react';
import Call from './src/Callpage';
import Setting from './src/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

function HomeStack(): React.JSX.Element {
  return(
      <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/> 
            <Stack.Screen name='Call' component={Call} options={{headerShown:false}}/> 
            <Stack.Screen name='Setting' component={Setting} options={{headerShown:false}}/>
      </Stack.Navigator>
  )
}
function CallStack(): React.JSX.Element {
  return(
      <Stack.Navigator initialRouteName='Setting'>
        <Stack.Screen name='Setting' component={Setting} options={{headerShown:false}}/>
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/> 
      </Stack.Navigator>
  )
}

function App(): React.JSX.Element {
  return (
    <View style={styles.mainView}>
      <View style={styles.secondBox}>
        <NavigationContainer>
          <Tab.Navigator initialRouteName='LoginStack'>
            <Tab.Screen name='HomeStack' component={HomeStack} />
            <Tab.Screen name='CallStack' component={CallStack} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView:{
    width:'100%',
    height: '100%',
    backgroundColor:'#FFFF66',
    justifyContent:'center',
    alignItems:'center'
  },
  secondBox:{
    width:'90%',
    height:'97%',
    backgroundColor:'black',
    borderRadius:30
  },

});

export default App;
