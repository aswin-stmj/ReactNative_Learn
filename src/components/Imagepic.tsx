import { View, Image, StyleSheet, PermissionsAndroid } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Imagepic = () => {

  const [image,setImage] = useState<string>('')
  
  const openCamera = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "App Camera Permission",
          message:"App needs access to your camera ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        launchCamera({mediaType: 'photo', saveToPhotos: true}, res => setImage(res?.assets?.[0].uri ?? ""))
        console.log("Camera permission given");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri:image}} style={styles.backgroundImage} />
        <TouchableOpacity onPress={() => launchImageLibrary({mediaType: 'photo'}, res => setImage(res?.assets?.[0].uri ?? ""))}>
          <Image source={require('../Images/editing.png')} style={styles.mailIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openCamera()}>
          <Image source={require('../Images/camera.png')} style={styles.mailIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageContainer: {
    width: 320,
    height: 180,
    backgroundColor: 'white',
    borderRadius: 30,
    position: 'relative', // Make the container relative
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  mailIcon: {
    width: 35,
    height: 35,
  },
});

export default Imagepic;
