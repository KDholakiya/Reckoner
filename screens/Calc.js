import React, { Component } from "react";
import { 
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Dimensions,
    } from "react-native";
import DisplayCase from "../components/displayX";
import PutButton  from "../components/btn";
import Heading from "../components/header";
import { Icon } from "native-base";
//Globals
let iteration=0;
let level=[];
let up=[];
let allOpr=[];
let last=0;
isbackable=false;

class CalcScreen extends Component{
    constructor(){
        super()
        this.state={
            display:'0'
        }
        up=[[0]]
    }
    onDigitPress=(digit)=>{
        if(this.state.display=='0'){
            this.state.display=""; 
        }
        isbackable=true;
        up.push(digit);
        if(last!=0){
            last=0;
            digit=this.state.display+'\n'+digit;
        }else{
            digit=this.state.display+digit;
        }
        this.setState({display:digit});
    }
    onDecimalPress=()=>{
        if(this.state.display == '0'){
            up.push('.');
            this.setState({
                display:this.state.display+'.'
            })
        }else{
            if(!up.includes('.')){
                if(this.lastchar)
                this.onDigitPress('.');
            }
        }
    }
    onPercentPress=()=>{
        if(up.length!=0){
            let per=((parseFloat(up.join('')))/100).toFixed(2);
            var temp=this.state.display.split('');
            console.log(temp.length-up.length)
            if((temp.length-up.length)==(-1)){
                temp=[];
            }else{
                temp=temp.slice(0,temp.length-up.length);
            }
            temp.push(parseFloat(per)).toString();
            this.setState({
                display:temp.join('')
            });
            up=[];
            per=((parseFloat(per)).toString()).split('');
            for(i=0;i<per.length;i++){
                up.push(per[i]);
            }
        }
        if(last!=0){
            per=last/100;
            per.toString();
        }
    }
    onClearPress= ()=>{
        this.setState({display:'0'});
        iteration=0;
        allOpr=[];
        level=[];
        up=[[0]];
        last=0;
    }
    onOperatorPress=(operator)=>{
        if(!isNaN(this.lastchar())){
            if(last!=0){
                up=[[last]];
                last=0;
            }
            allOpr.push(operator);
            this.setState({display:this.state.display+'\n'+operator});
            iteration++;
            level.push(parseFloat(up.join('')));
            up=[];
        }else{
            allOpr.pop();
            allOpr.push(operator);
            let temp=[];
            temp=this.state.display.split('');
            temp.pop();
            temp.push(operator);
            this.setState({
                display:temp.join('')
            }); 
        }
    }
    lastchar(){
        let temp=this.state.display.split('');
        return temp[temp.length-1];
    }
    back=()=>{
        //is last char is a operator}
        if(this.state.display!='0' && this.state.display!='' && isbackable==true){
            if((level.length != 0 || up.length !=0) && (this.state.display.split('')).length!=0){
                if((isNaN(this.lastchar()) && this.lastchar()!='.')){
                    iteration--;
                    allOpr.pop();
                    let temp=this.state.display.split('');
                    temp=temp.slice(0,temp.length-2);
                    this.setState({
                        display:temp.join('')
                    });
                    temp=level.pop().toString();
                    temp=temp.split('');
                    for(i=0;i<temp.length;i++){
                        up.push(parseFloat(temp[i]));
                    }
                }else{
                    //if last iteration not pushed
                    if(up.length>0){
                        up.pop();
                        let temp=this.state.display.split('');
                        temp.pop();
                        this.setState({
                            display:temp.join('')
                        });
                    }else{
                        console.log(up);
                    }
                }
            }
        }
        if((this.state.display.split('')).length == 1){
            this.onClearPress();
        }
    }
    equal=()=>{
        if(iteration>0){
            if(level.length > 1 || up.length >0){
            if(!isNaN(this.lastchar())){
                level.push(parseFloat(up.join('')));
                up=[];
            }else{
                iteration--;
            }
                //console.log(allOpr);
                let operation;
                for(i=0;i<iteration;i++){
                    switch(allOpr[i]){
                        case '+':
                            operation=this.add(level[0],level[1])
                            break;
                        case '-':
                            operation=this.sub(level[0],level[1])
                            break;
                        case '/':
                            operation=this.divide(level[0],level[1])
                            break;
                        case '*':
                            operation=this.into(level[0],level[1])
                            break;
                        default:
                            console.log('error');
                    }
                    level.shift();
                    level.shift();
                    level.unshift(operation);
                    console.log(level);
                }
                isbackable=false;
                iteration=0;
                allOpr=[];
                level=[];
                last=operation;
                this.setState({display:this.state.display+'\n= '+operation.toString()});
            }
        }
    }
    add(a,b){
        let c=parseFloat(a)+parseFloat(b);
        return parseFloat(c.toFixed(2));
    }
    sub(a,b){
        let c=parseFloat(a)-parseFloat(b);
        return parseFloat(c.toFixed(2));
    }
    divide(a,b){
        let c=parseFloat(a)/parseFloat(b);
        return parseFloat(c.toFixed(2));
    }
    into(a,b){
        let c=parseFloat(a)*parseFloat(b);
        return parseFloat(c.toFixed(2));
    }
    openD=() =>{
        this.props.navigation.openDrawer();
    }
    static navigationOptions={
        drawerIcon:({tintColor})=>(
            <Icon name='ios-calculator' style={{fontSize:24,color:tintColor}}/>
        )
    }
    render(){
        var {width,height}=Dimensions.get('window');
        return (
            <SafeAreaView style={[style.container,{height:height}]}>
                <View style={{flex:10}}>
                    <Heading onPress={()=>{this.openD()}} title={'Calculator'}/>
                </View> 
                <View style={[style.displayContainer]}>
                    <DisplayCase display={this.state.display}/>
                </View>
                <View style={[style.ButtonsContainer]}>
                    <View>
                        <View style={style.row}>
                            <PutButton title="AC" bg='#80a1d4' onPress={()=>{this.onClearPress()}}/>
                            <PutButton title="<" bg='#80a1d4' onPress={()=>{this.back()}}/>
                            <PutButton title="/" bg='#80a1d4' onPress={()=>{this.onOperatorPress('/')}}/>
                            <PutButton title="x" bg='#80a1d4' onPress={()=>{this.onOperatorPress('*')}}/>
                        </View>  
                        <View style={style.row}>
                            <PutButton bg='#c0b9dd' title="7" onPress={()=>{this.onDigitPress('7')}}/>
                            <PutButton bg='#c0b9dd' title="8" onPress={()=>{this.onDigitPress('8')}}/>
                            <PutButton bg='#c0b9dd' title="9" onPress={()=>{this.onDigitPress('9')}}/>
                            <PutButton title="-" onPress={()=>{this.onOperatorPress('-')}} bg='#80a1d4'/>
                        </View>
                        <View style={style.row}>
                            <PutButton bg='#c0b9dd' title="4" onPress={()=>{this.onDigitPress('4')}}/>
                            <PutButton bg='#c0b9dd' title="5" onPress={()=>{this.onDigitPress('5')}}/>
                            <PutButton bg='#c0b9dd' title="6" onPress={()=>{this.onDigitPress('6')}}/>
                            <PutButton title="+" onPress={()=>{this.onOperatorPress('+')}} bg='#80a1d4'/>
                        </View>
                        <View style={style.row}>
                            <View>
                                <View style={style.row}>
                                    <PutButton bg='#c0b9dd' title="1" onPress={()=>{this.onDigitPress('1')}}/>
                                    <PutButton bg='#c0b9dd' title="2" onPress={()=>{this.onDigitPress('2')}}/>
                                    <PutButton bg='#c0b9dd' title="3" onPress={()=>{this.onDigitPress('3')}}/>
                                </View>
                                <View style={style.row}>
                                    <PutButton title="%"  bg='#c0b9dd' onPress={()=>{this.onPercentPress()}}/>
                                    <PutButton bg='#c0b9dd' title="0" onPress={()=>{this.onDigitPress('0')}}/>
                                    <PutButton bg='#c0b9dd' onPress={()=>{this.onDecimalPress()}} title="."/>
                                </View>
                            </View>
                            <View>
                                <PutButton onPress={()=>{this.equal()}} title="=" height={1}  bg='#80a1d4'/>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
export default CalcScreen;

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    displayContainer:{
        paddingHorizontal:10,
        paddingVertical:5,
        flex:43,
    },
    ButtonsContainer:{
        flex:55,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    btn:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    row:{
        flexDirection: 'row',
    },
});