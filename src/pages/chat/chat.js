
import React, { Component, DOM } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Spinner, Icon, Toast, ActionSheet, } from 'native-base';
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



const App = createStackNavigator({
  Camera: { screen: Camera }
});



export default class Chat extends Component {

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

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  actionClicked(index) {
    console.log("CHAMOUUU");
    console.log(this.props);
    if (index == 0) {
      //this.props.navigation.navigate('Camera');
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
    marginLeft: 10,
    marginBottom: 10
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
});


const options = {
  title: 'Selecione o anexo...',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};



