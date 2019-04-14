import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Babar Bahadur</Title>
          </Body>
          <Right />
        </Header>


        <Content>
          
        


          <Text>
            Objectives:
            Obtain a challenging leadership position applying creative problem solving and lean management skills with a growing company to achieve optimum utilization of its resources and maximum profits
          </Text>

          <Text>
            Experience:
            Fresh Graduate
          </Text>




          
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>babar.bahadur@hotmail.com</Text>
              <Text>+92 304 2344634</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
