import React, { useEffect, useState } from "react";
import { 
    FlatList,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
 } from "react-native";
 import { WebView } from 'react-native-webview';
import ModalComp from "./ModalComp";

type List =  {
    data:Data[]
}
type Data =  {
    id:number|string,
    email?:string,
    first_name?:string,
    avatar?:string,
}
const HomeScreen = ({navigation}:any) => {
    useEffect(()=>{
        fetchApi()
    },[])
    const [list,setList] = useState <Data[]>([])
    const [value,setValue] = useState<boolean>(true)
    const [visibl,isVisibl] = useState<boolean>(false)
    
    const fetchApi = async () => {
        try{
            const response = await fetch("https://reqres.in/api/users",{method:"GET"})
            const res: List = await response.json()
            console.log(res)
            setList(res.data)
        }catch{
            setValue(true)
        } finally{
            setValue(false)
        }
    }
    // try{
        //     const res = await fetch('https://reqres.in/api/login',{
        //         method:'POST',
        //         headers:{'Content-Type':'application/json'},
        //         body:JSON.stringify(data),    
        //     })
        //     const loginres = await res.json()
        //     console.log(loginres)
        //     if(loginres.token){
        //         navigation.navigate('Home')
        //     }
        //     else{
        //         Alert.alert('Login Error')
        //     }  
        // }
        // catch{
        //     console.log(Error)
        // }      
    const MyWebComponent = () => {
        return <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />;
    }

    const setting = () => {
        navigation.navigate('Setting')
    }
    const renderItem = ({item}:any) => {
        return (
            <TouchableOpacity onPress={() => Alert.alert('Item pressed')}>
                <View style={styles.box1}>
                    <Image style={styles.image} source={{uri:item.avatar}} />
                    <View style={styles.box3}>
                        <Text style={{color:'black', fontSize:20}}>{item.first_name}</Text>
                        <Text style={{marginTop:3}}>{item.email}</Text>    
                    </View> 
                </View>
            </TouchableOpacity>
        )
    }
    const header = () => {
        return(
            <View style={styles.box2}>
                <Text style={{fontSize:28,fontWeight:'500',color:'black',margin:5}}>ChatsApp</Text>
                <View style={styles.box4}>
                <TouchableOpacity onPress={() => Alert.alert('Scanned')}><Image style={{height:45,width:45,marginTop:2,marginRight:12}} source={require('./Images/Scan.png')}/></TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Success')}><Image style={{height:50,width:50,marginRight:12}} source={require('./Images/camera.png')}/></TouchableOpacity>
                <TouchableOpacity onPress={()=>isVisibl(!visibl)}><Image style={{height:42,width:42,marginTop:6}} source={require('./Images/logout.png')}/></TouchableOpacity>
                </View>
            </View>
        )
    }
    if(value === true){
        return (
            <View style={[styles.indicator, styles.horizontal]}>
                <ActivityIndicator size="large" color="#F2CB00" />
            </View>
        )
    }else{
        return(
            <View>
            <ModalComp visible={visibl} isVisible={isVisibl} navigation={navigation}/>
            <View style={styles.container}>
                <FlatList 
                    keyExtractor={item=>item.id.toString()}
                    data = {list}
                    renderItem = {({item}) => renderItem({item})} 
                    horizontal = {false}
                    style={{width:'100%'}}   
                    ListHeaderComponent={header()}
                    ListHeaderComponentStyle={{backgroundColor:'#F2CB00'}}
                />
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        height:'100%',
    },
    box1:{
        backgroundColor:'#666600',
        marginTop:1,
        height:60,
        flexDirection:'row',     
    },
    box2:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    box3:{
        margin:5
    },
    box4:{
        flexDirection:'row',
        margin:5,
    },
    image:{
        width: 50,
        height: 50,
        margin:5,
        marginRight:10,
        borderRadius:30,
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
      },
})

export default HomeScreen