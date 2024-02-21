import {compose} from "recompose";
import {withNavigation} from "../../components/hocs/withNavigation";
import Signup from "../SignupScreen";
import PropTypes from "prop-types";
import withActiveCallBacks from "../../navigators/react-navigation-addons/withActiveCallBacks";
/**
 * You can use this component to display the signup screen in your custom screen.
 * @component
 * @example <caption>Use signup screen to create your own signup process such as a signup that requires an OTP authentication.</caption>
 *
 * //In custom_code/components/MyCustomScreen.js
 *
 * import React, { useState, useEffect } from 'react';
 * import { View, Text, StyleSheet, Button, Modal, Alert, TextInput } from "react-native";
 * import externalCodeDependencies from "@src/externalCode/externalRepo/externalCodeDependencies"
 * import SignupScreen from "@src/containers/Custom/SignupScreen";
 * import AppButton from "@src/components/AppButton";
 * import { getExternalCodeSetup } from '@src/externalCode/externalRepo';
 *
 * const MyModal = ({ modalVisible, setModalVisible, otp, setOtp, validateOtp }) => {
 *
 *   return (
 *     <View style={styles.centeredView}>
 *       <Modal
 *         animationType="slide"
 *         transparent={true}
 *         visible={modalVisible}
 *       >
 *         <View style={styles.centeredView}>
 *           <View style={styles.modalView}>
 *             <Text style={styles.modalText}>Please enter the OTP we sent to your mobile number</Text>
 *             <TextInput
 *               style={styles.input}
 *               onChangeText={setOtp}
 *               value={otp}
 *               placeholder="Enter OTP..."
 *               keyboardType="numeric"
 *             />
 *             <Button
 *               onPress={() => validateOtp()}
 *               title="Submit"
 *             />
 *           </View>
 *         </View>
 *       </Modal>
 *     </View>
 *   );
 * }
 *
 * const MyCustomScreen = (props) => {
 *
 *   const [modalVisible, setModalVisible] = useState(false);
 *   const [otp, setOtp] = useState(null);
 *   const [signupAction, setSignupAction] = useState(null);
 *
 *   //Do OTP validation here...
 *   const validateOtp = () => {
 *
 *     if (otp == "1234") {
 *       console.log('logging in...');
 *       signupAction()
 *     } else {
 *       console.log('Invalid OTP');
 *     }
 *
 *     setModalVisible(false)
 *   }
 *
 *   getExternalCodeSetup().authApi.setSignupButton(props => {
 *
 *     const {
 *       disabled,
 *       global,
 *       doSignup,
 *       label,
 *       loading,
 *       spinnerColor,
 *       getValues
 *     } = props;
 *
 *     //Assign hook's doSignup function to a local state variable to make it available throughout the component...
 *     useEffect(() => {
 *       setSignupAction(() => () => doSignup());
 *     }, [doSignup])
 *
 *     const signupAction = () => {
 *       Alert.alert("OTP", `We will send an OTP to ${getValues().field_1}. Do you want to proceed?`,
 *         [
 *           {
 *             text: "Cancel",
 *             onPress: () => console.log("Cancel Pressed"),
 *             style: "cancel"
 *           },
 *           {
 *             text: "OK",
 *             onPress: () => {
 *               console.log("OK Pressed");
 *               setModalVisible(true);
 *             }
 *           }
 *         ])
 *
 *     }
 *
 *     return <AppButton
 *       disabled={disabled}
 *       style={[{ marginTop: 17 }, global.regButtonContainer]}
 *       // onPress={doSignup}
 *       onPress={signupAction}
 *       label={label}
 *       global={global}
 *       loading={loading}
 *       labelStyle={[
 *         global.buttonLabel,
 *         global.regButtonLabel,
 *         disabled && { opacity: 0.4 }
 *       ]}
 *       spinnerColor={spinnerColor}
 *     />
 *   });
 *
 *   return <>
 *     <SignupScreen screenTitle="Signup now!" hideBackButton={true}  {...props} />
 *     <MyModal
 *       modalVisible={modalVisible}
 *       setModalVisible={setModalVisible}
 *       otp={otp}
 *       setOtp={setOtp}
 *       validateOtp={validateOtp}
 *     />
 *   </>
 * }
 *
 *
 * export default MyCustomScreen;
 *
 * const styles = StyleSheet.create({
 *   input: {
 *     height: 40,
 *     margin: 12,
 *     borderWidth: 1,
 *     padding: 10,
 *   },
 *   centeredView: {
 *     top: 100,
 *     justifyContent: "center",
 *     alignItems: "center",
 *   },
 *   modalView: {
 *     margin: 20,
 *     backgroundColor: "white",
 *     borderRadius: 20,
 *     padding: 35,
 *     alignItems: "center",
 *     shadowColor: "#000",
 *     shadowOffset: {
 *       width: 0,
 *       height: 2
 *     },
 *     shadowOpacity: 0.25,
 *     shadowRadius: 4,
 *     elevation: 5
 *   },
 *   modalText: {
 *     marginBottom: 15,
 *     textAlign: "center"
 *   }
 * });
 *
 * //In custom_code/index.js...
 *
 * ...
 *
 * import MyCustomScreen from "./components/MyCustomScreen";
 *
 * export const applyCustomCode = externalCodeSetup => {
 *   externalCodeSetup.navigationApi.replaceScreenComponent("SignupScreen", MyCustomScreen);
 * }
 *
 */
const SignupScreen = compose(
	withNavigation,
	withActiveCallBacks
)(Signup);
export default SignupScreen;
SignupScreen.propTypes = {
	/**
	 * Signup screen title
	 * {String}
	 */
	screenTitle: PropTypes.string,
	/**
	 * Use `true` to hide title of the screen
	 * {Boolean}
	 */
	hideTitle: PropTypes.bool,
	/**
	 * Use `true` to hide the back button
	 * {Boolean}
	 */
	hideBackButton: PropTypes.bool
};