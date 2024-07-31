import React, { useEffect, useRef, useState } from "react";
import { 
    FlatList,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    Linking,
 } from "react-native";
// import DrawerNavigation from "./DrawerNavigation";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { SearchBar } from '@rneui/themed';
import { Icon } from "react-native-vector-icons/Icon";

const Drawer = createDrawerNavigator()

type List =  {
    data:Data[]
}
type Data =  {
    id:number|string,
    email?:string,
    first_name?:string,
    avatar?:string,
}
const Callpage = ({navigation}:any) => {
    const [list,setList] = useState <Data[]>([])
    const [value,setValue] = useState<boolean>(true)
    const [search, setSearch] = useState("");
    const Dataset = useRef<Data[]>([])

    useEffect(()=>{
        fetchApi()
    },[])
    
    const fetchApi = async () => {
        try{
            const response = await fetch("https://reqres.in/api/users",{method:"GET"})
            const res: List = await response.json()
            console.log(res)
            Dataset.current = res.data
            setList(res.data)
        }catch{
            setValue(true)
        } finally{
            setValue(false)
        }
    }    
    const openChrome = async () => {
        const res = await Linking.canOpenURL('https://www.google.co.in/')
        if(res){
            Linking.openURL('https://www.google.co.in/')
        }
    }
    const openCall = async () => {
        const res = await Linking.canOpenURL('tel:9090909090')
        if(res){
            Linking.openURL('tel:9090909090')
        }
    }
    const openMail = async () => {
        const res = await Linking.canOpenURL('mailto:support@expo.io')
        if(res){
            Linking.openURL('mailto:support@expo.io')
        }
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
                <TouchableOpacity onPress={() => navigation.navigate('DrawerNavigator')}><Image style={{height:50,width:48,marginRight:12,marginTop:6,marginLeft:5}} source={require('./Images/menu.png')} /></TouchableOpacity>
                <View style={styles.box4}>
                <TouchableOpacity onPress={() => openMail()}><Image style={{height:50,width:48,marginRight:12}} source={require('./Images/mail.png')}/></TouchableOpacity>
                <TouchableOpacity onPress={()=>openCall()}><Image style={{height:44,width:44,marginTop:3,marginRight:12}} source={require('./Images/phone.png')}/></TouchableOpacity>
                <TouchableOpacity onPress={() => openChrome()}><Image style={{height:44,width:44,marginTop:3,marginRight:12}} source={require('./Images/chrome.png')}/></TouchableOpacity>
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
            <View style={styles.container}>
            <SearchBar 
                placeholder="Type Here..."
                value={search}
                style={{
                    backgroundColor:'white',
                    color:'black'
                }}
                onChangeText={(value)=>{
                    setSearch(value)
                    if(value.length>0){
                        const searched:any[] = []
                        list.filter((item) => {
                            console.log(item)
                            item.first_name?.includes(value) && searched.push(item)
                        })
                        setList(searched)
                    }else {
                        setList(Dataset.current)
                    }
                }}
            />
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
        margin:7,
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

export default Callpage