
import React, { Component, DOM } from 'react';
import { Platform, StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Button, Text, Icon, Card, CardItem, Thumbnail, Body, Left, Right, Title, ActionSheet } from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat'
import ImagePicker from 'react-native-image-picker';
import { RNCamera } from 'react-native-camera';
import { createStackNavigator } from 'react-navigation';
import { Camera } from '../../components/camera'
import Modal from "react-native-modal";

state = {
  messages: [],
  isModalVisible: false
}

_toggleModal = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible });

var actionSheetOptions = [{ text: "Tirar foto", icon: "camera" },
{ text: "Selecionar arquivos do celular", icon: "document" },];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;


const optionsImagePicker = {
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



export default class Chat extends Component {

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="chatboxes" />
    ),
    drawerLabel: 'Chat'
  }


  constructor(props) {
    super(props);
    this.actionSheet = null;
    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.showActionSheet = this.showActionSheet.bind(this);
    this.actionClicked = this.actionClicked.bind(this);
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'O chat está funcionando?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  showImagePicker() {
    ImagePicker.showImagePicker(optionsImagePicker, (response) => {
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

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  actionClicked(index) {

    console.log(this.props);
    if (index == 0) {
      this.props.navigation.navigate('Camera');
    } else if (index == 1) {
      this.showImagePicker();
    }
  }

  showActionSheet() {
    console.log("chamousheet");
    if (this.actionSheet !== null) {
      this.actionSheet._root.showActionSheet({ options: actionSheetOptions }, (i) => this.actionClicked(i));
    }
  }

  renderCustomActions() {
    return (
      <View>
        <Icon name="attach" style={styles.attachIcon} onPress={this.showActionSheet.bind(this)} />
        <ActionSheet ref={(c) => { this.actionSheet = c; }} />

      </View >
    );
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
            <Title> Chat </Title>
          </Body>
          <Right />
        </Header>
        <GiftedChat
          placeholder="Escrever mensagem..."
          locale="pt-br"
          renderActions={this.renderCustomActions}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        <Image style={styles.imagePicker} />
      </Container>
    )
  }

  takePicture = async function () {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
    }
  }
}


const win = Dimensions.get('window');
const ratio = win.width / 541; //541 is actual image width

const styles = StyleSheet.create({
  wait: {
    marginTop: 10,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
  },
  content: {
    backgroundColor: '#FFF'
  },
  attachIcon: {
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 30
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  headerStyle: {
    backgroundColor: '#003366'
  },
  imagePicker: {
    backgroundColor: '#003366'
  }
});


const options = {
  title: 'Selecione o anexo...',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};



