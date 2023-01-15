import React from 'react';
import * as S from './styles';
import Logo from '../../assets/Logo/Logo.png';

export default function Header() {
  return (
    <S.Container>
      <S.Logo src={Logo} alt="Fujitsu" />
    </S.Container>
  );
}
