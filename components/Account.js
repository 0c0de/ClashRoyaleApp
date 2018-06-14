import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Content, Container } from 'native-base';
export default class Account extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Text> Account Screen </Text>
        </Content>
      </Container>
    )
  }
}