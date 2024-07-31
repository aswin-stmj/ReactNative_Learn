import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';

const GoogleMaps = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
          <Marker 
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
          }}
          title='Testing'
          />
        </MapView>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map:{
    ...StyleSheet.absoluteFillObject,
  }
})
export default GoogleMaps
