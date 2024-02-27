import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Importando o LinearGradient
import { Picker, PickerItem } from '@react-native-picker/picker';
import { specialties, UF } from '../constants/constants'

const Signup = () => {
    const [typeUser, setTypeUser] = useState('');
    const [uf, setUf] = useState('');
    const [specialty, setSpecialty] = useState('');

    console.warn(specialties, UF)

    return (
        <LinearGradient colors={['#5025F1', '#E500F7',]} style={styles.gradient}>
            <View style={styles.container}>
                <ScrollView style={styles.scrollViewContent} >
                    <View style={styles.cont}>

                        <Text style={styles.header}>Cadastro</Text>

                        <View style={styles.contInp}>
                            <Text style={styles.label}>E-mail</Text>
                            <TextInput
                                style={styles.inputLogin}
                                placeholder="Insira seu E-mail"
                                placeholderTextColor="#ffffff4d"
                                keyboardType="email-address"
                            />
                        </View>

                        <View style={styles.contInp}>
                            <Text style={styles.label}>Senha</Text>
                            <TextInput
                                style={styles.inputLogin}
                                placeholder="Insira seu Senha"
                                placeholderTextColor="#ffffff4d"
                                keyboardType="default"
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={styles.contInp}>
                            <Text style={styles.label}>Telefone</Text>
                            <TextInput
                                style={styles.inputLogin}
                                placeholder="Insira seu Telefone"
                                placeholderTextColor="#ffffff4d"
                                keyboardType="phone-pad"
                            />
                        </View>

                        <View style={styles.contInp}>
                            <Text style={styles.label}>CPF</Text>
                            <TextInput
                                style={styles.inputLogin}
                                placeholder="Insira seu CPF"
                                placeholderTextColor="#ffffff4d"
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={styles.contInp}>
                            <Text style={styles.label}>Tipo de usuário</Text>
                            <Picker
                                style={styles.pickerite}
                                selectedValue={typeUser}
                                onValueChange={(itemValue, itemIndex) =>
                                    setTypeUser(itemValue)
                                }>
                                <Picker.Item style={styles.inputLogin} label="O que você é?" value="" />
                                <Picker.Item style={styles.inputLogin} label="Eu sou Médico(a)" value="Medico" />
                                <Picker.Item style={styles.inputLogin} label="Eu sou Estudante" value="Estudante" />
                            </Picker>
                        </View>

                        {
                            typeUser === 'Medico' ?
                                <>
                                    <View style={styles.contInp}>
                                        <Text style={styles.label}>uf</Text>
                                        <Picker
                                            style={styles.pickerite}
                                            selectedValue={uf}
                                            onValueChange={(itemValue, itemIndex) =>
                                                setUf(itemValue)
                                            }>
                                            {UF.map((states, index) => (
                                                <Picker.Item
                                                    key={index}
                                                    label={states}
                                                    value={states}
                                                    style={styles.inputLogin}
                                                />
                                            ))}
                                        </Picker>
                                    </View>
                                    <View style={styles.contInp}>
                                        <Text style={styles.label}>CRM</Text>
                                        <TextInput
                                            style={styles.inputLogin}
                                            placeholder="CRM - ele vai ter uma validação"
                                            placeholderTextColor="#fff"
                                            keyboardType="numeric"
                                        />
                                    </View>
                                    <View style={styles.contInp}>
                                        <Text style={styles.label}>Nome</Text>
                                        <TextInput
                                            style={styles.inputLogin}
                                            placeholder="Nome"
                                            placeholderTextColor="#fff"
                                            keyboardType="default"
                                        />
                                    </View>
                                    <View style={styles.contInp}>
                                        <Text style={styles.label}>Especialidae</Text>
                                        <Picker
                                            style={styles.pickerite}
                                            selectedValue={specialty}
                                            onValueChange={(itemValue, itemIndex) =>
                                                setSpecialty(itemValue)
                                            }>
                                            {specialties.map((specialties, index) => (
                                                <Picker.Item
                                                    key={index}
                                                    label={specialties}
                                                    value={specialties}
                                                    style={styles.inputLogin}
                                                />
                                            ))}
                                        </Picker>
                                    </View>
                                </>
                                : typeUser === 'Estudante' ?
                                    <View style={styles.contInp}>
                                        <Text style={styles.label}>Nome</Text>
                                        <TextInput
                                            style={styles.inputLogin}
                                            placeholder="Nome"
                                            placeholderTextColor="#fff"
                                            keyboardType="default"
                                        />
                                    </View> : null
                        }


                        <TouchableOpacity style={styles.btnLogin}>
                            <Text style={styles.btnLoginText}>Criar conta</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    gradient: {
        width: '100%',
        flex: 1,
    },
    // main: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    header: {
        flex: 1,
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40,
        color: '#fff',
        marginBottom: 40,
    },
    cont: {
        flex: 1,
        marginTop: 55,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contInp: {
        width: '100%',
        alignItems: 'center',
    },
    inputLogin: {
        width: "85%",
        fontSize: 18,
        // height: 55, 
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(12,12,12,0.34)',
        padding: 10,
    },
    label: {
        width: '85%',
        alignItems: 'flex-start',
        fontSize: 20,
        marginBottom: 5,
        color: '#fff',
    },
    btnLoginText: {
        fontSize: 17,
        //fontFamily: 'Sarabun',
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#3632D6',
        letterSpacing: 1, //espacamento entre as letras
        textTransform: 'uppercase', //estilo maiusculo
    },
    btnLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 5,
        marginBottom: 50,
        marginTop: 25,
        borderRadius: 9,
        shadowOffset: { height: 1, width: 1 },
        width: "85%",
        height: 40,
    },

    pickerite: {
        width: "85%",
        // height: 40,
    },
});

export default Signup