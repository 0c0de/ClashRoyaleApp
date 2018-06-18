/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Platform, StyleSheet, View, StatusBar } from 'react-native';
import { Header, Left, Right, Body, Container, Content, Footer, FooterTab, Button, Text, Title, Tabs, Tab, TabHeading } from 'native-base'
import Home from './components/Home';
import Account from './components/Account';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      home:true,
      account: false,
      canUpdate: false
    };
  }

  render() {
    return (
      <Container style={{backgroundColor: '#ffffff'}}>
        <StatusBar animated barStyle="dark-content" backgroundColor="#ffffff"/>
        <Header>
          <Left/>
          <Body>
            <Title>Clash Royale Toolkit</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="heart" size={25} color="red"/>
            </Button>
          </Right>
        </Header>
        <Tabs>
          <Tab heading={<TabHeading><Icon size={25} color="white" name="home"/><Text>Inicio</Text></TabHeading>}>
            <Home/>
          </Tab>
          <Tab heading={<TabHeading><Icon size={25} color="white" name="account"/><Text>Cuenta</Text></TabHeading>}>
            <Account/>
          </Tab>
        </Tabs>
        <Content/>
      </Container>
    );
  }

}
