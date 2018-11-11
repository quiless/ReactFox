import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, AsyncStorage } from 'react-native';
import { ActionSheet, List, ListItem, View, Container, Content, Form, Input, Item, Button, Text, Icon, Row, Col, Grid, Right, Header, Left, Body, Title } from 'native-base';
import ImagePicker from 'react-native-image-picker';


const options = {
    title: 'Selecionar documento',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
    customButtons: [{ name: 'fb', title: 'Selecionar do Facebook' }],
    chooseFromLibraryButtonTitle: 'Selecionar da Galeria',
    takePhotoButtonTitle: null,
    permissionDenied: {
        title: 'Acesso negado',
        text: 'Precisamos de permissão para acessar as imagens da galeria.'
    },
    mediaType: 'photo'
};




var actionSheetOptions = [
    { text: "Tirar foto  do documento", icon: "camera" },
    { text: "Selecionar arquivos do celular", icon: "cloud-download" }
];

export default class PendingDocuments extends Component {



    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Documentos pendentes',
        headerStyle: {
            backgroundColor: '#003366',
        },
        headerTintColor: '#fff',
        headerLeft: (
            <Icon name="arrow-round-back" style={{ color: '#FFF', marginLeft: 5 }} onPress={() => navigation.navigate('Home')} />
        )
    });

    constructor(props) {
        super(props);
        this.actionSheet = null;
        this.showActionSheet = this.showActionSheet.bind(this);
        this.actionClicked = this.actionClicked.bind(this);
        this.showImagePicker = this.showImagePicker.bind(this);

    }

    componentWillMount() {
    }

    showImagePicker() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

              
            }
        });
    }


    actionClicked(index) {
        console.log(this.props);
        if (index == 0) {
            this.props.navigation.navigate('Camera');
        } else if (index == 1) {
            this.showImagePicker();
        }
    }

    showActionSheet(index) {

        if (this.actionSheet !== null && index > 0) {
            this.actionSheet._root.showActionSheet({ options: actionSheetOptions }, (i) => this.actionClicked(i));
        }
    }


    render() {
        var items = [
            { "Document": "10001/2018", "Observation": "AXA Seguradora -Kelvin Cleto Gonçalves ", "Lenght": "4 documentos pendentes" },
            { "Document": "- Cópia do RG/CPF", "Observation": "Documentação enviada, porém ilegível." },
            { "Document": "- Comprovante de residência", "Observation": "" },
            { "Document": "- Laudo toxicológico", "Observation": "" },
            { "Document": "- Cópia da certidão de casamento", "Observation": "" }
        ];
        return (
            <Container>
                <Content style={styles.content}>
                    {/* <Item>
                        <Body>
                            <Text>10001/2018</Text>
                            <Text note>AXA Seguradora</Text>
                            <Text note>Kelvin Cleto Gonçalves </Text>
                        </Body>
                        <View>
                            <Text note style={styles.lenghtDocuments}>4 Documentos pendentes </Text>
                        </View>
                    </Item> */}
                    <List dataArray={items}
                        renderRow={(item, position, index) =>
                            <ListItem style={{ backgroundColor: index % 2 == 0 ? '#ececf9' : '#FFF', marginLeft: -1 }} onPress={this.showActionSheet.bind(this, index)}>
                                <View style={{ marginLeft: 15 }} >
                                    <Text>{item.Document}</Text>
                                    <Text note>{item.Observation}</Text>
                                    <Text note>{item.Lenght}</Text>
                                </View>
                            </ListItem>
                        }>
                    </List>
                    <ActionSheet ref={(c) => { this.actionSheet = c; }} />
                    <Image  style={styles.uploadAvatar} />
                </Content>
            </Container >
        );
    }


}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#003366'
    },
    styleHeaderIcon: {
        color: '#FFF'
    },
    lenghtDocuments: {
        fontSize: 10,
        color: '#000'
    }
});


