import React from "react";
import { 
    View,
    FlatList, 
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    Text} from "react-native";

function Call({navigation}:any): React.JSX.Element {
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
    ]

    const back = () => {
        navigation.navigate('Home')
    }

    const header = () => {
        return(
            <View style={styles.box2}>
                <Text style={{fontSize:28,fontWeight:'500',color:'black',margin:5}}>Call History</Text>
                <TouchableOpacity onPress={back}><Text style={{fontSize:20,fontWeight:'700'}}>Back</Text></TouchableOpacity>
            </View>
        )
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
                    <Image style={[styles.image,{marginLeft:20}]} source={require('./Images/call.png')} />
                </View>
            </TouchableOpacity>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:'100%',
        borderRadius: 15,
        borderWidth: 3,
    },box1:{
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
export default Call