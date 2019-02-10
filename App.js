import React,{Component} from "react";
import CalcScreen from "./screens/Calc";
import About from "./screens/aboutme";
import { createDrawerNavigator,DrawerItems ,drawerIcon} from 'react-navigation';
import { Text,View,SafeAreaView,ScrollView,Image } from "react-native";

class Main extends Component{
    render(){
        return(
            <DrawNav/> 
        );
    }
}
const DrawerComp = (props)=> (
    <SafeAreaView>
        <ScrollView>
        <View style={{flex:1,justifyContent:"center",alignItems:'center',margin:10}}>
            <Image source={require('./assests/icon.png')} style={{width:100,height:100}}/>
        </View>
        <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>
)
const DrawNav=createDrawerNavigator({
    Calculator:{
        screen:CalcScreen,
    },
    'About Me':{
        screen:About
    }
},{
    contentComponent:DrawerComp,
    contentOptions:{
        activeTintColor:'#80a1d4'
    }
});
export default Main;