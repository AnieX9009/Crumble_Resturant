import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-paper/src/components/Icon';

import {
    ScrollView,
    StyleSheet,
    Text,
    Button,
    TextInput,
    Animated,
    Image,
    Alert,
    Modal,
    Pressable,
    FlatList,
    View,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { Dropdown } from 'react-native-element-dropdown';
import { ActivityIndicator, Drawer, Searchbar } from 'react-native-paper';
import {
    responsiveFontSize,
    responsiveWidth,
    responsiveHeight
} from 'react-native-responsive-dimensions';

export default function Reviews() {
    const navigation = useNavigation();
    return (
        <View >
            <View style={{flexDirection: 'row',width: responsiveWidth(80), justifyContent: 'space-between', alignItems: 'center', marginTop: "10%"}}>
            <Text style={{color: "#32343E", fontFamily: 'Sen-Regular'}}>Reviews</Text>
            <TouchableOpacity>
                <Text style={{ color: "#FB6D3A", borderBottomWidth: 1, borderBottomColor: "#FB6D3A", fontFamily: 'Sen-Regular' }}>See All Reviews</Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between',  width:responsiveWidth(45), marginTop: '3%'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon source="star" size={25} color='#FB6D3A'/>
                <Text style={{color:'#FB6D3A', fontSize: responsiveFontSize(2.2), fontFamily: 'Sen-Bold'}}>4.9</Text>
                </View>
                <Text style={{color: '#32343E', fontSize: responsiveFontSize(1.7)}}>Total 20 Reviews</Text>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({


})
