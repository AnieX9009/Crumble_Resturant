import React, { useState } from 'react';
import {
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';


// Define form data types
type FormData = {
  name: string;
  emailOrPhone: string;
};

// Define navigation types (adjust to your navigation stack)
type RootStackParamList = {
  Verificationcode: undefined;
  LogInEmpty: undefined;
};

export default function Register() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [secureEntry, setSecureEntry] = useState<boolean>(true);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      emailOrPhone: '',
    },
  });

  // Toggle password visibility
  const togglePasswordVisibility = (): void => {
    setSecureEntry(!secureEntry);
  };

  // Form submission handler
  const onSubmit = (data: FormData): void => {
    console.log('Form Data:', data);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        barStyle="dark-content"
        animated={true}
        translucent
        backgroundColor="transparent"
      />
      {/* Header Images */}
      <View style={{ flexDirection: 'row', width: responsiveWidth(100), zIndex: 1, position: 'absolute', justifyContent: 'space-between' }}>
        <Image source={require('../assets/Ellipse2.png')} style={{ width: responsiveWidth(54), height: responsiveHeight(26) }} />
        <Image source={require('../assets/Vector142.png')}
          style={{
            width: responsiveWidth(25),
            height: responsiveHeight(50)
          }} />
      </View>

      {/* Navigation Back & Logo */}
      <View style={{

        marginLeft: "5%",
        marginTop: "7%",
        zIndex: 2,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        width: responsiveWidth(60),
        justifyContent: 'space-between'
      }}>
        <TouchableOpacity style={{
          backgroundColor: "white",
          // paddingRight: "2%",
          marginTop: "10%",
          borderRadius: 50,
          height: responsiveHeight(6),
          width: responsiveWidth(11.5),
          justifyContent: 'center',
          alignItems: 'center'
        }}
          onPress={() =>
            navigation.goBack()}
        >
          <Image source={require('../assets/Back.png')} style={{
            width: responsiveWidth(2),
            height: responsiveHeight(2)
          }} />
        </TouchableOpacity>
        <Image source={require('../assets/restLogo.png')}
          style={styles.logo}
        />
      </View>

      {/* Title and Subtitle */}
      <Text style={styles.title}>Register</Text>
      <Text style={styles.subtitle}>Register as Delivery Driver</Text>
      <View>
  
      </View>


      {/* Form Section */}
      <View style={styles.formContainer}>
        <Text style={{ alignSelf: 'center', marginTop: "7%", fontFamily: 'Sen-Medium', color: "#32343E", fontSize: responsiveFontSize(1.8) }}>Enter your Phone and or Email</Text>
        <Text style={{ alignSelf: 'center', marginTop: "2%", fontFamily: 'Sen-Regular', color: "#A0A5BA", fontSize: responsiveFontSize(1.7) }}>Please enter your Phone number And Email </Text>
        <Text style={{ alignSelf: 'center', marginTop: "1%", fontFamily: 'Sen-Regular', color: "#A0A5BA", fontSize: responsiveFontSize(1.7) }}>We will send OTP to verify.</Text>
        {/* Email Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>EMAIL</Text>
          <Controller
            control={control}
            name="name"
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Enter a valid email address',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="example@gmail.com"
                placeholderTextColor="#A0A5BA"
                style={styles.input}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
          />
          {errors.name && (
            <Text style={styles.errorText}>{errors.name.message}</Text>
          )}
        </View>

        {/* Phone Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>PHONE NO</Text>
          <Controller
            control={control}
            name="emailOrPhone"
            rules={{
              required: 'Phone number is required',
              pattern: {
                value: /^\d{10}$/,
                message: 'Enter a valid 10-digit phone number',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Enter Phone no"
                placeholderTextColor="#A0A5BA"
                style={styles.input}
                onChangeText={onChange}
                value={value}
                keyboardType="phone-pad"
              />
            )}
          />
          {errors.emailOrPhone && (
            <Text style={styles.errorText}>{errors.emailOrPhone.message}</Text>
          )}
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={[
            styles.submitButton,
            { backgroundColor: isValid ? '#FF7622' : '#CCC' },
          ]}
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.submitButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Navigation to Login */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LogInEmpty')}>
            <Text style={styles.loginLink}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FF7622',
  },
  header: {
    flexDirection: 'row',
    position: 'absolute',
    width: responsiveWidth(100),
    justifyContent: 'space-between',
  },
  ellipseImage: {
    width: responsiveWidth(54),
    height: responsiveHeight(26),
  },
  vectorImage: {
    width: responsiveWidth(25),
    height: responsiveHeight(50),
  },
  navigation: {
    flexDirection: 'row',
    marginTop: '10%',
    width: responsiveWidth(58),
    justifyContent: 'space-between',

  },
  backButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    height: responsiveHeight(6),
    width: responsiveWidth(11.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: responsiveWidth(2),
    height: responsiveHeight(2),
  },
  logo: {
    width: responsiveWidth(30),
    height: responsiveHeight(15),
    marginTop: '5%',

  },
  title: {
    fontSize: responsiveFontSize(3.5),
    color: '#FFFFFF',
    marginTop: '2%',
    fontFamily: 'Sen-Bold'
  },
  subtitle: {
    fontSize: responsiveFontSize(1.9),
    color: '#FFFFFF',
    marginTop: '2%',
    fontFamily: 'Sen-Regular'
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: '15%',
    width: responsiveWidth(100),
    height: responsiveHeight(75),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  inputGroup: {
    marginTop: '5%',
    width: '90%',
  },
  input: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    marginTop: "2%",
    width: "90%",
    height: responsiveHeight(7),
    backgroundColor: "#F0F5FA",
    flexDirection: "row",
    paddingLeft: 10,
    fontFamily: "Sen-Regular",


  },
  errorText: {
    color: 'red',
    marginTop: '1%',
  },
  submitButton: {
    height: responsiveHeight(7.5),
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: '5%',
  },
  submitButtonText: {
    fontFamily: "Sen-Medium",
    fontSize: responsiveFontSize(1.7),
    color: "#FFFFFF",

  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '8%',
  },
  loginLink: {
    fontFamily: 'Sen-Medium',
    color: "#FF7622",
    paddingLeft: 5,
    fontSize: responsiveFontSize(1.7)
  },
  label: {
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Sen-regular',
    color: '#32343E',
    alignSelf: 'flex-start',
    marginLeft: "5%"
  },
  footerText: {
    fontSize: responsiveFontSize(1.7),
    fontFamily: "Sen-Regular",
    color: "#646982",
    textAlign: 'center'
  }
});
