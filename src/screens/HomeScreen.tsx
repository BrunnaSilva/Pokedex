import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import apiCreate from '../services/api';

const HomeScreen = () => {
  useEffect(() => {
    async function handleRequest() {
      const response = await apiCreate.get('ability/?limit=15&offset=0');
    }
    handleRequest();
  }, []);

  const {isDark} = useSelector(({theme}) => theme)

  return (
    <Container>
      <Text>Home Screen</Text>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
