import React, { useEffect } from 'react'
import styled from 'styled-components/native'
import { useSelector } from 'react-redux'
import Banner from '../components/Banner'
import apiCreate from '../services/api'

interface TypeProps{
  isDark: boolean
}

const HomeScreen = () => {
  useEffect(() => {
    async function handleRequest() {
      const response = await apiCreate.get('ability/?limit=15&offset=0')
    }
    handleRequest()
  }, [])

  const { isDark } = useSelector(({ themeSlice }) => themeSlice)

  return (
    <Container isDark={isDark}>
      <Banner isDark={isDark} />
    </Container>
  )
}

export default HomeScreen

const Container = styled.View<TypeProps>`
  flex: 1;
  background-color: ${({ theme, isDark }) => (isDark ? theme.colors.background_dark : theme.colors.background)};
`