import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, Object, Array } from 'react-native';
import { ActionSheet, Container, Header, Content, Spinner, Icon } from 'native-base';
import ImageBrowser from 'react-native-interactive-image-gallery'
import FAB from 'react-native-fab'
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

const actionSheetOptions = [
  { text: "Tirar foto", icon: "camera" },
  { text: "Selecionar arquivos do celular", icon: "cloud-download" }
];

export default class Gallery extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Anexos da Vistoria',
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
    if (index == 0) {
      this.props.navigation.navigate('Camera');
    } else if (index == 1) {
      this.showImagePicker();
    }
  }

  showActionSheet(index) {
    console.log("clicou");
    if (this.actionSheet !== null) {
      this.actionSheet._root.showActionSheet({ options: actionSheetOptions }, (i) => this.actionClicked(i));
    }
  }



  render() {
    return (
      <Container>
        <Content style={styles.content}>
          <ImageBrowser images={imageURLs} />
        </Content>

        <FAB buttonColor="green" iconTextColor="#FFFFFF" onClickAction={this.showActionSheet.bind(this)} />
        <ActionSheet ref={(c) => { this.actionSheet = c; }} />
        <Image style={styles.uploadAvatar} />
      </Container>
    );
  }
}

const win = Dimensions.get('window');
const ratio = win.width / 541; //541 is actual image width
const images = [
  {
    uri: 'https://sm.ign.com/t/ign_br/screenshot/default/horizonzerodawn-screens-septevent-3840x2160-02-1473281071_rwup.640.jpg',
    thumbnail: 'https://sm.ign.com/t/ign_br/screenshot/default/horizonzerodawn-screens-septevent-3840x2160-02-1473281071_rwup.640.jpg',
    title: 'imagem1',
    description: 'imagem1'
  },
  {
    uri: 'https://sm.ign.com/t/ign_br/screenshot/default/horizonzerodawn-screens-septevent-3840x2160-03-1473281072_w5jd.640.jpg',
    thumbnail: 'https://sm.ign.com/t/ign_br/screenshot/default/horizonzerodawn-screens-septevent-3840x2160-03-1473281072_w5jd.640.jpg',
    title: 'imagem2',
    description: 'imagem2'
  },
  {
    uri: 'https://sm.ign.com/t/ign_br/screenshot/default/horizonzerodawn-screens-septevent-3840x2160-04-1473281069_8129.640.jpg',
    thumbnail: 'https://sm.ign.com/t/ign_br/screenshot/default/horizonzerodawn-screens-septevent-3840x2160-04-1473281069_8129.640.jpg',
    title: 'imagem3',
    description: 'imagem3'
  },
  {
    uri: 'https://sm.ign.com/t/ign_br/screenshot/default/horizonzerodawn-screens-septevent-3840x2160-05-1473281073_4xk5.640.jpg',
    thumbnail: 'https://sm.ign.com/t/ign_br/screenshot/default/horizonzerodawn-screens-septevent-3840x2160-05-1473281073_4xk5.640.jpg',
    title: 'imagem4',
    description: 'imagem4'
  }
]

const imageURLs: Array<Object> = images.map(
  (img: Object, index: number) => ({
    URI: img.uri,
    thumbnail: img.thumbnail,
    id: String(index),
    title: img.title,
    description: img.description
  })
)

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FFF'
  }
});


