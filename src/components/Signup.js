import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import { specialties, UF } from '../constants/constants';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telephone, setTelephone] = useState('');
    const [cpf, setCpf] = useState('');
    const [crm, setCrm] = useState('');
    const [name, setName] = useState('');
    const [uf, setUf] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [typeUser, setTypeUser] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [senhaError, setSenhaError] = useState(false);
    const [telephoneError, setTelephoneError] = useState(false);
    const [cpfError, setCpfError] = useState(false);
    const [TypeError, setTypeError] = useState(false);
    const [errorText, setErrorText] = useState('');

    function errorFillIn(campo, setError) {
        if (campo !== '') {
            setError(false);
            setErrorText('')
        } else {
            setError(true);
            setErrorText('Preencha este campo!')
        }
    }

    return (
        <LinearGradient colors={['#5025F1', '#E500F7',]} style={styles.gradient}>
            <View style={styles.container}>
                <ScrollView style={styles.scrollViewContent} >
                    <View style={styles.cont}>
                        <Text style={styles.header}>Cadastro</Text>

                        <View style={styles.contInp}>
                            {emailError && email === '' ? <Text style={styles.errorText}>{errorText}</Text> : null}
                            <Text style={styles.label}>E-mail</Text>
                            <TextInput
                                style={styles.inputLogin}
                                placeholder="Insira seu E-mail"
                                placeholderTextColor="#ffffff4d"
                                keyboardType="email-address"
                                onChangeText={(email) => { setEmail(email) }}
                                onBlur={() => errorFillIn(email, setEmailError)}
                            />
                        </View>

                        <View style={styles.contInp}>
                            {senhaError && senha === '' ? <Text style={styles.errorText}>{errorText}</Text> : null}
                            <Text style={styles.label}>Senha</Text>
                            <TextInput
                                style={styles.inputLogin}
                                placeholder="Insira sua Senha"
                                placeholderTextColor="#ffffff4d"
                                keyboardType="default"
                                secureTextEntry={true}
                                onChangeText={(senha) => { setSenha(senha) }}
                                onBlur={() => errorFillIn(senha, setSenhaError)}
                            />
                        </View>

                        <View style={styles.contInp}>
                            {telephoneError && telephone === '' ? <Text style={styles.errorText}>{errorText}</Text> : null}
                            <Text style={styles.label}>Telefone</Text>
                            <TextInput
                                style={styles.inputLogin}
                            placeholder="Insira seu Telefone"
                            placeholderTextColor="#ffffff4d"
                            keyboardType="phone-pad"
                            onChangeText={(telephone) => { setTelephone(telephone) }}
                            onBlur={() => errorFillIn(telephone, setTelephoneError)}
                            />
                        </View>

                        <View style={styles.contInp}>
                            {cpfError && cpf === '' ? <Text style={styles.errorText}>{errorText}</Text> : null}
                            <Text style={styles.label}>CPF</Text>
                            <TextInput
                                style={styles.inputLogin}
                                placeholder="Insira seu CPF"
                                placeholderTextColor="#ffffff4d"
                                keyboardType="numeric"
                                onChangeText={(cpf) => { setCpf(cpf) }}
                                onBlur={() => errorFillIn(cpf, setCpfError)}
                            />
                        </View>

                        <View style={styles.contInp}>
                            {TypeError && typeUser === "" ? <Text style={styles.errorText}>{errorText}</Text> : null}
                            <Text style={styles.label}>Tipo de usuário</Text>
                            <Picker
                                onBlur={() => errorFillIn(typeUser, setTypeError)}
                                style={styles.pickerite}
                                selectedValue={typeUser}
                                onValueChange={(itemValue, itemIndex) =>
                                    setTypeUser(itemValue)
                                }>
                                <Picker.Item style={styles.inputLogin} label="O que você é?" value="" />
                                <Picker.Item style={styles.inputLogin} label="Eu sou Estudante" value="Estudante" />
                                <Picker.Item style={styles.inputLogin} label="Eu sou Médico(a)" value="Medico" />
                                <Picker.Item style={styles.inputLogin} label="Eu sou Residente" value="Residente" />
                            </Picker>
                        </View>

                        {typeUser === 'Medico' || typeUser === 'Residente' ?
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
                                        onChangeText={(crm) => { setCrm(crm) }}
                                    />
                                </View>
                                <View style={styles.contInp}>
                                    <Text style={styles.label}>Nome</Text>
                                    <TextInput
                                        style={styles.inputLogin}
                                        placeholder="Nome"
                                        placeholderTextColor="#fff"
                                        keyboardType="default"
                                        onChangeText={(name) => { setName(name) }}
                                    />
                                </View>
                                <View style={styles.contInp}>
                                    <Text style={styles.label}>Especialidade</Text>
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
                                        onChangeText={(name) => { setName(name) }}
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

    errorText: {
        color: 'red', // ou qualquer cor que você deseje
    },
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
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#3632D6',
        letterSpacing: 1,
        textTransform: 'uppercase',
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
    },
});

export default Signup;
