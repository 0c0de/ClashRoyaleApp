import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Content, Container } from 'native-base';
export default class Deck extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Text> Deck Screen </Text>
        </Content>
      </Container>
    )
  }
}