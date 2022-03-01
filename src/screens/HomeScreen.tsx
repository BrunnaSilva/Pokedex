import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import { useSelector } from 'react-redux';
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
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
