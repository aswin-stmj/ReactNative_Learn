import { View, Text, Button } from 'react-native'
import React from 'react'

const GoogleMaps = ({navigation}:any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Profile"
      />
    </View>
  )
  
}

export default GoogleMaps