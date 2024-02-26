import React from 'react';
import { StyleSheet, ImageBackground, Image, View, TextInput, TouchableOpacity, Text } from 'react-native';
export const applyCustomCode = externalCodeSetup => {
	externalCodeSetup.navigationApi.replaceScreenComponent("SignupScreen", () => (
		<View style={StyleSheet.absoluteFillObject}>
			<View style={styles.main}>

				<TextInput
					style={styles.inputLogin}
					placeholder="E-mail"
					placeholderTextColor="#fff"
					keyboardType="email-address"

				/>

				<TextInput
					style={styles.inputLogin}
					placeholder="Senha"
					placeholderTextColor="#fff"
					keyboardType="default"
					secureTextEntry={true}
				/>

				<TouchableOpacity
					style={styles.btnLogin}>
					<Text style={styles.btnLoginText}>LOGIN</Text>
				</TouchableOpacity>

			</View>
		</View>
	));
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
	},
	inputLogin: {
		width: 230,
		height: 40,
		marginBottom: 10,
		bottom: 90,
		fontSize: 18,
		color: '#fff',
		borderBottomColor: '#FFF',
		borderBottomWidth: 2,
		backgroundColor: '#232323'
	},

	btnLoginText: {
		fontSize: 17,
		//fontFamily: 'Sarabun',
		fontStyle: 'normal',
		fontWeight: 'bold',
		color: '#fff',
		letterSpacing: 1, //espacamento entre as letras
		textTransform: 'uppercase', //estilo maiusculo
	},
	btnLogin: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		width: 130,
		backgroundColor: '#232323',
		borderColor: '#fff',
		borderWidth: 5,
		borderRadius: 9,
		bottom: 80,
		shadowOffset: { height: 1, width: 1 },
	},

});