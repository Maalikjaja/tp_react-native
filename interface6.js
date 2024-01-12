import React  from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";  
import prev from '../assets/prev_80px.png';
import info from '../assets/info_16px.png';
import dow from '../assets/download.png'
import choux from '../assets/choux.png'

const interface6 =(navigation)=>{

    return(
      <ScrollView>
            <View>
                <View>
                    {<Image source={prev} 
                    style={{height:30, width:30, left:3}}/>}
                </View>
                <View style={{ flexDirection:'row', display:'flex', marginLeft:'20em', gap:7, marginTop:'-2em'}}>
                    {<Image source={dow} style={{height:20, width:20}}/>}
                    {<Image source={info} style={{width:20,height:20 }}/>}
                </View>
                <View style={{}}>
                    {<Image source={choux} style={{height:200,width:200, marginTop:60, marginLeft:'5em', backgroundColor:'#d1e4de'}}/>}
                </View>
            </View>
      </ScrollView>
    )
}
export default interface6;