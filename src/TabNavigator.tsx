import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen'
import CommunityScreen from './CommunityScreen'
import Callpage from './Callpage'
import Searchpage from './Searchpage'
import { Image, StyleSheet, Text, View } from 'react-native'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
        <Tab.Navigator initialRouteName='HomeStack'
            screenOptions={({route}) => ({
                tabBarStyle: {
                    backgroundColor: '#F2CB00',
                    height:'8%',
                },
                tabBarLabel: ({ focused }) => {
                    let label;
                    if (route.name === 'HomeStack') {
                      label = 'Home';
                    } else if (route.name === 'SearchStack') {
                      label = 'Search';
                    } else if (route.name === 'CommunityStack') {
                      label = 'Group';
                    } else if (route.name === 'CallStack') {
                      label = 'Call';
                    }
                    return <Text style={[styles.tabBarLabel, focused && styles.tabBarLabelFocused]}>{label}</Text>;
                },
                tabBarIcon: ({}) => {
                let imageUrl;
                if(route.name === "HomeStack") {
                    imageUrl = require('./Images/chat.png');
                } else if (route.name === "SearchStack") {
                    imageUrl = require('./Images/updates.png');
                }
                else if (route.name === "CommunityStack") {
                    imageUrl = require('./Images/communites.png');
                }
                else if (route.name === "CallStack") {
                    imageUrl = require('./Images/call.png');
                }
                return <Image style={{width: 42, height: 42}} source={imageUrl}/>
                },
                headerShown: false,
        })}
        >
            <Tab.Screen name='HomeStack' component={HomeScreen} options={{headerShown:false}}/>
            <Tab.Screen name='SearchStack' component={Searchpage} options={{headerShown:false}}/>
            <Tab.Screen name='CommunityStack' component={CommunityScreen} options={{headerShown:false}}/>
            <Tab.Screen name='CallStack' component={Callpage} options={{headerShown:false}}/>
            {/* <Tab.Screen name='Sett'>{()=>(
              <Drawer.Navigator initialRouteName='ImagePicker'>
                <Drawer.Screen name="ImagePicker" component={Imagepic} />
                <Drawer.Screen name="Maps" component={GoogleMaps}/>
              </Drawer.Navigator>
            )}</Tab.Screen> */}
        </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
    tabBarLabel: {
        fontSize: 16,
        fontWeight: 'normal',
        color:'#2B251C'
      },
      tabBarLabelFocused: {
        fontWeight: 'bold',
        fontSize: 18,
        color:'black'
      },
})
export default TabNavigator