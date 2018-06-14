import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Content, Container } from 'native-base';
export default class Brawl extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Text> Brawl Screen </Text>
        </Content>
      </Container>
    )
  }
}