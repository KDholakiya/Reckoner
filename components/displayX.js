import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView
    } from "react-native";

export default class DisplayCase extends Component{
    render(){
        return (
            <View style={style.container}>
                <ScrollView
                    ref={ref => this.scrollView = ref}
                    onContentSizeChange={(contentWidth, contentHeight)=>{        
                        this.scrollView.scrollToEnd({animated: true});
                    }}>
                    <Text style={style.display}>{this.props.display}</Text>
                </ScrollView>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'flex-end',
    },
    display:{
        fontSize: 40,
        textAlign:'right',
        color:'#000'
    },
    btn:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    row:{
        flexDirection: 'row',
    },
});