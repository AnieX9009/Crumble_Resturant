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

export default function Dish() {
    const navigation = useNavigation();
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: "10%", alignSelf: 'flex-start', marginLeft: "5%" }}>
                <Text style={styles.head}>
                Popular Items Sells
                </Text>
                
            </View>
            <ScrollView
            style={{marginTop: "5%"}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                
                <TouchableOpacity style={{marginLeft: "5%"}}>
                    <Image source={require('../assets/review3.png')} style={{width: responsiveWidth(30), height: responsiveHeight(14.5), borderRadius: 25}} />
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft: "5%"}}>
                    <Image source={require('../assets/review2.png')} style={{width: responsiveWidth(30), height: responsiveHeight(15), borderRadius: 25}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft: "5%"}}>
                    <Image source={require('../assets/review2.png')} style={{width: responsiveWidth(30), height: responsiveHeight(15), borderRadius: 25}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft: "5%"}}>
                    <Image source={require('../assets/review2.png')} style={{width: responsiveWidth(30), height: responsiveHeight(15), borderRadius: 25}}/>
                </TouchableOpacity>



            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    head: {
        color: '#0A2533',
        fontFamily: 'Sen-SemiBold',
        fontSize: responsiveFontSize(1.9)
    }

})
