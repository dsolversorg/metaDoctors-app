export const applyCustomCode = (externalCodeSetup: any) => {
	// alert('Soooo dalee');
	externalCodeSetup.navigationApi.replaceScreenComponent("SignupScreen", () => (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>This is my signup screen.</Text>
        </View>
    ));
};