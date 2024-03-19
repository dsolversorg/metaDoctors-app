import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const VerifyCode = () => {
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
                    <Text style={styles.label}>Coloque o código de verificação da conta</Text>
                    <Text style={styles.label_little}>Não achou? Procure na sua caixa de <Text style={[styles.label_little, styles.bold]}>Span </Text> ou na <Text style={[styles.label_little, styles.bold]}>Lixeira.</Text> </Text>
                    <View style={styles.codeContainer}>
                        {code.split('').map((char, index) => (
                            <View key={index} style={styles.codeBox}>
                                <Text style={styles.codeText}>{char}</Text>
                            </View>
                        ))}
                    </View>
                    <TextInput
                        style={styles.hiddenTextInput}
                        placeholder="Insira o código de verificação da conta"
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    contInp: {
        width: '85%',
        alignItems: 'center',
        marginBottom: 10
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        color: '#000',
    },
    label_little: {
        fontSize: 14,
        color: '#000',
        marginBottom: 10,
    },
    bold: {
        fontWeight: 'bold',
    },
    codeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    codeBox: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    codeText: {
        fontSize: 20,
    },
    hiddenTextInput: {
        position: 'absolute',
        width: 1,
        height: 1,
        opacity: 0,
    },
});

export default VerifyCode;
