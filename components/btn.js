import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions
    } from "react-native";

class PutButton extends Component{
    render(){
        var {width,height}=Dimensions.get('window');
        if((h=this.props.height)===undefined){
            h=((height/2)/5);
        }else{
            h=(((height/2)/5)*2);
        }
        if((bg=this.props.bg) === undefined){
            bg='#aaa'
        }
        return (
            <View>
                <TouchableOpacity style={[style.btn,{backgroundColor:this.props.bg,height:h,width:(width)/4}]} onPress={this.props.onPress}>
                    <Text style={{fontWeight:'bold',fontSize:26}}>
                        {this.props.title}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default PutButton;
const style=StyleSheet.create({
    btn:{
        alignItems: 'center',
        borderWidth:0.3,
        borderColor:'#ddd',
        justifyContent: 'center',
    }
});