import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

function Setting(): React.JSX.Element {

    useEffect(()=>{
        
    },[])

    return(
        <View style={styles.mainView}>
            <Text style={styles.text}>General</Text>
            <Text style={styles.text}>About</Text>
            <Text style={styles.text}>Display</Text>
            <Text style={styles.text}>ResetPass</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView:{
        backgroundColor:'#FFFF99',
        borderColor:'black',
        borderWidth:2,
        height:'30%'
    },
    text:{
        fontSize:20,
        fontWeight:'700',
        color:'black'
    }
})
export default Setting