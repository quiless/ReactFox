import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, Object, Array } from 'react-native';
import { Container, Header, Content, Spinner, Icon } from 'native-base';
import ImageBrowser from 'react-native-interactive-image-gallery'
import FAB from 'react-native-fab'


export default class Gallery extends Component {
  render() {
    return (
      <Container>
        <Content style={styles.content}>
          <ImageBrowser images={imageURLs} />
        </Content>
        
        <FAB buttonColor="green" iconTextColor="#FFFFFF" />
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


