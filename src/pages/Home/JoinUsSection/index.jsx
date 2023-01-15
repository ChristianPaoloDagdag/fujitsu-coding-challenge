import React from 'react';
import * as S from './styles';
import Contact from '../../../assets/Background/bg_contact.jpg';

export default function JoinUsSection() {
  return (
    <S.Container>
      <S.TextContainer>
        <S.TextTitle>Join us</S.TextTitle>
        <S.TextContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </S.TextContent>
        <S.ButtonContainer>
          <S.Button>Contact</S.Button>
        </S.ButtonContainer>
      </S.TextContainer>
      <S.Image src={Contact} />
    </S.Container>
  );
}
