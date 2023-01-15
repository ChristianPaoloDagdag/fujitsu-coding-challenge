import React from 'react';
import * as S from './styles';
import ImageTen from '../../../assets/Background/010.jpg';
import ImageEleven from '../../../assets/Background/011.jpg';

export default function MoreInfoSection() {
  return (
    <S.Container>
      <S.Heading>Heading</S.Heading>
      <S.Content>
        <S.ContentImage src={ImageTen} />
        <S.ContentText>
          <S.ContentTitle>Heading</S.ContentTitle>
          <S.ContentSubtext>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </S.ContentSubtext>
          <S.ContentMore>
            {'> '}
            More
          </S.ContentMore>
        </S.ContentText>
      </S.Content>
      <S.Content className="contentTwo">
        <S.ContentImage src={ImageEleven} />
        <S.ContentText>
          <S.ContentTitle>Heading</S.ContentTitle>
          <S.ContentSubtext>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </S.ContentSubtext>
          <S.ContentMore>
            {'> '}
            More
          </S.ContentMore>
        </S.ContentText>
      </S.Content>
    </S.Container>
  );
}
