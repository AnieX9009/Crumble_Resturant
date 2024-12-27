import React, { useState, useEffect } from 'react';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-paper/src/components/Icon';


const { width } = Dimensions.get('window');

const Footer: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const isFocused = useIsFocused(); // Check if the current screen is focused



    // State to track the active icon
    const [activeIcon, setActiveIcon] = useState<string>(route.name);




    // Update activeIcon when route changes
    useEffect(() => {
        if (isFocused) {
            setActiveIcon(route.name);
        }
    }, [route.name, isFocused]);

    // Function to handle icon press and navigation
    const handleIconPress = (iconName: string, navigateTo: string) => {
        setActiveIcon(iconName);
        navigation.navigate(navigateTo);
    };

    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => handleIconPress('Home', 'Home')}>
                <Icon
                    source="checkbox-multiple-blank"
                    size={35}
                    color={activeIcon === 'Home' ? '#FF7622' : '#D3D1D8'}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleIconPress('ModalTester', 'ModalTester')}>
                <Icon
                    source= 'menu'
                    size={35}
                    color={activeIcon === 'ModalTester' ? '#FF7622' : '#D3D1D8'}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleIconPress('AddItem', 'AddItem')}>
                <Icon
                    source= 'plus-circle-outline' 
                    size={50}
                    color={activeIcon === 'AddItem' ? '#FF7622' : '#FF7622'}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: "10%", height: "70%", alignItems: 'center', justifyContent: 'center' }}
                onPress={() => handleIconPress('Notification', 'Notification')}
            >
                <Icon 
                    source='bell'
                    size={35}
                    color={activeIcon === 'Notification' ? '#FF7622' : '#D3D1D8'}
                />
               
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleIconPress('', '')}>
                <Icon
                    source= "account" 
                    size={35}
                    color={activeIcon === 'Notification' ? '#FF7622' : '#D3D1D8'}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 64,
        backgroundColor: "#ffffff",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    badge: {
        backgroundColor: '#FFBD69',
        position: 'absolute',
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        top: -5,
        right: -10,
    },
    badgeText: {
        color: "#ffffff",
        fontFamily: "Sen-SemiBold",
        fontSize: 14,
    },
});

export default Footer;
