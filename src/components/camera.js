import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, Object, Array } from 'react-native';
import { Container, Header, Content, Spinner, Icon } from 'native-base';
import ImageBrowser from 'react-native-interactive-image-gallery'
import FAB from 'react-native-fab'


export class Camera extends Component {
    render() {
      return (
        <View>
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
            <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style={styles.capture}
            >
              <Text style={{ fontSize: 14 }}> SNAP </Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }

  export default Camera; 