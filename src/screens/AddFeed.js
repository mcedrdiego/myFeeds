import React from 'react'
import {Text,View, TextInput} from 'react-native'

export default class AddFeed extends React.Component{
    static navigationOptions={
        title:'Add Rss Url'
    }
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
            <View>
                <TextInput
                    placeholder='paste url'
                />
            </View>
        )
    }
}