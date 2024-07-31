import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Imagepic from './components/Imagepic';
import GoogleMaps from './components/GoogleMaps';
import DatePicker from './components/DatePicker';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
      <Drawer.Navigator 
      initialRouteName='ImagePicker'
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          width: 240,
        },
      }}
      >
        <Drawer.Screen name="ImagePicker" component={Imagepic} />
        <Drawer.Screen name="Date" component={DatePicker}/>
        <Drawer.Screen name="Maps" component={GoogleMaps}/>
      </Drawer.Navigator>
  )
}

export default DrawerNavigation