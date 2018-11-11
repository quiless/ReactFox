
import React, { Component, DOM } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Spinner, Icon, Toast, ActionSheet, } from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat'
import ImagePicker from 'react-native-image-picker';
import { RNCamera } from 'react-native-camera';
import { createStackNavigator } from 'react-navigation';
import Modal from "react-native-modal";


export class Camera extends Component {

  static navigationOptions = {
    header: null
  }

  takePicture = async function () {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', }}>
          <Icon name="camera" onPress={this.takePicture.bind(this)} style={styles.iconTakePicture} />
        </View>
      </View>
    )
  }
}

export default Camera;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  iconTakePicture: {
    flex: 0,
    color: '#FFF',
    fontSize: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});