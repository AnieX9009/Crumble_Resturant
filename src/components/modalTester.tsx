import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View, StyleSheet, StatusBar, Image, ScrollView } from "react-native";
import Modal from "react-native-modal";
// import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Order } from "./order";

export function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={toggleModal} style={styles.button}>
        <Text style={styles.buttonText}>Remaining Order</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        swipeDirection="up" // Allow swipe-up to close
        onSwipeComplete={toggleModal} // Close modal on swipe
        style={styles.modal} // Optional for modal appearance
      >
        <View style={styles.modalContent}>

          <Text style={{ alignSelf: 'flex-start', color: "#181C2E", fontFamily: 'Sen-Medium', fontSize: responsiveFontSize(1.9) }}>20 Running Orders</Text>
          <ScrollView 
             showsVerticalScrollIndicator={false} // Hides the vertical scroll bar
             showsHorizontalScrollIndicator={false}
          >
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
          </ScrollView>
          <TouchableOpacity onPress={toggleModal}
            style={{ marginTop: "10%", backgroundColor: "#FF7622", width: "100%", height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
          >
            <Text style={{ color: "#FFFFFF", fontFamily: 'Sen-Medium' }}>CLOSE</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%"
  },
  button: {
    backgroundColor: "#FF7622",
    width: responsiveWidth(50),
    height: responsiveHeight(7),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "Sen-Medium",
    fontSize: 14,
  },
  modal: {
    justifyContent: "flex-end", // Start modal at the bottom
    margin: 0,
    // No margin for full-screen effect
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    height: responsiveHeight(80)
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ModalTester;
