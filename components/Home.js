import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Content, Container } from 'native-base';
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Content padder contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 27, color: 'black', fontWeight: 'bold'}}> Trabajo lenguaje de marcas </Text>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}> Manuel Martínez Córcoles </Text>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}> José Luis Fernandez Mateo </Text>
            <Image style={{width: 180, height: 170}} source={{uri:'https://cdn.rawgit.com/lucasbento/react-native-actions/master/common/media/logo.png'}} />
        </Content>
      </Container>
    )
  }
}
