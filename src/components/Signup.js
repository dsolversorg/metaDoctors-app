import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, ScrollView, Switch } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import { specialties, UF, fonte } from '../constants/constants';
import api from "../services/api";
import crmApi from "../services/crmApi";
import CustomModal from "./CustomModal";
// import { Modalize, useModalize } from 'react-native-modalize';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telephone, setTelephone] = useState('');
    const [cpf, setCpf] = useState('');
    const [crm, setCrm] = useState('');
    const [name, setName] = useState('');
    const [nameUser, setNameUser] = useState('');
    const [uf, setUf] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [typeUser, setTypeUser] = useState('');
    const colores = ['#E5B0F2', '#E1E0EF', '#E5B0F2'];

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [modalVisible, setModalVisible] = useState(false);


    const [emailError, setEmailError] = useState(false);
    const [senhaError, setSenhaError] = useState(false);
    const [telephoneError, setTelephoneError] = useState(false);
    const [cpfError, setCpfError] = useState(false);
    const [nameUserError, setNameUserError] = useState(false);
    const [TypeError, setTypeError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [errorTextEmail, setErrorTextEmail] = useState('');
    const [errorTextUser, setErrorTextUser] = useState('');
    const [errorTextCrm, setErrorTextCrm] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const token = '1112d5aa-5586-4a4d-8413-08c2257e5989';

    const scrollViewRef = useRef(null);
    // const { largura } = useWindowDimensions();
    // const modalizeRef = useRef < Modalize > (null);

    // function onOpen() {
    //     modalizeRef.current?.open();
    // };
    const ModalVisible = () => {
        setModalVisible(!modalVisible)
    }

    // Função para formatar o número de telefone
    const formatPhoneNumber = (input) => {
        // Remove qualquer caractere que não seja número
        let formattedNumber = input.replace(/\D/g, '');

        // Aplica a máscara (XX) XXXXX-XXXX
        formattedNumber = formattedNumber.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');

        // Atualiza o estado do telefone com o número formatado
        setTelephone(formattedNumber);
    };

    const formatCPF = (input) => {
        // Remove qualquer caractere que não seja número
        let formattedCPF = input.replace(/\D/g, '');

        // Aplica a máscara XXX.XXX.XXX-XX
        formattedCPF = formattedCPF.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');

        // Atualiza o estado do CPF com o número formatado
        setCpf(formattedCPF);
    };



    function errorFillIn(campo, setError) {
        if (campo !== '') {
            setError(false);
            setErrorText('')
        } else {
            setError(true);
            setErrorText('Preencha este campo!')
        }
    }

    async function validateCrm() {
        const response = await crmApi(`ValidaCrm?token=${token}&crm=${crm}&UF=${uf}`);
        try {
            if (response.status === 200) {
                const responseData = JSON.parse(response.request._response);
                setDoctorName(responseData.dadosMedico.nome);
                setName(doctorName)
                console.log(doctorName);
            } else if (response.status === 204) {
                setErrorTextCrm('Crm Invalido!')
            }
        } catch (error) {
            console.log(error);
        }
        console.log(response);
    }

    async function signup() {
        console.log("entrou no cadastro");

        try {
            const response = await api.post('v1/signup', {
                signup_email: email,
                signup_password: senha,
                field_1: name,
                field_25: uf,
                field_696: typeUser,
                field_698: cpf,
                field_3: nameUser,
                field_432: telephone,
                field_26: specialty,
                legal_agreement: isEnabled,
            });

            console.log('Resposta da API:', response.data);

            if (response.status === 200) {
                console.log('Sucesso!');

            }
        } catch (error) {
            console.error('Erro na requisição:', error);

            if (error.response.status === 400) {
                console.log('Erro 400 - Bad Request:', error);
                console.log('aaaaa: ', error.response.data.message.signup_email);
                scrollViewRef.current.scrollTo({ y: 0, animated: true });
                setErrorTextEmail(error.response.data.message.signup_email);
                setErrorTextUser(error.response.data.message.field_3);
            } else if (error.response.status === 401) {
                console.log('Erro 401 - Unauthorized');
            } else {
                console.error('Erro não tratado:', error);
            }
        }
    }


    // useEffect(() => {
    //     validateCrm();
    // }, [])

    return (
        <LinearGradient
            colors={colores}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 0.5, 1.0]}
            style={styles.gradient}>
            <View style={styles.container}>
                <ScrollView style={styles.scrollViewContent} ref={scrollViewRef}>
                    <View style={styles.cont}>
                        <Text style={styles.header}>Cadastro</Text>
                        <View style={styles.contInp}>
                            {emailError && email === '' ? <Text style={styles.errorText}>{errorText}</Text> : null}
                            {errorTextEmail ? <Text style={styles.errorText}>{errorTextEmail}</Text> : null}
                            <Text style={styles.label}>E-mail</Text>
                            <TextInput
                                style={styles.inputLogin}
                                placeholder="Insira seu E-mail"
                                placeholderTextColor="#464554"
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
                                placeholderTextColor="#464554"
                                keyboardType="default"
                                secureTextEntry={true}
                                onChangeText={(senha) => { setSenha(senha) }}
                                onBlur={() => errorFillIn(senha, setSenhaError)}
                            />
                        </View>

                        <View style={styles.contInp}>
                            {nameUserError && nameUser === '' ? <Text style={styles.errorText}>{errorText}</Text> : null}
                            {errorTextUser ? <Text style={styles.errorText}>{errorTextUser}</Text> : null}
                            <Text style={styles.label}>Nome de Usuario</Text>
                            <TextInput
                                style={styles.inputLogin}
                                placeholder="Insira seu Nome de Usuario"
                                placeholderTextColor="#464554"
                                keyboardType="default"
                                onChangeText={(nameUser) => { setNameUser(nameUser) }}
                                onBlur={() => errorFillIn(nameUser, setNameUserError)}
                            />
                        </View>

                        <View style={styles.contInp}>
                            {telephoneError && telephone === '' ? <Text style={styles.errorText}>{errorText}</Text> : null}
                            <Text style={styles.label}>Telefone</Text>
                            <TextInput
                                style={styles.inputLogin}
                                placeholder="Insira seu número de Celular"
                                placeholderTextColor="#464554"
                                keyboardType="phone-pad"
                                value={telephone}
                                onChangeText={(text) => formatPhoneNumber(text)}
                                onBlur={() => errorFillIn(telephone, setTelephoneError)}
                            />
                        </View>

                        <View style={styles.contInp}>
                            {cpfError && cpf === '' ? <Text style={styles.errorText}>{errorText}</Text> : null}
                            <Text style={styles.label}>CPF</Text>
                            <TextInput
                                style={styles.inputLogin}
                                placeholder="Insira seu CPF"
                                placeholderTextColor="#464554"
                                keyboardType="numeric"
                                value={cpf}
                                onChangeText={(text) => formatCPF(text)}
                                onBlur={() => errorFillIn(cpf, setCpfError)}
                            />
                        </View>

                        <View style={styles.contInp}>
                            <Text style={styles.label}>UF</Text>
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
                                        style={styles.picker}
                                    />
                                ))}
                            </Picker>
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
                                <Picker.Item style={styles.picker} label="O que você é?" value="" />
                                <Picker.Item style={styles.picker} label="Eu sou Estudante" value="Estudante" />
                                <Picker.Item style={styles.picker} label="Eu sou Médico(a)" value="Medico" />
                                <Picker.Item style={styles.picker} label="Eu sou Residente" value="Residente" />
                            </Picker>
                        </View>

                        {typeUser === 'Medico' || typeUser === 'Residente' ?
                            <>
                                <View style={styles.contInp}>
                                    {crm !== "" ? <Text style={styles.errorText}>{errorTextCrm}</Text> : null}
                                    <Text style={styles.label}>CRM</Text>
                                    <TextInput
                                        style={styles.inputLogin}
                                        placeholder="CRM - ele vai ter uma validação"
                                        placeholderTextColor="#464554"
                                        keyboardType="numeric"
                                        onChangeText={(crm) => { setCrm(crm) }}
                                        onBlur={validateCrm}
                                    />
                                </View>
                                <View style={styles.contInp}>
                                    <Text style={styles.label}>Nome</Text>
                                    <TextInput
                                        style={styles.inputLogin}
                                        placeholder="Nome"
                                        placeholderTextColor="#464554"
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
                                                style={styles.picker}
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
                                        placeholderTextColor="#464554"
                                        keyboardType="default"
                                        onChangeText={(name) => { setName(name) }}
                                    />
                                </View> : null
                        }

                        <View style={styles.contCheck}>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#0000FF' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                                style={styles.checkBox}
                            />
                            <TouchableOpacity onPress={ModalVisible}>
                                <Text style={styles.textServices}><Text style={[styles.textServices, styles.bold]}>aceito os </Text>termos de serviços</Text>
                            </TouchableOpacity>
                            <CustomModal modalVisible={modalVisible} setModalVisible={ModalVisible} />
                        </View>

                        <TouchableOpacity style={styles.btnLogin} onPress={signup}>
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                colors={['#F606F8', '#635EFF', '#0706FF']}
                                style={styles.gradientBTN}
                            >
                                <Text style={styles.btnLoginText}>Criar conta</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    textServices: {
        color: '#000',
    },
    testImg: {
        height: 200,
        width: 200,
    },

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
        color: '#000',
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
        marginBottom: 10
    },
    contCheck: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        // backgroundColor: '#00f'
    },
    inputLogin: {
        width: "85%",
        fontSize: 18,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#CFCCF3',
        padding: 10,
    },
    picker: {
        width: "85%",
        fontSize: 18,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#ABA6F7',
        color: '#000',
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
    btnLoginText: {
        fontSize: 17,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    gradientBTN:{
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 9,
    },
    btnLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        marginTop: 25,
        borderRadius: 9,
        padding: 10,
        shadowOffset: { height: 1, width: 1 },
        width: "85%",
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        // width: 130,
        backgroundColor: '#3632D6',
        borderColor: '#3632D6',
        borderWidth: 5,
        // marginBottom: 50,
        marginTop: 25,
        padding: 10,
        borderRadius: 9,
        shadowOffset: { height: 1, width: 1 },
        // width: "85%",
    },
    btnText: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#000',
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    pickerite: {
        width: "85%",
        borderRadius: 9
    },
    bold: {
        fontWeight: 'bold',
    },

});

export default Signup;
