import React, { Component } from "react";
import { 
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    View,
    Linking
    } from "react-native";
import {Icon} from "native-base";
import Heading from "../components/header";

class About extends Component{
    
    openD=() =>{
        this.props.navigation.openDrawer();
    }
    static navigationOptions={
        drawerIcon:({tintColor})=>(
            <Icon name='ios-information-circle' style={{fontSize:24,color:tintColor}}/>
        )
    }
    render(){
        return (
            <SafeAreaView style={style.container}>
                <View style={style.container}>
                   <View style={style.container}>
                        <Heading onPress={()=>{this.openD()}} title={'About Me'}/> 
                    </View>

                    <View style={{flex:10}}>
                        <View style={style.upperContainer}>
                            <Image source={require("../assests/icon.png")} style={style.logoWrapper}/>
                            <View style={style.headingWrapper}>
                                <Text style={style.headingContainer}>Reckoner</Text>
                                <Text style={style.versionWrapper}>V1.2.0</Text>
                            </View>
                        </View>
                        <View style={style.container}>
                            <View style={style.container}>
                                <View style={{paddingBottom:10,borderBottomWidth:1,borderBottomColor:'#aaa'}}>
                                    <Text style={style.aboutText}>
                                        This is An Simple Calculator App.{'\n'}That Help You To Calculate Basic Calculation{'\n'}Made With {<Icon name='ios-heart' style={{color:'#ed2939',fontSize:18}}/>} By Keval Dholakiya
                                    </Text> 
                                </View>
                                <View style={[style.Socialcontainer]}>
                                <View>
                                    <View style={style.Social}>
                                            <Icon name='logo-linkedin' style={[style.icon,{color:'#0E76A8'}]}/>
                                            <Text onPress={()=>Linking.openURL('https://www.linkedin.com/in/keval-dholakiya-652960150')} style={[style.txt,{color:'#111e6f',paddingLeft:7}]}>Connect On Linkedin</Text>
                                        </View>
                                        <View style={style.Social}>
                                            <Icon name='logo-twitter' style={[style.icon,{color:'#06a0e9'}]}/>
                                            <Text onPress={()=>Linking.openURL('https://twitter.com/kevalDholakiya5')} style={[style.txt,{color:'#111e6f'}]}>Follow Me On Twitter</Text>
                                        </View>
                                        <View style={style.Social}>
                                            <Icon name='logo-github' style={[style.icon,{color:'#211f1f'}]}/>
                                            <Text onPress={()=>Linking.openURL('https://github.com/keval47/')}  style={[style.txt,{color:'#111e6f',paddingLeft:3}]}>Fork Me On GitHub</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Text style={[style.txt,{marginBottom:10}]}>
                               Copyright © 2018-2019 Bridge, LLC.
                            </Text>
                        </View>
                    </View> 
                </View>
            </SafeAreaView>
        );
    }
}
export default About;

const style = StyleSheet.create({
    container:{flex:1,},
    txt:{fontSize:20,textAlign:'center',textAlignVertical:'center'},
    upperContainer:{
        justifyContent:'center',
        borderBottomWidth:2,
        borderBottomColor:'#ccc',
        alignItems:'center',
        marginVertical:10
    },
    logoWrapper:{width:100,height:100,marginBottom:4},
    headingWrapper:{marginBottom:5},
    headingContainer:{fontSize:35,color:'#80a1d4',textAlign:"center"},
    versionWrapper:{fontSize:20,color:'#aaa',textAlign:'center'},
    aboutText:{fontSize:18,textAlign:'center',lineHeight:30},
    Social:{flexDirection:'row'},
    icon:{fontSize:50,margin:5,marginRight:5},
    Socialcontainer:{flex:1,justifyContent:'center',alignItems:'center'}
});