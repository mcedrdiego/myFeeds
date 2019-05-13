import React from 'react'
import {Text,TouchableOpacity,View, StyleSheet,Image} from 'react-native'


export default class Feed extends React.Component{
    constructor(props)
    {
        super(props)
    }
    render(){
        const {title, link, descr, img, date, publisher}=this.props
        return(
            <TouchableOpacity style={styles.container} onPress={link}>
                <View style={styles.header}>
                    <View style={{flex:0.4, alignItems:'center'}}>
                        <Image  style={{height:80, width:80, borderRadius:5,marginTop:10,marginBottom:10}} source={{uri:img}}/> 
                    </View>
                    <View style={{flex:0.6}}>
                        <Text style={styles.title}>{title}</Text>
                        <Text>{descr}</Text>
                    </View>
                </View>
                
                <View style={styles.footer}>
                    <Text>{publisher}</Text>
                    <Text style={{fontStyle:'italic', fontSize:12}}>{date}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        margin:5,
        borderRadius:2,
        elevation:2,
        padding:5
    },
    header:{
        flexDirection:'row-reverse',
        // flexWrap:'wrap'
    },
    footer:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    title:{
        fontSize:16,
        color:'black',
        fontWeight:'bold',
    }
})