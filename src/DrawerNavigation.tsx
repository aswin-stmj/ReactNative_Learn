import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ImagePicker from './components/imagePicker';
import Maps from './components/Maps';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
      <Drawer.Navigator initialRouteName='imagePicker'>
        <Drawer.Screen name="ImagePicker" component={ImagePicker} />
        <Drawer.Screen name="Maps" component={Maps}/>
      </Drawer.Navigator>
  )
}

export default DrawerNavigation