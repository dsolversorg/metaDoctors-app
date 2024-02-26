import React from 'react';
import { StatusBar, View, Text } from 'react-native';
export const applyCustomCode = externalCodeSetup => {
	externalCodeSetup.navigationApi.replaceScreenComponent("SignupScreen", () => (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Tela de cadastro vamo tentar ver essa bagaca</Text>
			<TextInput placeholder={"login"} />
			<TextInput placeholder={"password"} />
		</View>
	));
}