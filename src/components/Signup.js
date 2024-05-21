import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, ScrollView, Switch } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import { specialties, UF, fonte } from '../constants/constants';

import api from "../services/api";
import crmApi from "../services/crmApi";
import sharpApi from "../services/sharpApi";

import CustomModal from "./CustomModal";
import VerifyCode from "./VerifyCode";
import { useNavigation } from "@react-navigation/native";

// import { Modalize, useModalize } from 'react-native-modalize';

const Signup = (proops) => {
    // const navigation = useNavigation()

    // const [email, setEmail] = useState('');
    // const [senha, setSenha] = useState('');
    // const [telephone, setTelephone] = useState('');
    // const [cpf, setCpf] = useState('');
    // const [crm, setCrm] = useState('');
    // const [name, setName] = useState('');
    // const [nameUser, setNameUser] = useState('');
    // const [uf, setUf] = useState('');
    // const [specialty, setSpecialty] = useState('');
    // const [typeUser, setTypeUser] = useState('');
    // const colores = ['#E5B0F2', '#E1E0EF', '#E5B0F2'];

    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    // const [modalVisible, setModalVisible] = useState(false);


    // const [emailError, setEmailError] = useState(false);
    // const [crmError, setCrmError] = useState(false);
    // const [senhaError, setSenhaError] = useState(false);
    // const [telephoneError, setTelephoneError] = useState(false);
    // const [cpfError, setCpfError] = useState(false);
    // const [nameUserError, setNameUserError] = useState(false);
    // const [TypeError, setTypeError] = useState(false);
    // const [errorText, setErrorText] = useState('');
    // const [errorTextEmail, setErrorTextEmail] = useState('');
    // const [errorTextUser, setErrorTextUser] = useState('');
    // const [errorTextCrm, setErrorTextCrm] = useState('');
    // const [doctorName, setDoctorName] = useState('');
    // const token = '1112d5aa-5586-4a4d-8413-08c2257e5989';

    // const scrollViewRef = useRef(null);
    // // const { largura } = useWindowDimensions();
    // // const modalizeRef = useRef < Modalize > (null);

    // // function onOpen() {
    // //     modalizeRef.current?.open();
    // // };
    // const ModalVisible = () => {
    //     setModalVisible(!modalVisible)
    // }

    // // Função para formatar o número de telefone
    // const formatPhoneNumber = (input) => {
    //     // Remove qualquer caractere que não seja número
    //     let formattedNumber = input.replace(/\D/g, '');

    //     // Aplica a máscara (XX) XXXXX-XXXX
    //     formattedNumber = formattedNumber.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');

    //     // Atualiza o estado do telefone com o número formatado
    //     setTelephone(formattedNumber);
    // };

    // const formatCPF = (input) => {
    //     // Remove qualquer caractere que não seja número
    //     let formattedCPF = input.replace(/\D/g, '');

    //     // Aplica a máscara XXX.XXX.XXX-XX
    //     formattedCPF = formattedCPF.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');

    //     // Atualiza o estado do CPF com o número formatado
    //     setCpf(formattedCPF);
    // };



    // function errorFillIn(campo, setError) {
    //     if (campo !== '') {
    //         setError(false);
    //         setErrorText('')
    //     } else {
    //         setError(true);
    //         setErrorText('Preencha este campo!')
    //     }
    // }

    // async function validateCrm() {
    //     const response = await crmApi(`ValidaCrm?token=${token}&crm=${crm}&UF=${uf}`);
    //     try {
    //         if (response.status === 200) {
    //             const responseData = JSON.parse(response.request._response);
    //             setDoctorName(responseData.dadosMedico.nome);
    //             setName(responseData.dadosMedico.nome)
    //             console.log(doctorName);
    //             setErrorTextCrm('')
    //         } else if (response.status === 204) {
    //             setErrorTextCrm('Crm Invalido!')
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     console.log(response);
    // }

    // async function sendToSharp() {
    //     console.log('entrou no sharp');
    //     try {
    //         const response = await sharpApi.post('', {
    //             method: "createLeads",
    //             params: {
    //                 objects: [{
    //                     emailAddress: email,
    //                     firstName: name,
    //                     uf_6568e49741705: uf,
    //                     uf_crm_656f971ee6672: uf,
    //                     username_metadoctors_6568e49751793: nameUser,
    //                     mobilePhoneNumber: telephone,
    //                     celular_6568e4975606e: telephone,
    //                     especialidade_6568e497491da: specialty,
    //                     crm_6568e4973b2bc: crm
    //                 }]
    //             },
    //             id: "123456789123456789"
    //         });
    //         console.log('Resposta da API:', response);
    //         if (response.status === 200) {
    //             console.log('Sucesso!2');
    //         }
    //     } catch (error) {
    //         console.error('Erro na requisição:', error);
    //     }
    // }

    // async function signup() {
    //     console.log("entrou no cadastro");

    //     try {
    //         const response = await api.post('v1/signup', {
    //             signup_email: email,
    //             signup_password: senha,
    //             field_1: name,
    //             field_25: uf,
    //             field_696: typeUser,
    //             field_698: cpf,
    //             field_24: crm,
    //             field_3: nameUser,
    //             field_432: telephone,
    //             field_26: specialty,
    //             legal_agreement: isEnabled,
    //         });

    //         console.log('Resposta da API:', response.data);

    //         if (response.status === 200) {
    //             console.log('Sucesso!');
    //             sendToSharp();
    //             navigation.navigate('CodeVerificationScreen', { username: nameUser, email: email });

    //         }
    //     } catch (error) {
    //         console.error('Erro na requisição:', error);

    //         if (error.response.status === 400) {
    //             console.log('Erro 400 - Bad Request:', error);
    //             console.log('aaaaa: ', error.response.data.message.signup_email);
    //             scrollViewRef.current.scrollTo({ y: 0, animated: true });
    //             setErrorTextEmail(error.response.data.message.signup_email);
    //             setErrorTextUser(error.response.data.message.field_3);
    //         } else if (error.response.status === 401) {
    //             console.log('Erro 401 - Unauthorized');
    //         } else {
    //             console.error('Erro não tratado:', error);
    //         }
    //     }
    // }


    // useEffect(() => {
    //     validateCrm();
    // }, [])

    return (
        // <LinearGradient
        //     colors={colores}
        //     start={{ x: 0, y: 0 }}
        //     end={{ x: 1, y: 1 }}
        //     locations={[0, 0.5, 1.0]}
        //     style={styles.gradient}>
        //     <View style={styles.container}>
        //         <ScrollView style={styles.scrollViewContent} ref={scrollViewRef}>
        //             <View style={styles.cont}>
        //                 <View style={styles.viewimg}>
        //                     <Image style={styles.LogoMd} source={require('../assets/login_logo.png')} />
        //                 </View>
        //                 <Text style={styles.header}>Cadastro</Text>
        //                 <View style={styles.contInp}>
        //                     <Text style={styles.label_title}>E-mail</Text>
        //                     {emailError || errorTextEmail ? <TextInput
        //                         style={styles.inputLoginError}
        //                         placeholder="Insira seu E-mail"
        //                         placeholderTextColor="#464554"
        //                         keyboardType="email-address"
        //                         onChangeText={(email) => { setEmail(email) }}
        //                         onBlur={() => errorFillIn(email, setEmailError)}
        //                     /> :
        //                         <TextInput
        //                             style={styles.inputLogin}
        //                             placeholder="Insira seu E-mail"
        //                             placeholderTextColor="#464554"
        //                             keyboardType="email-address"
        //                             onChangeText={(email) => { setEmail(email) }}
        //                             onBlur={() => errorFillIn(email, setEmailError)}
        //                         />}
        //                     {emailError && email === '' ? <Text style={styles.errorText}>{errorText}</Text> : null}
        //                     {errorTextEmail ? <Text style={styles.errorText}>{errorTextEmail}</Text> : null}
        //                 </View>

        //                 <View style={styles.contInp}>
        //                     <Text style={styles.label_title}>Senha</Text>
        //                     <TextInput
        //                         style={styles.inputLogin}
        //                         placeholder="Insira sua senha"
        //                         placeholderTextColor="#464554"
        //                         keyboardType="default"
        //                         secureTextEntry={true}
        //                         onChangeText={(senha) => { setSenha(senha) }}
        //                         onBlur={() => errorFillIn(senha, setSenhaError)}
        //                     />
        //                     {senhaError && senha === '' ? <Text style={styles.errorText}>{errorText}</Text> : null}
        //                 </View>

        //                 <View style={styles.contInp}>
        //                     <Text style={styles.label_title}>Nome de usuário</Text>
        //                     {nameUserError || errorTextUser ?
        //                         <TextInput
        //                             style={styles.inputLoginError}
        //                             placeholder="Insira seu nome de usuário"
        //                             placeholderTextColor="#464554"
        //                             keyboardType="default"
        //                             onChangeText={(nameUser) => { setNameUser(nameUser) }}
        //                             onBlur={() => errorFillIn(nameUser, setNameUserError)}
        //                         />
        //                         :
        //                         <TextInput
        //                             style={styles.inputLogin}
        //                             placeholder="Insira seu nome de usuário"
        //                             placeholderTextColor="#464554"
        //                             keyboardType="default"
        //                             onChangeText={(nameUser) => { setNameUser(nameUser) }}
        //                             onBlur={() => errorFillIn(nameUser, setNameUserError)}
        //                         />
        //                     }
        //                     {nameUserError && nameUser === '' ? <Text style={styles.errorText}>{errorText}</Text> : null}
        //                     {errorTextUser ? <Text style={styles.errorText}>{errorTextUser}</Text> : null}
        //                 </View>

        //                 <View style={styles.contInp}>
        //                     <Text style={styles.label_title}>Celular</Text>
        //                     {telephoneError ?
        //                         <TextInput
        //                             style={styles.inputLoginError}
        //                             placeholder="Insira seu número de Celular"
        //                             placeholderTextColor="#464554"
        //                             keyboardType="phone-pad"
        //                             value={telephone}
        //                             onChangeText={(text) => formatPhoneNumber(text)}
        //                             onBlur={() => errorFillIn(telephone, setTelephoneError)}
        //                         /> :
        //                         <TextInput
        //                             style={styles.inputLogin}
        //                             placeholder="Insira seu número de Celular"
        //                             placeholderTextColor="#464554"
        //                             keyboardType="phone-pad"
        //                             value={telephone}
        //                             onChangeText={(text) => formatPhoneNumber(text)}
        //                             onBlur={() => errorFillIn(telephone, setTelephoneError)}
        //                         />}
        //                     {telephoneError && telephone === '' ? <Text style={styles.errorText}>{errorText}</Text> : null}
        //                 </View>

        //                 <View style={styles.contInp}>
        //                     <Text style={styles.label_title}>UF</Text>
        //                     <View style={styles.pickerContainer}>
        //                         <Picker
        //                             style={styles.pickerite}
        //                             selectedValue={uf}
        //                             onValueChange={(itemValue, itemIndex) =>
        //                                 setUf(itemValue)
        //                             }
        //                             dropdownIconColor="#000"
        //                             mode="dropdown" >
        //                             {UF.map((states, index) => (
        //                                 <Picker.Item
        //                                     key={index}
        //                                     label={states}
        //                                     value={states}
        //                                     style={styles.picker}
        //                                 />
        //                             ))}
        //                         </Picker>
        //                     </View>
        //                 </View>
        //                 <View style={styles.contInp}>
        //                     <Text style={styles.label_title}>CRM</Text>
        //                     {crmError || errorTextCrm ?
        //                         <TextInput
        //                             style={styles.inputLoginError}
        //                             placeholder="insira seu CRM"
        //                             placeholderTextColor="#464554"
        //                             keyboardType="numeric"
        //                             onChangeText={(crm) => { setCrm(crm) }}
        //                             onBlur={() => errorFillIn(crm, setCrmError)}
        //                             onEndEditing={validateCrm}
        //                         /> :
        //                         <TextInput
        //                             style={styles.inputLogin}
        //                             placeholder="insira seu CRM"
        //                             placeholderTextColor="#464554"
        //                             keyboardType="numeric"
        //                             onChangeText={(crm) => { setCrm(crm) }}
        //                             onBlur={() => errorFillIn(crm, setCrmError)}
        //                             onEndEditing={validateCrm}
        //                         />}
        //                     {crmError && crm === "" ? <Text style={styles.errorText}>{errorText}</Text> : null}
        //                     {errorTextCrm ? <Text style={styles.errorText}>{errorTextCrm}</Text> : null}
        //                 </View>
        //                 <View style={styles.contInp}>
        //                     <Text style={styles.label}>Nome</Text>
        //                     <TextInput
        //                         style={styles.inputLogin}
        //                         value={name}
        //                         placeholder="insira seu nome"
        //                         placeholderTextColor="#464554"
        //                         keyboardType="default"
        //                         onChangeText={(name) => { setName(name) }}
        //                     />
        //                 </View>
        //                 <View style={styles.contInp}>
        //                     <Text style={styles.label_title}>Especialidade</Text>
        //                     <View style={styles.pickerContainer}>
        //                         <Picker
        //                             style={styles.pickerite}
        //                             selectedValue={specialty}
        //                             onValueChange={(itemValue, itemIndex) =>
        //                                 setSpecialty(itemValue)
        //                             }
        //                             // selectionColor="#fff"
        //                             dropdownIconColor="#000"
        //                             mode="dropdown">
        //                             {specialties.map((specialties, index) => (
        //                                 <Picker.Item
        //                                     key={index}
        //                                     label={specialties}
        //                                     value={specialties}
        //                                     style={styles.picker}
        //                                 />
        //                             ))}
        //                         </Picker>
        //                     </View>
        //                 </View>
        //                 <View style={styles.contCheck}>
        //                     <Switch
        //                         trackColor={{ false: '#767577', true: '#BB80CF' }}
        //                         thumbColor={isEnabled ? '#0000FF' : '#f4f3f4'}
        //                         ios_backgroundColor="#3e3e3e"
        //                         onValueChange={toggleSwitch}
        //                         value={isEnabled}
        //                         style={styles.checkBox}
        //                     />
        //                     <TouchableOpacity style={styles.contTextServices} onPress={ModalVisible}>
        //                         <Text style={[styles.textServices]}>Concordo com os <Text style={[styles.textServices, styles.bold]}>Termos e serviços</Text> e <Text style={[styles.textServices, styles.bold]}>Política de Privacidade.</Text></Text>
        //                     </TouchableOpacity>

        //                     <CustomModal modalVisible={modalVisible} setModalVisible={ModalVisible} />
        //                 </View>

        //                 <TouchableOpacity style={styles.btnLogin} onPress={signup} disabled={!isEnabled}>
        //                     {!isEnabled ?
        //                         <LinearGradient
        //                             start={{ x: 0, y: 0 }}
        //                             end={{ x: 1, y: 1 }}
        //                             colors={['#908d88', '#a4a1a2', '#b8b8b8']}
        //                             style={styles.gradientBTN}
        //                         >
        //                             <Text style={styles.btnLoginText}>Criar conta</Text>
        //                         </LinearGradient> :
        //                         <LinearGradient
        //                             start={{ x: 0, y: 0 }}
        //                             end={{ x: 1, y: 1 }}
        //                             colors={['#F606F8', '#635EFF', '#0706FF']}
        //                             style={styles.gradientBTN}
        //                         >
        //                             <Text style={styles.btnLoginText}>Criar conta</Text>
        //                         </LinearGradient>}
        //                 </TouchableOpacity>
        //             </View>
        //         </ScrollView>
        //     </View >
        // </LinearGradient >

        <>seo</>
    )
}

