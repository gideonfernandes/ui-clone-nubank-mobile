import React from 'react';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Main = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />
        
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 297.612,68</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Trânsferência de R$ 20,00 recebida de Diego Schell Fernandes
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
};

export default Main;
