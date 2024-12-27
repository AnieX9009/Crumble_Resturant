import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-paper/src/components/Icon';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const { width, height } = Dimensions.get('window');

const loginSchema = yup.object().shape({
  emailOrPhone: yup.string().required('Email or phone is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});
type FormData = {
  emailOrPhone: string;
  password: string;
};


export default function LogInEmpty() {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);
  const [checked, setChecked] = useState(false);

  const togglePasswordVisibility = () => {
    setSecureEntry(!secureEntry);
  };

  // React Hook Form setup
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  // Handle form submission
  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    navigation.navigate('Home')
  };

  return (
    <View style={[styles.container, { height }]}>
    <StatusBar hidden={false} barStyle='dark-content' animated={true} translucent backgroundColor="transparent" />
      {/* Background Elements */}
      <View style={{ flexDirection: 'row', width: responsiveWidth(100), zIndex: 1, position: 'absolute', justifyContent: 'space-between' }}>
        <Image source={require('../assets/Ellipse2.png')} style={{ width: responsiveWidth(54), height: responsiveHeight(26) }} />
        <Image source={require('../assets/Vector142.png')} style={{ width: responsiveWidth(25), height: responsiveHeight(50) }} />
      </View>
       {/* Logo and Title */}
       <Image source={require('../assets/restLogo.png')} style={styles.logo} />
      <Text style={{ fontSize: responsiveFontSize(4), fontFamily: 'Sen-SemiBold', color: '#ffffff', zIndex: 2 }}>Log In</Text>
      <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sen-Regular', color: '#FFFFFF', zIndex: 2, marginTop: '2%' }}>
        Please sign in to your existing account
      </Text>

      <View style={styles.rectangle}>
        {/* Email or Phone Input */}
        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>EMAIL OR PHONE</Text>

          <Controller
            control={control}
            name="emailOrPhone"
            render={({ field: { onChange, value } }) => (

              <TextInput
                placeholder='email or phone'
                placeholderTextColor="#6B6E82"
                style={styles.input}
                value={value}
                onChangeText={onChange}
              />

            )}
          />
          {errors.emailOrPhone && <Text style={styles.errorText}>{errors.emailOrPhone.message}</Text>}
        </View>

        {/* Password Input */}
        <View style={styles.formContainer2}>
          <Text style={styles.inputLabel}>PASSWORD</Text>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <View style={styles.inputContainer2}>
                <TextInput
                  placeholder='Enter Password'
                  placeholderTextColor="#6B6E82"
                  style={styles.input1}
                  secureTextEntry={secureEntry}
                  value={value}
                  onChangeText={onChange}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Icon source={secureEntry ? 'eye' : 'eye-off'} size={15} color='#B4B9CA' />
                </TouchableOpacity>
              </View>
            )}
          />
          {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
        </View>

        {/* Remember Me & Forgot Password */}

        <View style={{ flexDirection: "row", marginTop: "10%", justifyContent: 'space-between', width: responsiveWidth(82), alignSelf: 'center', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color='#FF7622'
            />
            <Text style={{ color: "#7E8A97", fontFamily: "Sen-Bold" }}>Remember me </Text>
          </View>
          <TouchableOpacity  >
            <Text style={styles.forget}>Forgot Password</Text>
          </TouchableOpacity>
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
          <Text style={styles.submitButtonText}>LOG IN</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={styles.signUpContainer}>
          <Text style={{
            fontSize: responsiveFontSize(1.7),
            fontFamily: "Sen-Regular",
            color: "#646982",
            textAlign: 'center'
          }}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signUpText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontFamily: 'Sen-Medium', color: "#646982", fontSize: responsiveFontSize(1.7), textAlign: 'center', marginTop: "5%" }}>Or</Text>
        <View style={{
          flexDirection: 'row',
          marginTop: "1%",
          alignItems: 'center',
          width: responsiveWidth(70),
          height: responsiveHeight(10),
          alignSelf: 'center',
          justifyContent: 'space-evenly',

        }}>
          <TouchableOpacity style={[{ backgroundColor: "#395998" }, styles.googleWrapper]}>
            <Image source={require('../assets/facebook.png')}
              style={[{ width: responsiveWidth(3), height: responsiveHeight(3) }]}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity style={[{ backgroundColor: "#169CE8", }, styles.googleWrapper]}>

            <Image source={require('../assets/Twitter.png')}
              style={styles.googleLogo}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity style={[{ backgroundColor: "#1B1F2F" }, styles.googleWrapper]}>

            <Image source={require('../assets/apple.png')}
              style={[{ paddingBottom: 30 }, styles.googleLogo]}
            ></Image>
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
    backgroundColor: "#FF7622",
  },
  logo: {
    width: responsiveWidth(30),
    height: responsiveHeight(15),
    marginTop: '10%',
    marginRight: "3%",
    zIndex: 2,
  },
  rectangle: {
    backgroundColor: "#FFFFFF",
    marginTop: "10%",
    zIndex: 2,
    width: responsiveWidth(100),
    height: responsiveHeight(75),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  formContainer: {

    marginTop: "7%",
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(90)
  },
  submitButton: {

    height: responsiveHeight(7.5),
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: '4%',

  },
  submitButtonText: {
    fontFamily: "Sen-Medium",
    fontSize: responsiveFontSize(1.7),
    color: "#FFFFFF",
  },
  input: {
    justifyContent: 'flex-start',
    borderRadius: 10,
    marginTop: '3%',
    width: "100%",
    height: responsiveHeight(7),
    backgroundColor: "#F0F5FA",
    flexDirection: "row",
    paddingLeft: 10,
    fontFamily: "Sen-Regular",
  },
  inputLabel: {
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Sen-Medium',
    color: '#32343E',
    alignSelf: 'flex-start',
    marginLeft: "5%"
  },
  inputContainer2: {
    marginTop: '3%',
    borderRadius: 10,
    height: responsiveHeight(7),
    width: responsiveWidth(90),
    backgroundColor: "#F0F5FA",
    flexDirection: "row",
    paddingLeft: 10,
    fontFamily: "Sen-Regular",
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  textWrapper: {
    marginTop: '5%',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    width: "90%",
  },
  logButton: {
    color: "#FFFFFF",
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '4%',
  },
  signUpText: {
    fontFamily: 'Sen-SemiBold',
    color: "#FF7622",
    paddingLeft: 5,
    fontSize: responsiveFontSize(1.7)
  },
  forget: {
    color: "#FF7622",
  },
  formContainer2: {
    marginTop: "5%",
    justifyContent: 'center',
    alignItems: 'center',

  },
  input1: {
    justifyContent: 'flex-start',
    borderRadius: 10,
    marginTop: '3%',
    width: "90%",
    height: responsiveHeight(7),
    backgroundColor: "#F0F5FA",
    flexDirection: "row",
    paddingLeft: 10,
    fontFamily: "Sen-Regular",
  },
  googleWrapper: {
    borderRadius: 50,
    width: responsiveWidth(14),
    height: responsiveHeight(7),
    alignItems: 'center',
    justifyContent: 'center',
  },

  googleLogo: {
    width: responsiveWidth(6),
    height: responsiveHeight(4),
    resizeMode: 'contain'

  },
})
