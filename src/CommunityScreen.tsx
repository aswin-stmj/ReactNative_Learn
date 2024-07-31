import { View, Text, Animated, Button, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import {SheetProvider} from 'react-native-actions-sheet';
import {registerSheet} from 'react-native-actions-sheet';

const CommunityScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }),
      Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        })
      ),
      Animated.spring(scaleAnim, {
        toValue: 1.2,
        friction: 1,
        tension: 120,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  const openAlert = () => {
    Alert.alert('HI')
  }
  const openActionSheet = () => {
    return(
      <ActionSheet>
          <View style={{flexDirection:'row', justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>openAlert()}>
              <Text style={{color:'black'}}>Click</Text>
            </TouchableOpacity>
          </View>
        </ActionSheet>
    )
  }
  registerSheet('example-sheet', openActionSheet);

  const openAction = () => {
    SheetManager.show('example-sheet');
  }

  return (
    <SheetProvider>
      {
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
              transform: [
                { scale: scaleAnim },
                {
                  rotate: rotateAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              //   {
              //     scaleX: rotateAnim.interpolate({
              //         inputRange: [0, 1],
              //         outputRange: [0, 2]
              //     })
              // },
              // {
              //     scaleY: rotateAnim.interpolate({
              //         inputRange: [0, 1],
              //         outputRange: [0, 2]
              //     })
              // }
              ],
            },
          ]}
        >
          <Image style={{height:50,width:50,marginRight:12}} source={require('./Images/refresh.png')}/>
        </Animated.View>
      <View style={styles.buttonRow}>
      <View style={styles.button}>
          <Button title="View" onPress={fadeIn} />
        </View>
        <View style={styles.button}>
          <Button title="Fade" onPress={fadeOut} />
        </View>
      </View>
      <TouchableOpacity onPress={()=>openAction()}>
        <Text>Send Money</Text>
      </TouchableOpacity>
      </SafeAreaView>
      }
    </SheetProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    height:200,
    margin:20,
    padding: 20,
    backgroundColor: '',
    alignItems: 'center', 
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  button: {
    marginHorizontal: 8,
  },
});

export default CommunityScreen