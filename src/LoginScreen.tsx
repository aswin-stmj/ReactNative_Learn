import React, { useState } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    GestureResponderEvent
} from 'react-native'


type loginprops = {
    loginTitle?: string,
    loginImage?: string
}
const LoginScreen = ({navigation}:any) => {
    const [form,setForm] = useState({
        email:'',
        password:'',
    })

    const onLogin = () => {
        if(form.email && form.password){
            navigation.navigate('Home')
        }
    }

    return(
        <View style={{backgroundColor:'black'}}>
        <View style={styles.mainView}>
            <Image style={styles.image}source={require('./Images/chatgpt.png')}/>
        </View>

            <Text style={styles.text}>AI_GPT</Text>

            <View style={styles.allBox}>
            <TextInput style={styles.input}  autoCapitalize='none' autoCorrect={false} value={form.email} onChangeText={email=> setForm({ ...form, email})} placeholder='jhon@gmail.com' placeholderTextColor='yellow'/>
            <Text style={styles.text1}>{form.email}</Text>
            <TextInput style={styles.input} secureTextEntry={true} keyboardType='numeric' value={form.password} onChangeText={password=>setForm({...form,password})} placeholder='**********' placeholderTextColor='yellow'/>
            <Text style={styles.text1}>{form.password}</Text>
            <TouchableOpacity style={styles.btn} onPress={onLogin}>
                <Text style={[styles.text1,{fontSize:30, padding:5,color:'white' }]}>Sign In</Text>
            </TouchableOpacity>
            </View>
        </View>
        
    )
}

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
        margin:20,
        borderRadius:10
    }


})
export default LoginScreen