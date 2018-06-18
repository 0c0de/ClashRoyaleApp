import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native';
import { Content, Container, Title, Col, Image, Thumbnail, Text, Body, Right, Left, List, ListItem } from 'native-base';
import Prompt from 'react-native-prompt';

export default class Account extends Component {
  
  constructor(){
    super();
    this.state = {
      opened: true,
      name: '',
      clan: '',
      clanImage: '',
      deck1: '',
      deck2: '',
      deck3: '',
      deck4: '',
      deck5: '',
      deck6: '',
      deck7: '',
      deck8: '',
    }
  }

  //When account component gets active (only executed one time)
  componentDidMount(){
    //this.getUserInfo(this.searchData('account'));
  }
  
  render() {
    
    return (
      <Container>
        <Prompt title="Introduce tu tag de Clash Royale" defaultValue="8P2VRQRR" placeholder="Ejemplo 8P2VRQRR" visible={this.state.opened} onCancel={() => this.onCancelPrompt(e)} onSubmit={(e) => this.onSubmitPrompt(e)} />
        <Content>
          <List>
            <ListItem style={{borderBottomWidth: 0}}>
              <Thumbnail square size={80} source={{uri: this.state.clanImage}}/>
              <Body>
                <Text style={{fontSize: 27, fontWeight: 'bold'}}>{this.state.name}</Text>
                <Text style={{fontSize: 23, fontWeight: 'bold', color: '#9E9E9E'}}>Clan: {this.state.clan}</Text>
              </Body>
            </ListItem>
            <ListItem style={{borderBottomWidth: 0, padding: 30}} >
              <Thumbnail resizeMode="contain" square large source={{uri: this.state.deck1}} />
              <Thumbnail resizeMode="contain" square large source={{uri: this.state.deck2}} />
              <Thumbnail resizeMode="contain" square large source={{uri: this.state.deck3}} />
              <Thumbnail resizeMode="contain" square large source={{uri: this.state.deck4}} />
            </ListItem>
            <ListItem style={{borderBottomWidth: 0, padding: 30}}>
              <Thumbnail resizeMode="contain" square large source={{uri: this.state.deck5}} />
              <Thumbnail resizeMode="contain" square large source={{uri: this.state.deck6}} />
              <Thumbnail resizeMode="contain" square large source={{uri: this.state.deck7}} />
              <Thumbnail resizeMode="contain" square large source={{uri: this.state.deck8}} />
            </ListItem>
          </List>
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
      this.setState({
        clanImage: response.clan.badge.image, 
        name: response.name, 
        clan: response.clan.name,
        deck1: response.currentDeck[0].icon,
        deck2: response.currentDeck[1].icon,
        deck3: response.currentDeck[2].icon,
        deck4: response.currentDeck[3].icon,
        deck5: response.currentDeck[4].icon,
        deck6: response.currentDeck[5].icon,
        deck7: response.currentDeck[6].icon,
        deck8: response.currentDeck[7].icon
      });
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