import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/LoginScreen';
import SignUp from './src/SignUp';
import TabNavigator from './src/TabNavigator';

const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {

  return (
    <View style={styles.mainView}>
      <View style={styles.secondBox}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
          <Stack.Screen name='TabNavigator' component={TabNavigator} options={{headerShown:false}}/> 
          <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/> 
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  </View>
  )
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