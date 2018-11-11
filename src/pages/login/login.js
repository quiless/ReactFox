import React, { Component } from 'react';
import { Linking, StyleSheet, Image, Dimensions, AsyncStorage } from 'react-native';
import { Container, Content, Form, Input, Item, Button, Text, Icon, Row, Col, Grid, View } from 'native-base';
import Hr from "react-native-hr-component";


export default class Login extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.openFacebook = this.openFacebook.bind(this);
        this.openLinkedin = this.openLinkedin.bind(this);
    }

    openFacebook() {
        Linking.openURL('https://www.facebook.com/foxreguladora/')
    }

    openLinkedin() {
        Linking.openURL('https://www.linkedin.com/in/fox-regula%C3%A7%C3%A3o-auditoria-9560b730/')
    }


    render() {
        return (
            <Container>
                <Content style={styles.content}>
                    <Image source={require('../../../assets/imgs/logo_fox_reguladora2.png')} style={styles.image} />
                    <Form>
                        <Item style={styles.formPadding}>
                            <Input style={styles.input} placeholder='Nome de usuário' />
                        </Item>
                        <Item style={styles.formPadding}>
                            <Input style={styles.input} placeholder='Senha' />
                        </Item>
                        <Button block style={styles.spacePassword} onPress={this.signIn}>
                            <Text style={styles.textCenter}>Acessar o Sistema</Text>
                        </Button>
                        <Item style={styles.input}>
                            <Hr textPadding={20} lineColor="#eee" width={1} text="OU" textStyles={styles.textLine} />
                        </Item>
                        <Button block style={styles.recoverPassword}>
                            <Text style={styles.textCenter}>Recuperar senha</Text>
                        </Button>
                        <View style={styles.rowIcons}>
                            <Icon name="logo-facebook" style={styles.facebookIcon} onPress={this.openFacebook.bind(this)} />
                            <Icon name="logo-linkedin" style={styles.linkedinIcon} onPress={this.openLinkedin.bind(this)} />
                        </View>
                        <Text style={styles.copyright}>© 2018 - Developed General Claims </Text>
                        <Text style={styles.website}>http://www.gclaims.com.br</Text>
                    </Form>
                </Content>
            </Container>
        );
    }

    signIn = async () => {
        await AsyncStorage.setItem('Token', 'abc');
        this.props.navigation.navigate('App');
    };
}

const win = Dimensions.get('window');
const ratio = win.width / 541; //541 is actual image width

const styles = StyleSheet.create({
    copyright: {
        marginTop: 130,
        color: '#a6a6a6',
        fontSize: 12,
        textAlign: 'center',
        justifyContent: 'center',
    },
    website: {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#a6a6a6',
        fontSize: 12,
    },
    facebookIcon: {
        fontSize: 50,
        color: '#3b5998'
    },
    linkedinIcon: {
        fontSize: 50,
        color: '#0077B5',
        marginLeft: 10
    },
    rowIcons: {
        flexDirection: "row",
        flex: 1,
        marginLeft: 135,
        marginTop: 70
    },
    textCenter: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFF'
    },
    content: {
        backgroundColor: '#FFF'
    },
    textLine: {
        marginTop: 5,
        marginBottom: 5
    },
    image: {
        marginTop: 20,
        marginLeft: 98,
        justifyContent: 'center',
        alignItems: 'center',
        height: 120 * ratio,
        width: 240 * ratio
    },
    formPadding: {
        marginTop: 20,
        marginRight: 15
    },
    spacePassword: {
        marginTop: 40,
        marginLeft: 15,
        marginRight: 15
    },
    recoverPassword: {
        marginLeft: 15,
        marginRight: 15
    },
    input: {
        marginRight: 15
    }
});


