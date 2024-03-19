import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, ScrollView, Switch } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const VerifyCode = () => {
    const [email, setEmail] = useState('');
    const [nameUser, setNameUser] = useState('');
    const [code, setCode] = useState('');

    const colores = ['#E5B0F2', '#E1E0EF', '#E5B0F2'];

    return (
        <LinearGradient
            colors={colores}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 0.5, 1.0]}
            style={styles.gradient}>
            <View style={styles.container}>
                <View style={styles.contInp}>
                    <Text style={styles.label}>coloque o codigo de verifição da conta</Text>
                    <Text style={styles.label_little}>Não achou? </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira o codigo de verifição da conta"
                        placeholderTextColor="#464554"
                        keyboardType="numeric"
                        value={code}
                        onChangeText={(code) => { setCode(code) }}
                    />
                </View>
            </View>
        </LinearGradient>

    )

}

const styles = StyleSheet.create({
    gradient: {
        width: '100%',
        flex: 1,
    },
    container: {
        flex: 1,
    },
    contInp: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        width: "85%",
        fontSize: 18,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#CFCCF3',
        padding: 10,
    },
    label: {
        width: '85%',
        alignItems: 'flex-start',
        // fontWeight:500,
        fontSize: 20,
        marginBottom: 5,
        color: '#000',
    },
})

export default VerifyCode;