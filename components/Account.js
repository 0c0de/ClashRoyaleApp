import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Content, Container } from 'native-base';
<<<<<<< HEAD
import Prompt from 'react-native-prompt';

export default class Account extends Component {
  
  constructor(){
    super();
    this.state = {
      opened: true,
    }
  }

  componentDidMount(){
    
    //this.getUserInfo();
  }
  
  render() {
    return (
      <Container>
        <Prompt title="Introduce tu tag de Clash Royale" placeholder="Ejemplo 8P2VRQRR" visible={this.state.opened} onCancel={this.onCancelPrompt()} onSubmit={this.onSubmitPrompt()} />
=======
export default class Account extends Component {
  render() {
    return (
      <Container>
>>>>>>> e2c9b766df729e844bcb709ee20bfe87f1ff8b53
        <Content padder>
          <Text> Account Screen </Text>
        </Content>
      </Container>
    )
  }
<<<<<<< HEAD

  onCancelPrompt(){
    this.setState({opened: false});
  }

  onSubmitPrompt(){
    this.setState({opened: false});
  }

  getUserInfo(){
    var ajaxInfo = {
      method: 'GET',
      type: 'JSON',
      headers: {
        "auth": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTI2LCJpZGVuIjoiMjYyMzQ4ODYxODMyNDI5NTc5IiwibWQiOnt9LCJ0cyI6MTUyOTMyMzkwMjYwNn0.FL99BeVaykwC5OWsFRDDTJGjKW9yJ4g_QKWtpTCJpa4',
      }
    };
    fetch('https://api.royaleapi.com/players/8P2VRQRR', ajaxInfo).then((promise) => {
      return promise.json();
    }).then((response) => {
      alert(JSON.stringify(response));
    }).catch((err) => {
      alert(err);
    });
  }
=======
>>>>>>> e2c9b766df729e844bcb709ee20bfe87f1ff8b53
}