import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, AsyncStorage, StatusBar } from 'react-native';
import { Row, Container, Content, Header, Button, Text, Icon, Card, CardItem, Thumbnail, Body, Left, Right, Title, View, ActionSheet } from 'native-base';
import { StackApp } from '../home/index'


var actionSheetOptions = [
    { text: "Anexos da vistoria", icon: "attach" },
    { text: "Baixa de Documentos", icon: "cloud-download" }
];


export default class Home extends Component {


    constructor(props) {
        super(props);
        this.actionSheet = null;
        this.showActionSheet = this.showActionSheet.bind(this);
        this.actionClicked = this.actionClicked.bind(this);
    }


    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" />
        ),
        drawerLabel: 'Página inicial'
    }

    actionClicked(index) {
        if (index == 0) {
            this.props.navigation.navigate('Gallery');
        } else if (index == 1) {
            this.props.navigation.navigate('PendingDocuments');
        }
    }

    showActionSheet() {
        if (this.actionSheet !== null) {
            this.actionSheet._root.showActionSheet({ options: actionSheetOptions }, (i) => this.actionClicked(i));
        }
    }


    render() {
        return (
            <Container>
                <Header style={styles.headerStyle}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.openDrawer()}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title> Grupo Fox </Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={styles.content}>
                    <Card style={styles.shadowCard}>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>100001/2018</Text>
                                    <Text note>AXA Seguradora</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Text note style={{ fontSize: 12 }}>16/10/2018 às 10:00am</Text>
                            </Right>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../../../assets/imgs/maps.jpg')} style={{ height: 150, width: null, flex: 1 }} />
                        </CardItem>
                        <View>
                            <Body>
                                <Text style={styles.cardAddress}> Rua Adolfo Bastos, 598 Santo André/SP </Text>
                            </Body>
                        </View>
                        <CardItem>
                            <Body>
                                <Text note style={styles.cardInsured}> Segurado: Kelvin Cleto Gonçalves </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text note style={styles.cardDescription}> Conforme relatado pelo segurado, a residência entrou em chamas... </Text>
                            </Body>
                            <Right>
                                <View>
                                    <Button iconLeft light onPress={this.showActionSheet.bind(this)} style={styles.buttonAction}>
                                        <Icon name='cog' style={{color : "#FFF"}} />
                                        <Text style={{color : "#FFF"}}>Ações</Text>
                                    </Button>
                                    <ActionSheet ref={(c) => { this.actionSheet = c; }} />
                                </View >
                            </Right>
                        </CardItem>
                    </Card>
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
    content: {
        backgroundColor: '#FFF'
    },
    shadowCard: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#000',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    headerStyle: {
        backgroundColor: '#003366'
    },
    cardAddress: {
        fontSize: 12,
        fontWeight: "bold",
        marginTop: -3,
        flex: 1
    },
    cardInsured: {
        marginTop: -10,
        fontSize: 12
    },
    cardDescription: {
        marginTop: -15,
        fontSize: 12
    },
    buttonAction: {
        backgroundColor :  '#003366',
   
    }
});


