import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Content, Container } from 'native-base';
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Content padder contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 27, color: 'black', fontWeight: 'bold'}}> Trabajo lenguaje de marcas </Text>
            <Image style={{width: 300, height: 100}} resizeMode="stretch" source={{uri:'https://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png%27%7D%7D'}} />
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}> Manuel Martínez Córcoles </Text>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}> José Luis Fernandez Mateo </Text>
        </Content>
      </Container>
    )
  }
}