/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
<<<<<<< HEAD
import { Platform, StyleSheet, View, StatusBar } from 'react-native';
=======
import {
  Platform,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
>>>>>>> e2c9b766df729e844bcb709ee20bfe87f1ff8b53
import { Header, Left, Right, Body, Container, Content, Footer, FooterTab, Button, Text, Title, Tabs, Tab, TabHeading } from 'native-base'
import Home from './components/Home';
import Deck from './components/Deck';
import Brawl from './components/Brawl';
import Account from './components/Account';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      home:true,
      deck: false,
      brawl: false,
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
          <Tab heading={<TabHeading><Icon size={25} color="white" name="cards"/><Text>Cartas</Text></TabHeading>}>
            <Deck/>
          </Tab>
          <Tab heading={<TabHeading><Icon size={25} color="white" name="sword-cross"/><Text>Arenas</Text></TabHeading>}>
            <Brawl/>
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
