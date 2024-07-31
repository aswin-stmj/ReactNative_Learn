import React, { useRef, useState } from 'react';
import { View, Button, Platform, Keyboard, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet, Share, Alert, Switch, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import Carousel from './Carousel';



const Searchpage: React.FC = () => {
  const pickerRef = useRef<any>(null);
  const [share,setShare] = useState<string>('') 
  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>('java');

  const images = [
    require('./SliderImages/hong.jpg'),
    require('./SliderImages/hong2.jpg'),
    require('./SliderImages/hong3.jpg'),
    require('./SliderImages/hong4.jpg'),
    require('./SliderImages/hong5.jpg')
  ]

  const sharingText = async() => {
    try {
      const result = await Share.share({
        title:'Text Message',
        message:share
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert('error');
    }
  };

  // function open() {
  //   if (pickerRef.current) {
  //     pickerRef.current.focus();
  //   }
  // }

  // function close() {
  //   if (pickerRef.current) {
  //     pickerRef.current.blur();
  //   }
  // }

  return (
    <View>
      <KeyboardAvoidingView>
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
          <TextInput style={styles.textIn} value={share} onChangeText={setShare}  />
          <TouchableOpacity style={styles.share} onPress={()=>{sharingText()}}><Text style={{color:'white',fontSize:25,fontWeight:'500'}}>Share</Text></TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={()=> setIsEnabled(!isEnabled)}
        value={isEnabled}
        style={{alignSelf:'center',marginTop:20}}
      />
      { 
        isEnabled && (
          <View>
          <Picker
            ref={pickerRef}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <View style={{width: Dimensions.get('screen').width -100, height: 50, flexDirection: 'row', justifyContent: 'space-between',marginLeft:40,marginTop:10}}>
          <Text style={{fontSize:20,fontWeight:'500',color:'black'}}>TailWind CSS</Text>
          <CheckBox
           value={value}
           tintColors={{
              true:'green',
              false:'red',
          }}
          onValueChange={setValue}
          />
          </View>
          </View>
        )
      }

      {/* <Button title="Open Picker" onPress={open} />
      <Button title="Close Picker" onPress={close} /> */}
      <View>
        <Carousel/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textIn: {
    backgroundColor:'#F2CB00',
    width:'70%',
    marginRight:5,
    borderRadius:5,
    fontSize:20,
    color:'black'
  },
  share: {
    backgroundColor:'black',
    width:'20%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8
  }
})
export default Searchpage;