const styles = StyleSheet.create({

    // testImg: {
    //     height: 200,
    //     width: 200,
    // },

    // errorText: {
    //     //backgroundColor: "green",
    //     width: "85%",
    //     color: '#d40000',
    //     bottom: 10,
    //     justifyContent: "flex-start",
    //     alignItems: "flex-start",

    // },
    // container: {
    //     flex: 1,
    // },
    // scrollViewContent: {
    //     flexGrow: 1,
    // },
    // gradient: {
    //     width: '100%',
    //     flex: 1,
    // },
    // header: {
    //     flex: 1,
    //     width: '85%',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     fontSize: 42,
    //     color: '#000',
    //     marginBottom: 40,
    //     fontWeight: 'bold',
    // },
    // cont: {
    //     flex: 1,
    //     marginTop: 55,
    //     width: '100%',
    //     height: '100%',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // contInp: {
    //     width: '100%',
    //     alignItems: 'center',
    //     marginBottom: 10
    // },
    // contCheck: {
    //     width: '85%',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     flexDirection: 'column',
    //     // backgroundColor: '#00f'
    // },
    // textServices: {
    //     color: '#000',
    // },
    // contTextServices: {
    //     width: '100%',
    //     // backgroundColor: 'red',
    //     alignItems: 'center',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // inputLogin: {
    //     width: "85%",
    //     fontSize: 18,
    //     marginBottom: 10,
    //     borderRadius: 10,
    //     backgroundColor: '#CFCCF3',
    //     color: '#000',
    //     padding: 10,
    // },
    // inputLoginError: {
    //     width: "85%",
    //     fontSize: 18,
    //     marginBottom: 10,
    //     borderRadius: 10,
    //     borderColor: 'red',
    //     borderWidth: 1,
    //     backgroundColor: '#CFCCF3',
    //     color: '#000',
    //     padding: 10,
    // },
    // picker: {
    //     width: "85%",
    //     fontSize: 18,
    //     marginBottom: 10,
    //     borderRadius: 10,
    //     backgroundColor: '#ABA6F7',
    //     color: '#000',
    //     padding: 10,
    // },
    // label: {
    //     width: '85%',
    //     alignItems: 'flex-start',
    //     // fontWeight:500,
    //     fontSize: 20,
    //     marginBottom: 5,
    //     color: '#000',
    // },

    // label_title: {
    //     width: '85%',
    //     alignItems: 'flex-start',
    //     // fontWeight:500,
    //     fontSize: 20,
    //     marginBottom: 5,
    //     color: '#000',
    //     fontWeight: 'bold',
    // },
    // btnLoginText: {
    //     fontSize: 17,
    //     fontStyle: 'normal',
    //     fontWeight: 'bold',
    //     color: '#fff',
    //     letterSpacing: 1,
    //     textTransform: 'uppercase',
    // },
    // gradientBTN: {
    //     paddingVertical: 10,
    //     paddingHorizontal: 100,
    //     borderRadius: 9,
    // },
    // btnLogin: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginBottom: 50,
    //     marginTop: 25,
    //     borderRadius: 9,
    //     padding: 10,
    //     shadowOffset: { height: 1, width: 1 },
    //     width: "90%",
    // },
    // btn: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     // width: 130,
    //     backgroundColor: '#3632D6',
    //     borderColor: '#3632D6',
    //     borderWidth: 5,
    //     // marginBottom: 50,
    //     marginTop: 25,
    //     padding: 10,
    //     borderRadius: 9,
    //     shadowOffset: { height: 1, width: 1 },
    //     // width: "85%",
    // },
    // btnText: {
    //     fontSize: 18,
    //     fontStyle: 'normal',
    //     fontWeight: 'bold',
    //     color: '#000',
    //     letterSpacing: 1,
    //     textTransform: 'uppercase',
    // },
    // pickerContainer: {
    //     width: "85%",
    //     borderRadius: 10,
    //     // backgroundColor: '#ABA6F7',
    //     marginBottom: 10,
    //     paddingHorizontal: 0,
    //     overflow: 'hidden',
    // },
    // pickerContainerError: {
    //     width: "85%",
    //     borderRadius: 10,
    //     borderColor: 'red',
    //     borderWidth: 1,
    //     backgroundColor: '#ABA6F7',
    //     marginBottom: 10,
    //     paddingHorizontal: 0,
    //     overflow: 'hidden',
    // },
    // pickerite: {
    //     width: "100%",
    // },
    // bold: {
    //     fontWeight: 'bold',
    // },
    // viewimg: {
    //     //backgroundColor: 'green',
    //     bottom: 25,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // LogoMd: {
    //     backgroundColor: "#0000",
    //     height: 150,
    //     width: 200,
    // },

});

export default Signup;
