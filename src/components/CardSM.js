import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

export default class CardSM extends React.Component {
    render(){
        const {selected, title,_onPress} = this.props
        if(selected == title) 
            return(
                <TouchableOpacity style={styles.containerS} onPress={_onPress}>
                    <Text style={styles.txtS}>{title}</Text>
                </TouchableOpacity>  
            )

        return(
            <TouchableOpacity style={styles.container} onPress={_onPress}>
                <Text style={styles.txt}>{title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles =  StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin:5,
        paddingHorizontal:20,
        paddingVertical:15,
        borderRadius:5,
    },
    txt:{
        fontWeight:'500'
    },
    containerS:{
        backgroundColor:'#393e46',
        margin:5,
        paddingHorizontal:20,
        paddingVertical:15,
        borderRadius:5,
    },
    txtS:{
        fontWeight:'500',
        color:'white'
    }
})