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
import Reviews from '../components/reviews';
import {
    responsiveFontSize,
    responsiveWidth,
    responsiveHeight
} from 'react-native-responsive-dimensions';
import Dish from '../components/dish';
import Footer from '../components/Footer';
import ModalTester from '../components/modalTester';




const countries = [
    { name: 'Halal Lab office' },
    { name: 'TCS' },
    { name: 'Mumbai' },
    { name: 'Bangalore' },


    // Add more countries as needed
];

const time = [
    { name: 'Daily' },
    { name: 'Monthly' },
    { name: 'Yearly' },
    { name: 'Over All' },


    // Add more countries as needed
];

export default function Home() {
    const navigation = useNavigation();
    const [code, setCode] = useState(countries);
    const [times, setTimes] = useState(time);
    const [showNotification, setShowNotification] = useState<String>('Notification');
    return (
        <View style={styles.container}>
            <StatusBar
                hidden={false}
                barStyle='dark-content'
                animated={true}
                translucent backgroundColor="transparent"
            />
            <View style={{ flexDirection: 'row', width: responsiveWidth(90), height: responsiveHeight(10), justifyContent: 'space-evenly', marginTop: "12%", alignItems: 'center' }}>
                <TouchableOpacity
                    // onPress={() => {
                    //     navigation.navigate('Profile')
                    // }}

                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: "#ECF0F4",
                        borderRadius: 50,
                        alignSelf: 'center',
                        height: responsiveHeight(6),
                        width: responsiveWidth(12),
                        borderWidth: 0.5

                    }}>
                    <Icon source="menu" size={25} />
                </TouchableOpacity>

                <View style={{
                    paddingLeft: 7,
                    paddingTop: 1,
                    justifyContent: 'center'
                }}>
                    <Text style={{ fontFamily: 'Sen-Bold', fontSize: 12, color: "#FF7622" }}>LOCATION</Text>
                    <View style={[{ flexDirection: 'row', width: '80%', borderColor: "#888888" }, styles.formContain]}>
                        <Dropdown
                            style={styles.dropdown}

                            selectedTextStyle={{ color: "#000000", fontFamily: "Sen-Medium", fontSize: 14 }}
                            itemTextStyle={styles.textstyle}
                            iconColor='black'
                            inputSearchStyle={styles.inputSearchStyle}
                            data={countries}
                            maxHeight={200}
                            labelField="name"
                            value={code}
                            onChange={item => {
                                setCode(item.value);
                            }}

                        />
                    </View>

                </View>
                <TouchableOpacity style={{
                    justifyContent: 'center',


                    alignSelf: 'center',
                    alignItems: 'center',
                    height: responsiveHeight(6),
                    width: responsiveWidth(12),


                }}

                >

                    <Image source={require('../assets/photofile.png')} style={{ width: responsiveWidth(12), height: responsiveHeight(6), }} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', width: responsiveWidth(80), justifyContent: 'space-between', marginTop: "7%" }}>
                <View>
                    <Text style={{ fontSize: responsiveFontSize(5), fontFamily: 'Sen-Bold', color: '#32343E' }}>20</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sen-Bold', color: '#838799' }}>RUNNING ORDERS</Text>
                </View>
                <View>
                    <Text style={{ fontSize: responsiveFontSize(5), fontFamily: 'Sen-Bold', color: '#32343E' }}>05</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sen-Bold', color: '#838799' }}>ORDER REQUEST</Text>
                </View>
            </View>
            <View style={{ marginTop: "10%", flexDirection: 'row', width: responsiveWidth(60), justifyContent: 'space-between', alignSelf: 'flex-start', marginLeft: '10%' }}>
                
                <View>
                <Text style={{ color: "#32343E", fontSize: responsiveFontSize(1.9), fontFamily: 'Sen-SemiBold' }}>Total Revenue</Text>
                <Text style={{ color: "#32343E", fontSize: responsiveFontSize(2.5), fontFamily: 'Sen-SemiBold' }}>$2,241</Text>
                </View>
                    <View style={[{ flexDirection: 'row',  }, styles.formContain1]}>
                        <Dropdown
                            style={styles.dropdown1}

                            selectedTextStyle={{ color: "#9C9BA6", fontFamily: "Sen-Medium", fontSize: 14 }}
                            itemTextStyle={styles.textstyle}
                            iconColor='black'
                            inputSearchStyle={styles.inputSearchStyle}
                            data={time}
                            maxHeight={200}
                            labelField="name"
                            value={times}
                            onChange={item => {
                                setTimes(item.value);
                            }}

                        />
                    </View>

            </View>
         
        <Reviews/>
        <ModalTester />
        <Dish/>
 
        <Footer/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    dropdown: {
        // margin: 10,
        fontFamily: 'Sen-Medium',
        color: "black",
        width: "70%",
        // height: 50,
        // marginLeft: -50,
        // paddingLeft: "5%",
        textDecorationColor: "black",

    },
    dropdown1: {
        // margin: 10,
        fontFamily: 'Sen-Medium',
        color: "black",
        width: "100%",
       
        // height: 50,
        // marginLeft: -50,
        // paddingLeft: "5%",
        textDecorationColor: "black",

    },
    textstyle: {
        color: "#000000",
        fontFamily: 'Sen-Medium',
        fontSize: 10
    },
    formContain: {
        width: "90%",
       
    },
    formContain1: {
        width: "35%",
       
    },
    inputSearchStyle: {
        fontFamily: 'Sen-Medium',
        color: "red",
    },
    button: {
        width: responsiveWidth(45), alignItems: 'center'
    }
})