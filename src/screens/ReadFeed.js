import React from 'react'
import {View} from 'react-native'
import {WebView} from 'react-native-webview'
export default class ReadFeed extends React.Component{
    constructor(props)
    {
        super(props)
    }
    render(){
        const {navigation} = this.props
        const link = navigation.getParam('link','No_Id')
        return(
            <View style={{flex:1}}>
                <WebView
                source={{ uri: link }}
                />
            </View>
        )
    }
}