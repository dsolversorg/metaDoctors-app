import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, ScrollView, Switch, Modal } from 'react-native';

const CustomModal = (proops) => {
    // const [CustomModalVisible, setCustomModalVisible] = useState(proops.modalVisible);
    // setCustomModalVisible(proops.modalVisible)
    // console.log(CustomModalVisible);
    console.log("prosps ", proops.modalVisible);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={proops.modalVisible}
            onRequestClose={() => {
                console.log('Modal has been closed.');
                proops.setModalVisible;
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ScrollView style={styles.scrollViewContent}>
                        <Text style={[styles.text, styles.bold]}>
                            Vigência a partir de 14/08/2023
                        </Text>

                        <Text style={[styles.text, styles.bold]}>
                            Introdução
                        </Text>

                        <Text style={styles.text}>
                            A metaDoctors (doravante referida como “metaDoctors”, “nós” ou “nosso”) é uma empresa constituída como uma plataforma que é o primeiro clube de experiências e serviços para médicos em formato interativo, ofertando uma série de ferramentas de comunicação, construção de conteúdo, conteúdos, oportunidades e especializada em criar relacionamentos com outras empresas do mercado de saúde ou não que buscam se relacionar com médicos e profissionais de saúde relevantes. Esta Política de Privacidade descreve como coletamos, usamos, divulgamos, armazenamos e protegemos os dados pessoais de médicos e profissionais de saúde, em conformidade com a Lei Geral de Proteção de Dados (LGPD) e outras regulamentações aplicáveis.
                        </Text>

                        <Text style={styles.text}>
                            Define-se “Opt-in”ou aceite nos Termos e serviços e Política de Privacidade como o processo pelo qual uma pessoa expressamente escolhe participar de determinada atividade ou concorda em receber comunicações adicionais. No contexto de privacidade de dados, opt-in se refere à ação de uma pessoa dar consentimento explícito para que seus dados pessoais sejam coletados, processados ou compartilhados de acordo com uma finalidade específica.
                        </Text>

                        <Text style={[styles.text, styles.bold]}>
                            Informações Coletadas
                        </Text>

                        <Text style={styles.text}>
                            Coletamos os seguintes dados pessoais de médicos e profissionais de saúde relevantes:
                        </Text>

                        <Text style={styles.text}>- E-mail</Text>
                        <Text style={styles.text}>- Senha</Text>
                        <Text style={styles.text}>- Nome do Usuário</Text>
                        <Text style={styles.text}>- Celular</Text>
                        <Text style={styles.text}>- CRM (opcional)</Text>
                        <Text style={styles.text}>- Nome Completo</Text>
                        <Text style={styles.text}>- Data de Nascimento (Dia, Mês, Ano)</Text>
                        <Text style={styles.text}>- Especialidade(s) Médica</Text>
                        <Text style={styles.text}>- CEP (opcional)</Text>
                        <Text style={styles.text}>- Endereço (opcional), incluindo Número, Bairro, Complemento, Cidade e Estado</Text>
                        <Text style={styles.text}>- Atividade de registro, login, navegação por páginas na plataforma, consumo de conteúdos, bem como informações compartilhadas em fóruns, mensagens abertas ou privadas;</Text>
                        <Text style={styles.text}>- Eventualmente podemos coletar de forma opcional endereços de perfis de redes sociais.</Text>

                        <Text style={[styles.text, styles.bold]}>Finalidades do Processamento</Text>

                        <Text style={styles.text}>- Utilizamos os dados pessoais dos médicos e profissionais de saúde para as seguintes finalidades:</Text>
                        <Text style={styles.text}>- Realizar projetos de obtenção de opt-in para empresas do mercado de saúde ou interessadas em desenvolver atividades com médicos ou profissionais de saúde relevantes;</Text>
                        <Text style={styles.text}>- Permitir que nossos clientes se comuniquem melhor e de forma mais direcionada e com maior qualidade com os médicos e profissionais de saúde relevantes;</Text>
                        <Text style={styles.text}>- Obter permissão, consentimento e “opt-in” dos profissionais de saúde para receberem comunicações científicas de caráter promocional ou informativo. Este é um passo crucial para garantir que respeitamos os direitos e a privacidade desses profissionais enquanto fornecemos serviços eficazes e personalizados para nossos clientes no setor de saúde.</Text>
                        <Text style={styles.text}>- O propósito central do metaDoctors é facilitar a vida do médico em todos os sentidos. Acreditamos que, ao simplificar e enriquecer a experiência professional e pessoal dos médicos, podemos contribuir para um futuro melhor da saúde no Brasil.</Text>

                        <Text style={[styles.text, styles.bold]}>Base Legal para o Processamento</Text>

                        <Text style={styles.text}>O processamento dos dados pessoais é realizado com base nos seguintes fundamentos legais:</Text>

                        <Text style={styles.text}>- Consentimento dos médicos e profissionais de saúde para o processamento de seus dados pessoais em troca fornecendo um serviço de alta qualidade para melhoria da sua prática clínica em geral;</Text>
                        <Text style={styles.text}>- Legítimo interesse da metaDoctors e de nossos clientes e parceiros em obter opt-in de profissionais de saúde relevantes para receberem comunicações científicas de caráter promocional ou informativo.</Text>

                        <Text style={[styles.text, styles.bold]}>Compartilhamento dos Dados Pessoais</Text>

                        <Text style={styles.text}>- Compartilhamos os dados pessoais dos médicos e profissionais de saúde com nossos clientes e parceiros do mercado de saúde ou não que busquem se relacionar com médicos e profissionais de saúde relevantes em conformidade com a legislação aplicável;</Text>
                        <Text style={styles.text}>- Médicos e profissionais de saúde relevantes têm livre acesso e informação sobre o nome, marcas e detalhes de projetos de clientes e parceiros do metaDoctors. Essas informações são necessárias para a tomada de decisão e interesse em </Text>
                        <Text style={styles.text}>- Ao prestarmos nossos serviços de encaminhamentos de dados para empresas do mercado de saúde ou não, estabelecemos contratos com nossos clientes, onde eles se comprometem a adotar medidas adequadas de transparência, governança e conformidade legal. Esses contratos abordam aspectos como a divulgação clara das práticas de processamento de dados, a implementação de medidas de segurança e privacidade, o cumprimento das leis de proteção de dados, e a confidencialidade e restrição de transferência de dados pessoais a terceiros sem consentimento. Essas cláusulas garantem que nossos clientes estejam alinhados com os princípios de privacidade e proteção de dados estabelecidos pelas leis aplicáveis.</Text>

                        <Text style={[styles.text, styles.bold]}>
                            Cookies e Tecnologias Similares
                        </Text>

                        <Text style={styles.text}>
                            Fazemos gerenciamento de cookies de usuários da plataforma
                        </Text>

                        <Text style={styles.text}>
                            Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo (computador, smartphone, tablet, etc.) quando você visita um site. Eles são usados para armazenar informações sobre sua visita, como suas preferências, para proporcionar uma experiência mais personalizada.
                        </Text>

                        <Text style={styles.text}>
                            Tipos de cookies que usamos:
                        </Text>

                        <Text style={styles.text}>- Cookies de sessão: Estes são temporários e são excluídos quando você fecha o navegador. Eles ajudam a rastrear atividades durante uma única sessão.</Text>
                        <Text style={styles.text}>- Cookies persistentes: Estes permanecem no seu dispositivo até que sejam excluídos ou expirem. Eles são usados para lembrar informações entre diferentes sessões de navegação, como suas preferências ou credenciais de login.</Text>
                        <Text style={styles.text}>- Cookies de terceiros: Estes são definidos por terceiros, como anunciantes ou analistas, e podem ser usados para rastrear o comportamento do usuário em vários sites.</Text>

                        <Text style={styles.text}>
                            Por que usamos cookies?
                        </Text>

                        <Text style={styles.text}>- Para melhorar a funcionalidade e a experiência do usuário no site.</Text>
                        <Text style={styles.text}>- Para entender como os visitantes interagem com o site, ajudando-nos a identificar áreas de melhoria.</Text>
                        <Text style={styles.text}>- Para personalizar o conteúdo e os anúncios, fornecendo ofertas mais relevantes para os usuários.</Text>
                        <Text style={styles.text}>- Para analisar o tráfego do site e entender as tendências de uso.</Text>
                        <Text style={styles.text}>- Tecnologias similares:</Text>

                        <Text style={styles.text}>
                            Além dos cookies, podemos usar outras tecnologias, como web beacons, pixels e local storage, para coletar informações sobre os usuários. Estas tecnologias têm funções semelhantes aos cookies, mas podem ser usadas de maneira diferente para rastrear e armazenar informações.
                        </Text>

                        <Text style={styles.text}>
                            Como gerenciar cookies?
                        </Text>

                        <Text style={styles.text}>
                            A maioria dos navegadores permite que os usuários vejam quais cookies estão em seus dispositivos e os excluam individualmente ou bloqueiem cookies de sites específicos ou de todos os sites. No entanto, lembre-se de que desativar cookies pode afetar a funcionalidade do site e a experiência do usuário.
                        </Text>

                        <Text style={[styles.text, styles.bold]}>
                            Retenção dos Dados Pessoais
                        </Text>

                        <Text style={styles.text}>
                            Mantemos os dados pessoais dos médicos e profissionais de saúde apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados. Após o término dessas finalidades ou quando solicitado pelos titulares dos dados, os dados serão excluídos de forma segura e irreversível.
                        </Text>

                        <Text style={[styles.text, styles.bold]}>
                            Direitos dos Titulares dos Dados
                        </Text>

                        <Text style={styles.text}>
                            Os médicos e profissionais de saúde têm os seguintes direitos em relação aos seus dados pessoais:
                        </Text>
                        <Text style={styles.text}>- Direito de acesso e retificação: Acesso aos dados pessoais e possibilidade de solicitar a correção ou atualização dessas informações.</Text>
                        <Text style={styles.text}>- Direito de exclusão: Solicitação de exclusão dos dados pessoais quando não houver mais necessidade legal ou legítima de processamento.</Text>
                        <Text style={styles.text}>- Direito de limitação de processamento: Solicitação de restrição ao processamento de dados pessoais em determinadas circunstâncias.</Text>
                        <Text style={styles.text}>- Direito à portabilidade dos dados: Recebimento dos dados pessoais em formato estruturado e possibilidade de transmiti-los a outro controlador.</Text>
                        <Text style={styles.text}>- Direito de oposição: Oposição ao processamento de dados pessoais, exceto quando houver fundamentos legais ou legítimos que prevaleçam sobre os direitos do titular.</Text>

                        <Text style={[styles.text, styles.bold]}>
                            Medidas de Segurança
                        </Text>

                        <Text style={styles.text}>
                            A metaDoctors implementou medidas técnicas e organizacionais adequadas para garantir a segurança dos dados pessoais dos médicos e profissionais de saúde, protegendo-os contra acesso não autorizado, perda ou alteração. Trabalhamos diligentemente para garantir a conformidade com a legislação vigente e as melhores práticas de segurança da informação.
                        </Text>
                        <Text style={styles.text}>
                            Utilizamos serviços de armazenamento em nuvem com alta segurança para armazenar os dados pessoais dos médicos e profissionais de saúde. Esses serviços são projetados para fornecer proteção avançada, criptografia de dados em repouso e em trânsito, gerenciamento de identidade e acesso, proteção de rede e monitoramento contínuo de segurança.
                        </Text>
                        <Text style={styles.text}>
                            Além disso, implementamos controles de acesso estritos para garantir que apenas pessoas autorizadas tenham acesso aos dados pessoais. Isso inclui a atribuição de credenciais de acesso individualizadas e a implementação de políticas de acesso baseadas em funções.
                        </Text>
                        <Text style={styles.text}>
                            Realizamos backups regulares dos dados pessoais, garantindo que as informações dos médicos e profissionais de saúde estejam protegidas contra perda ou danos. Também mantemos procedimentos de recuperação de dados em caso de incidentes, permitindo a restauração rápida e eficiente dos dados, caso necessário.
                        </Text>
                        <Text style={styles.text}>
                            Nossos funcionários são submetidos a treinamentos e estão sujeitos a obrigações de confidencialidade, garantindo a proteção adequada dos dados pessoais. Implementamos políticas e procedimentos internos para garantir a segurança dos dados e a conformidade com as regulamentações aplicáveis.
                        </Text>
                        <Text style={styles.text}>
                            Continuamos a monitorar e avaliar constantemente nossas medidas de segurança, buscando aprimorar nossas práticas e adotar tecnologias avançadas para proteção dos dados pessoais dos médicos e profissionais de saúde. Nossa prioridade é garantir a confidencialidade, integridade e disponibilidade dos dados pessoais, em conformidade com as normas de segurança e a legislação vigente.
                        </Text>

                        <Text style={[styles.text, styles.bold]}>
                            Alterações na Política de Privacidade
                        </Text>

                        <Text style={styles.text}>
                            Esta Política de Privacidade pode ser atualizada periodicamente. Quaisquer alterações significativas serão comunicadas aos médicos e profissionais de saúde por meio de aviso adequado.
                        </Text>

                        <Text style={[styles.text, styles.bold]}>
                            Termo de Aceite, Declaração de Conhecimento e Opção da Política de Privacidade check box nesta mesma página de coleta inicial de dados:
                        </Text>

                        <Text style={styles.text}>
                            Concedo o Opt-in descrito nessa política de privacidade e aceito todos os canais de comunicação.
                        </Text>

                        <Text style={styles.text}>
                            Ao selecionar esta opção, você concorda com a coleta, tratamento de seus dados e em receber comunicações promocionais ou informativas por todos os canais disponíveis, incluindo e-mail, WhatsApp, SMS e suas variações, ligações telefônicas, Redes sociais (incluindo feeds, suas variações e serviços internos de mensageria) bem como todas as modalidades de notificação de aplicativos quaisquer que estejam associados a esta plataforma. Essa opção oferece acesso a todas as formas de comunicação fornecidas pela metaDoctors.
                        </Text>

                        <Text style={[styles.text, styles.bold]}>
                            Lembramos que é importante ler esta Política de Privacidade completa estar de acordo com ela antes de fornecer seus dados pessoais à metaDoctors. O consentimento é uma escolha voluntária e você pode optar por não fornecer seu consentimento ou alterar suas preferências a qualquer momento.
                        </Text>

                        <Text style={styles.text}>
                            Agradecemos por ler e compreender nossa política de privacidade. Se tiver alguma dúvida ou precisar de esclarecimentos adicionais, entre em contato conosco pelo e-mail concierge@metadoctors.com.br
                        </Text>

                    </ScrollView>
                    <TouchableOpacity style={styles.btn} onPress={proops.setModalVisible}>
                        <Text style={styles.btnText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
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
        fontSize: 17,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    text: {
        color: '#000',
        marginTop: 10,
    },
    bold: {
        fontWeight: 'bold',
    },
});

export default CustomModal;