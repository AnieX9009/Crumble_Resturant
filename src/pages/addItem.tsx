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
import { Checkbox } from 'react-native-paper';
import {
    responsiveFontSize,
    responsiveWidth,
    responsiveHeight
} from 'react-native-responsive-dimensions';

export default function AddItem() {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
    const [selectedOption, setSelectedOption] = useState<'pickup' | 'delivery' | null>(null);
    return (
        <View style={styles.container}>
            <StatusBar
                hidden={false}
                barStyle='dark-content'
                animated={true}
                translucent backgroundColor="transparent"
            />
            <View style={styles.mainButton}>
                <TouchableOpacity
                    style={styles.backButtonWrapper}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={require('../assets/Back.png')}
                        style={{ width: responsiveWidth(2), height: responsiveHeight(2) }}
                    />
                </TouchableOpacity>
                <Text style={styles.mainText}>Add New Items</Text>
                <Text style={{ color: "#FB6D3A" }} >RESET</Text>
            </View>
            <View style={{ alignSelf: 'center', width: responsiveWidth(90), marginTop: "5%" }}>
                <Text style={{ color: "#32343E", fontFamily: "Sen-Medium" }}>ITEM NAME</Text>

                <TextInput
                    placeholder='Snack'
                    placeholderTextColor="#6B6E82"
                    style={styles.input}
                />

            </View>
            <Text style={{ color: "#32343E", fontFamily: 'Sen-Regular', alignSelf: 'flex-start', marginLeft: '5%', marginTop: "5%" }}>UPLOAD PHOTO/VIDEO</Text>
            <View style={{ height: responsiveHeight(20) }}>
                <ScrollView
                    style={{ marginTop: "5%" }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity style={{ marginLeft: "5%", height: responsiveHeight(13), width: responsiveWidth(26), }}>
                        <Image source={require('../assets/r1.png')} style={{ width: responsiveWidth(26), height: responsiveHeight(13), borderRadius: 25 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: "5%", backgroundColor: "#FDFDFD", height: responsiveHeight(13), width: responsiveWidth(26), alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
                        <Icon source="cloud-upload-outline" size={30} color='#523BB1' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: "5%", backgroundColor: "#FDFDFD", height: responsiveHeight(13), width: responsiveWidth(26), alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
                        <Icon source="cloud-upload-outline" size={30} color='#523BB1' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: "5%", backgroundColor: "#FDFDFD", height: responsiveHeight(13), width: responsiveWidth(26), alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
                        <Icon source="cloud-upload-outline" size={30} color='#523BB1' />
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <Text style={{ color: "#32343E", fontFamily: 'Sen-Regular', alignSelf: 'flex-start', marginLeft: '5%', marginTop: "5%" }}>PRICE</Text>
            <View style={{ width: responsiveWidth(90), flexDirection: 'row', marginTop: "5%" }}>
                <TouchableOpacity style={{ backgroundColor: "#E8EAED", width: "35%", borderRadius: 15, height: 40, justifyContent: 'center' }}>
                    <Text style={{ color: "#9C9BA6", marginLeft: "7%", fontFamily: "Sen-Regular" }}>
                        $50
                    </Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Checkbox
                        status={selectedOption === 'pickup' ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedOption('pickup')}
                        color="#FF7622"
                    />
                    <Text style={{ color: "#9C9BA6", fontFamily: "Sen-Regular" }}>Pick up</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: "5%" }}>
                    <Checkbox
                        status={selectedOption === 'delivery' ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedOption('delivery')}
                        color="#FF7622"
                    />
                    <Text style={{ color: "#9C9BA6", fontFamily: "Sen-Regular" }}>Delivery</Text>
                </View>

            </View>
            <Text style={{alignSelf: 'flex-start', marginLeft: "5%", fontFamily: 'Sen-Regular', color: '#32343E', marginTop: '3%'}}>INGRIDENTS</Text>
       <View style={{ width: responsiveWidth(90), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '5%'}}>
        <Text style={{fontFamily: 'Sen-Regular', color: "#32343E", fontSize: responsiveFontSize(1.9)}}>Basic</Text>
        <TouchableOpacity style={{flexDirection: 'row'}}>
        <Text style={{fontFamily: 'Sen-Regular', color: "#9C9BA6", fontSize: responsiveFontSize(1.9)}}>See All</Text>
        <Icon source="chevron-down" size={20}/>
        </TouchableOpacity>
       </View>
       <View style={{width: responsiveWidth(90), height: 60, flexDirection: 'row', marginTop: '3%'}}>
        <TouchableOpacity style={{backgroundColor: "#FFEBE4", width: "20%",height: "100%", borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
       <Image source={require('../assets/Salt.png')} style={{width: responsiveWidth(5.5), height: responsiveHeight(5)}}/>
       </TouchableOpacity>
       <TouchableOpacity style={{backgroundColor: "#FFEBE4", width: "20%",height: "100%", borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
       <Image source={require('../assets/Onion.png')} style={{width: responsiveWidth(9), height: responsiveHeight(5)}}/>
       </TouchableOpacity>
       <TouchableOpacity style={{backgroundColor: "#FFEBE4", width: "20%",height: "100%", borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
       <Image source={require('../assets/Group.png')} style={{width: responsiveWidth(6.7), height: responsiveHeight(3.5)}}/>
       </TouchableOpacity>
       <TouchableOpacity style={{backgroundColor: "#FFEBE4", width: "20%",height: "100%", borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
       <Image source={require('../assets/spice.png')} style={{width: responsiveWidth(5.5), height: responsiveHeight(5)}}/>
       </TouchableOpacity>
       <TouchableOpacity style={{backgroundColor: "#FFEBE4", width: "20%",height: "100%", borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
       <Image source={require('../assets/Ginger.png')} style={{width: responsiveWidth(5.5), height: responsiveHeight(4)}}/>
       </TouchableOpacity>
       </View>
       <TouchableOpacity
                style={styles.textWrapper} // Disable button color if form is invalid

                onPress={() => {

                    navigation.navigate('Home')

                }}
            >
                <Text style={styles.logButton}>
                    SAVE CHANGES
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    mainButton: {
        flexDirection: 'row',
        marginTop: "12%",
        width: "100%",
        alignItems: 'center',
        marginLeft: "5%"


    },
    backButtonWrapper: {
        backgroundColor: "#ECF0F4",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        height: responsiveHeight(5),
        width: responsiveWidth(10),


    },
    mainText: {
        width: responsiveWidth(65),
        marginLeft: "5%",
        fontSize: 17,
        fontFamily: 'Sen-SemiBold',
        color: "#181C2E"
    },
    input: {
        justifyContent: 'flex-start',
        borderRadius: 25,
        marginTop: '2%',
        width: "100%",
        height: responsiveHeight(7),
        backgroundColor: "#E8EAED",
        flexDirection: "row",
        paddingLeft: 15,
        fontFamily: "Sen-Regular",

    },
    textWrapper: {
        height: responsiveHeight(7),
        width: "90%",

        marginTop: "10%",
        backgroundColor: "#FF7622",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,

    },
    logButton: {
        fontFamily: "Sen-Medium",
        fontSize: responsiveFontSize(2),
        color: "#FFFFFF",
    },
})