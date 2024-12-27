import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View, StyleSheet, StatusBar, Image } from "react-native";
import Modal from "react-native-modal";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
export function Order() {
    const navigation = useNavigation();

  return (
    <View style={{ width: responsiveWidth(85), flexDirection: 'row', marginTop: "5%", justifyContent: 'space-between'}}>
    <View>
     <Image source={require('../assets/r1.png')} style={{width: responsiveWidth(26), height: responsiveHeight(13), borderRadius: 25}}/>
    </View>
    <View style={{width: "67%"}}>
     <Text style={{color:'#ED7A63', fontFamily: "Sen-Regular"}}>#Breakfast</Text>
     <Text style={{color: "#32343E", fontFamily: "Sen-Regular"}}>Snack</Text>
     <Text style={{color: "#32343E", fontFamily: "Sen-Regular"}}>ID: 32053</Text>
     <View style={{flexDirection: 'row',  width: responsiveWidth(60), justifyContent: 'space-between', marginTop: "3%"}}>
       <Text>$60</Text>
       <View style={{flexDirection: 'row', justifyContent : "space-evenly", width: responsiveWidth(50)}}>
       <TouchableOpacity 
       style={{backgroundColor: "#FF7622", width: "40%", alignItems: 'center', justifyContent: 'center', height: 35, borderRadius: 10}}>
         <Text style={{color: '#FFFFFF', fontFamily: "Sen-Regular"}}>Done</Text></TouchableOpacity>
       <TouchableOpacity
        style={{borderColor: "#FF3326", width: "40%", alignItems: 'center', justifyContent: 'center', height: 35, borderRadius: 10, borderWidth: 1}}
       >
         <Text style={{color: '#FF3326', fontFamily: "Sen-Regular"}}>Cancel</Text></TouchableOpacity>
       </View>
     </View>
    </View>
    </View>
  );
};