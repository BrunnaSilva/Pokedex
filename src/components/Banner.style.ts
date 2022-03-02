import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
`

export const Flag = styled.View`
  width: 100%;
  height: 17px;
  background-color: ${({ theme }) => theme.colors.secondary};
`
export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(56)}px;
  padding: 0 48px;
`
export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Logo = styled.Image`
  width: ${RFValue(27)}px;
  height: ${RFValue(21)}px;
`
export const LogoName = styled.Text`
  padding-left: 12px;
  color: ${({ theme }) => theme.colors.secondary};
  font-style: normal;
  font-weight: bold;
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(32)}px;
  font-family: 'Poppins-Bold';
`
