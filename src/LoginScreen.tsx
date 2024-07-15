import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    GestureResponderEvent,
    Dimensions
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import WebView from 'react-native-webview';

const LoginScreen = ({navigation}:any) => {
    const [form,setForm] = useState<any>({
        email:'',
        password:'',
    })
    useEffect(()=>{
        getData()
    },[])
    const getData = async () => {
        try{
            AsyncStorage.getItem('userCredentials')
            .then(value=>{
                if(value !=null){
                    setForm(value)
                    navigation.navigate('TabNavigator')
                }
            })
        }catch(e){

        }
    }
    const storeData = async (form:any) => {
        try {
          const jsonValue = JSON.stringify(form);
          console.log(jsonValue)
          await AsyncStorage.setItem('userCredentials', jsonValue);
            navigation.navigate('TabNavigator')
        } catch (e) {
          // saving error
        }
    };
    const onLogin = async() => {
        if(form.email==='admin'&&form.password==='admin'){
            storeData(form)
           
        }else {
            Alert.alert('Credentials Invalid')
        } 
    }
    const onSignup = async () => {
        navigation.navigate('SignUp')
    }

    const openDrawer = async() => {
         await navigation.navigate('DrawerNavigator')
    }

    // const MyWebComponent = () => {
    //     console.log('Hi')
    //     return (
    //         <View style={styles.web}>
    //             <WebView source={{ uri: 'https://termly.io/resources/templates/terms-and-conditions-template/' }} style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height }} />
    //         </View>
    //     ) 
    //   }

    return(
        <View style={{backgroundColor:'black',height:'100%', borderRadius:10}}>
        <View style={styles.mainView}>
            <Image style={styles.image}source={require('./Images/chatgpt.png')}/>
        </View>        
            <Text style={styles.text}>AI_GPT</Text>
            <View style={styles.allBox}>
            <TextInput style={styles.input}  autoCapitalize='none' autoCorrect={false} value={form.email} onChangeText={email=> setForm({ ...form, email})} placeholder='jhon@gmail.com' placeholderTextColor='yellow'/>
            <TextInput style={styles.input} secureTextEntry={true} keyboardType='numeric' value={form.password} onChangeText={password=>setForm({...form,password})} placeholder='**********' placeholderTextColor='yellow'/>
            <TouchableOpacity style={styles.btn} onPress={onLogin}>
                <Text style={[styles.text1,{fontSize:30, padding:5,color:'white' }]}>Sign In</Text>
            </TouchableOpacity>
            </View>
            <Text style={styles.signup}>Don't have an acc ?</Text>
            <TouchableOpacity onPress={onSignup}>
                <Text style={[styles.text1,{fontSize:24, padding:5,color:'yellow',textDecorationLine:'underline'}]}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.webview} onPress={()=> openDrawer()}>
                <Text style={{color:'white',fontSize:15}}>Terms & Conditions </Text>
            </TouchableOpacity>
        </View>      
    )
}
 {/* <Text >{list?.data? JSON.stringify(list.data):''}</Text> */}

const styles = StyleSheet.create({
    mainView:{
        flexDirection:'row',
        justifyContent:'center'
    },
    image: {
        width:100,
        height:100,
        backgroundColor:'yellow',
        resizeMode:'cover',
        marginTop:20,
        borderRadius:209
    },
    text:{
        fontSize:40,
        fontWeight:'500',
        alignSelf:'center',
        color:'#FFFF33',
        marginTop:15
    },
    allBox: {
        margin:20,
        backgroundColor:'#FFFF66',
        borderRadius:20,
        marginTop:100,
    },
    input:{
        fontSize:20,
        backgroundColor:'#333300',
        margin:20,
        color:'yellow',
    },
    text1:{
        color:'black',
        alignSelf:'center',
        fontSize:20,
        fontWeight:'500',
    },
    btn: {
        backgroundColor:'black',
        margin:'16%',
        borderRadius:10
    },
    signup: {
        color:'yellow',
        alignSelf:'center',
        fontSize:20,
        fontWeight:'500',
    },
    web:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    webview: {
    marginTop:70,
    marginLeft:125,
    }
})
export default LoginScreen