import React, { Component } from 'react'
import { Text, View, AsyncStorage } from 'react-native';
import { Content, Container } from 'native-base';
import Prompt from 'react-native-prompt';

export default class Account extends Component {
  
  constructor(){
    super();
    this.state = {
      opened: true,
    }
  }

  //When account component gets active (only executed one time)
  componentDidMount(){
    //this.getUserInfo(this.searchData('account'));
  }
  
  render() {
    return (
      <Container>
        <Prompt title="Introduce tu tag de Clash Royale" placeholder="Ejemplo 8P2VRQRR" visible={this.state.opened} onCancel={() => this.onCancelPrompt(e)} onSubmit={(e) => this.onSubmitPrompt(e)} />
        <Content padder>
          <Text></Text>
        </Content>
      </Container>
    )
  }

  //On cancel just close dialog
  onCancelPrompt(e){
    this.setState({opened: false});
  }

  //On submit save user and close dialog
  onSubmitPrompt(e){
    this.setState({opened: false});
    this.getUserInfo(e);
  }

  //Getting user info with API
  getUserInfo(tag){
    var ajaxInfo = {
      method: 'GET',
      type: 'JSON',
      headers: {
        "auth": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTI2LCJpZGVuIjoiMjYyMzQ4ODYxODMyNDI5NTc5IiwibWQiOnt9LCJ0cyI6MTUyOTMyMzkwMjYwNn0.FL99BeVaykwC5OWsFRDDTJGjKW9yJ4g_QKWtpTCJpa4',
      }
    };
    fetch('https://api.royaleapi.com/players/'+tag, ajaxInfo).then((promise) => {
      return promise.json();
    }).then((response) => {
      alert(JSON.stringify(response));
    }).catch((err) => {
      alert(err);
    });
  }

  async saveUser(key, value){
    try {
      //Saving our item in a persistent way
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      //Another Error
      return;
    }
  }

  async searchData(key){
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null){
        // Power of data
        return value
      }
    } catch (error) {
      // Error retrieving data
      return;
    }
  }
}