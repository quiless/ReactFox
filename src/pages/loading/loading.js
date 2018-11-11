import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, AsyncStorage, ActivityIndicator } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Container, Header, Content, Spinner } from 'native-base';
import { Login } from '../login/login'



const navigateAction = NavigationActions.navigate({
  routeName: 'Chat',

  params: {},

  action: NavigationActions.navigate({ routeName: 'Chat' }),
});



export default class Loading extends Component {


  static navigationOptions = {
    header: {
      
    }
  }




  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    setTimeout(() => {
      this.getAuthInfo();
    }, 4000);
  }

  getAuthInfo = async () => {
    const userToken = await AsyncStorage.getItem('Token');
    console.log(userToken);
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {

    return (
      <Container>
        <Content style={styles.content}>
          <Image source={require('../../../assets/imgs/logo_fox_reguladora2.png')} style={styles.image} />
          <Spinner color='#FFF' />
          <Text style={styles.wait}>Aguarde, estamos carregando...</Text>
        </Content>
      </Container>
    );
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
    backgroundColor: '#003366'
  },
  image: {
    marginTop: 150,
    marginLeft: 18,
    justifyContent: 'center',
    alignItems: 'center',
    height: 240 * ratio,
    width: 480 * ratio
  }
});


