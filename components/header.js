import React, { Component } from "react";
import {Text,StyleSheet } from "react-native";
import {Left,Right,Header,Icon,Container,Button,Body} from "native-base";
class Heading extends Component{
    render(){
        return (
            <Container style={style.container}>
                <Header style={{backgroundColor:'#80a1d4'}}>
                    <Left style={{flex:1,justifyContent:'flex-start'}}>
                        <Icon name="menu" style={{fontSize:40}} onPress={this.props.onPress}/>
                    </Left>
                    <Right><Text style={style.txt}>{this.props.title}</Text></Right>
                </Header> 
            </Container>
        );
    }
}
const style=StyleSheet.create({
    Headercontainer:{
        flex:1,
        backgroundColor:'#ddd',
        justifyContent: 'center',
    },
    txt:{
        fontSize:26,
    }
});

export default Heading;