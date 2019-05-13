import React from 'react'
import {Text,View,StyleSheet,Alert, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native'
import FeedCard from '../components/FeedCard'
import CardSM from '../components/CardSM'
import {apiKey, rssUrl} from '../config'

let sources = ["Le Monde", "BBC Africa", "20 Minutes"]
export default class Home extends React.Component{
    static navigationOptions={
        title:'My Feeds'
    }
    constructor(props)
    {
        super(props)
        this.state ={ 
            isLoading: true,
            selected: "Le Monde"
        }
    }
    ReadInfo = (info)=>{
        this.props.navigation.navigate('ReadFeed',{
            link:info
        })
    }

    feedFetch=(i=0)=>{
        if(!this.state.isLoading) 
        this.setState({
            isLoading:true,
            selected:sources[i]
        })
        return fetch('https://api.rss2json.com/v1/api.json?rss_url='+rssUrl[i]+'&api_key='+apiKey)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading:false,
                    dataSource:responseJson.items
                })
                return true
            })
        .catch((error) => {
            console.error(error)
        })
    }
    componentDidMount(){
        this.feedFetch()
    }
      render(){

        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator/>
            </View>
          )
        }
    
        return(
          <View style={styles.container}>
            <View style={styles.nav}>
                <CardSM selected={this.state.selected} title={sources[0]} _onPress={()=>this.feedFetch(0)} />
                <CardSM selected={this.state.selected} title={sources[1]} _onPress={()=>this.feedFetch(1)}/>
                <CardSM selected={this.state.selected} title={sources[2]} _onPress={()=>this.feedFetch(2)}/>
            </View>
            <FlatList
              data={this.state.dataSource}
              keyExtractor={item=>item.link}
              renderItem={({item}) => 
                <FeedCard 
                    title={item.title}
                    img={item.thumbnail !="" ? item.thumbnail :item.enclosure.link}
                    descr={item.description} 
                    date={item.pubDate}  
                    publisher={item.author} 
                    link={()=>this.ReadInfo(item.link)}            
                />
            }
            />
            <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('AddFeed')}>
                    <Text style={styles.icon}>{"+"}</Text>
                </TouchableOpacity>
          </View>
        )
      }
    
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#eeeeee',
        flex:1,
    },
    nav:{
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    btn:{
        backgroundColor:'#393e46',
        width:50,
        borderRadius:50,
        alignItems:'center',
        elevation:5,
        position:'absolute',
        right:15,
        bottom:15
    },
    icon:{
        color:'white',
        fontSize:36,
        fontWeight:'normal'
    }
})