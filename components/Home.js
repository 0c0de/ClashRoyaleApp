import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Content, Container } from 'native-base';
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Content padder>
            <Text> Home Screen </Text>
        </Content>
      </Container>
    )
  }
}