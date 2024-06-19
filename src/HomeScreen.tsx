import React from "react";
import { 
    FlatList,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
 } from "react-native";

type homeprops = {
    
}

// props: homeprops
const HomeScreen = ({navigation}:any) => {

    const listData = [
        {
            id:1,
            title: "Karthik",
            description: "address one and address",
            Image:"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
        },
        {
            id:2,
            title: "Vivek",
            description: "address one and address",
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGK3diR3Zi-mnOXEaj-3ewmFyRYVxGzVzZw&s"
        },
        {
            id:3,
            title: "Manoj Kumar",
            description: "address one and address",
            Image:"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
        },
        {
            id:4,
            title: "Krishna Moorthy",
            description: "address one and address",
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhoHDIbSi0WJkzGYr6wemnCS2OzSRkhokmA&s"
        },
        {
            id:5,
            title: "Karthik",
            description: "address one and address",
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYclNpWNOM3ue7YdttCawvhDp6JfBZoPWBaw&s"
        },
        {
            id:6,
            title: "Vivek",
            description: "address one and address",
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd58judYx225Niz5uRBaJc1UJi4DFHjOZNJA&s"
        },
        {
            id:7,
            title: "Manoj Kumar",
            description: "address one and address",
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYclNpWNOM3ue7YdttCawvhDp6JfBZoPWBaw&s"
        },
        {
            id:8,
            title: "Krishna Moorthy",
            description: "address one and address",
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&s"
        },
        {
            id:9,
            title: "Krishna Moorthy",
            description: "address one and address",
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd58judYx225Niz5uRBaJc1UJi4DFHjOZNJA&s"
        },
        {
            id:10,
            title: "Vivek",
            description: "address one and address",
            Image:"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
        },
        {
            id:11,
            title: "Manoj Kumar",
            description: "address one and address",
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkR48LoFHBZXunbYp-PlllTPPEgrgml-paqg&s"
        },
        {
            id:12,
            title: "Krishna Moorthy",
            description: "address one and address",
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd58judYx225Niz5uRBaJc1UJi4DFHjOZNJA&s"
        },
        {
            id:13,
            title: "Krishna Moorthy",
            description: "address one and address",
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYclNpWNOM3ue7YdttCawvhDp6JfBZoPWBaw&s"
        },
        
    ]

    const redirectCall = () => {
            navigation.navigate('Call')
    }

    const setting = () => {
        navigation.navigate('Setting')
    }
    const renderItem = ({item}:any) => {
        return (
            <TouchableOpacity onPress={() => Alert.alert('Item pressed')}>
                <View style={styles.box1}>
                    <Image style={styles.image} source={{uri:item.Image}} />
                    <View style={styles.box3}>
                        <Text style={{color:'black', fontSize:20}}>{item.title}</Text>
                        <Text style={{marginTop:3}}>{item.title}</Text>    
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
                <TouchableOpacity onPress={() => Alert.alert('Scanned')}><Image style={{height:50,width:50,marginRight:12}} source={require('./Images/Scan.png')}/></TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Success')}><Image style={{height:50,width:50}} source={require('./Images/camera.png')}/></TouchableOpacity>
                <TouchableOpacity onPress={setting}><Image style={{height:50,width:50}} source={require('./Images/menu.png')}/></TouchableOpacity>
                </View>
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <FlatList 
                keyExtractor={item=>item.id.toString()}
                data = {listData}
                renderItem = {({item}) => renderItem({item})} 
                horizontal = {false}
                style={{width:'100%'}}   
                ListHeaderComponent={header()}
                ListHeaderComponentStyle={{backgroundColor:'yellow', borderTopEndRadius:15,borderTopLeftRadius:15,height:60}}
            />
            <View style={styles.box5}>
                <TouchableOpacity onPress={() => Alert.alert('Item pressed')}><Image style={{height:50,width:50,marginTop:5}} source={require('./Images/chat.png')} /></TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Nothing available')}><Image style={{height:50,width:50,marginTop:5}} source={require('./Images/updates.png')}/></TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Item pressed')}><Image style={{height:50,width:50,marginTop:5}} source={require('./Images/communites.png')}/></TouchableOpacity>
                <TouchableOpacity onPress={redirectCall}><Image style={{height:50,width:50,marginTop:5}} source={require('./Images/call.png')}/></TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        height:'100%',
        borderRadius: 15,
        borderWidth: 3,
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
    box5:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'yellow',
        width:'100%',
        height:60,
        marginBottom:0,
        borderBottomEndRadius:14,
        borderBottomLeftRadius:14,
    },
    image:{
        width: 50,
        height: 50,
        margin:5,
        marginRight:10,
    }

})

export default HomeScreen