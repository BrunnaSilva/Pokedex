import React from 'react';
import { useDispatch } from 'react-redux';
import { ButtonContainer, Container, Flag, Logo, LogoContainer, LogoName } from './Banner.style';
import images from '../styles/images';
import SwitchButton from './Buttons/SwitchButton';
import { toggleTheme } from '../store/reducers/themeReducer';

const Banner = ({ isDark }: boolean) => {
  const dispatch = useDispatch()
  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <Container>
      <Flag />
      <ButtonContainer>
        <LogoContainer>
          <Logo source={images.logo} />
          <LogoName>ioasys pokédex</LogoName>
        </LogoContainer>
        <SwitchButton isVisible={isDark} onPress={handleToggleTheme}/>
      </ButtonContainer>
    </Container>
  );
};

export default Banner;
