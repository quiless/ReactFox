import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { Container, Content, Form, Input, Item, Button, Text, Icon, Row, Col, Grid, View } from 'native-base';
import  { Hr } from 'react-native-hr-component';


export default class Login extends Component {
    render() {
        return (
            <Container>
                <Content style={styles.content}>
                    <Image source={require('../../../assets/imgs/logo_fox_reguladora2.png')} style={styles.image} />
                    <Form>
                        <Item style={styles.formPadding}>
                            <Input placeholder='Nome de usuário' />
                        </Item>
                        <Item style={styles.formPadding}>
                            <Input placeholder='Senha' />
                        </Item>
                        <Button block style={styles.spacePassword}>
                            <Text style={styles.textCenter}>Acessar o Sistema</Text>
                        </Button>
                        <Hr textPadding={20} lineColor="#eee" width={1} text="OU" textStyles={styles.textLine} />
                        <Button block>
                            <Text style={styles.textCenter}>Recuperar senha</Text>
                        </Button>
                        <View style={styles.rowIcons}>
                            <Icon name="logo-facebook" style={styles.facebookIcon} />
                            <Icon name="logo-linkedin" style={styles.linkedinIcon} />
                        </View>
                        <Text style={styles.copyright}>© 2018 - Developed General Claims </Text>
                        <Text style={styles.website}>http://www.gclaims.com.br</Text>
                    </Form>
                </Content>
            </Container>
        );
    }
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
        marginTop: 20
    },
    spacePassword: {
        marginTop: 40
    }
});


