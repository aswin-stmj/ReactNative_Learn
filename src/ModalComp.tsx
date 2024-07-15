import { View, Text, Modal, Image, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Pressable, Alert, ToastAndroid } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

type props = {
  visible:boolean,
  isVisible:Dispatch<SetStateAction<boolean>>,
  navigation:any
}
const ModalComp: React.FC<props> = ({visible,isVisible,navigation}) => {
  const onConfirm = async () => {
    try {
      await AsyncStorage.removeItem('userCredentials')
      
      navigation.navigate('Login')
      
      ToastAndroid.showWithGravity( 'Logged Out Successfully !!!', ToastAndroid.SHORT,  ToastAndroid.CENTER, );
    } catch(e) {
      console.log(Error)
    }
  }

  return (
    <View >
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        style={{backgroundColor:'black'}}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          isVisible(!visible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirm to Logout !!</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Pressable
                style={[styles.button, styles.buttonClose,{marginRight:10}]}
                onPress={() => onConfirm()}>
                <Text style={styles.textStyle}>Confirm</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => isVisible(!visible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#F2CB00',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'black',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:20,
    fontWeight:'500',
    color:'black',
  },
});

export default ModalComp