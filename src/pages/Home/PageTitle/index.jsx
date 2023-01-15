import React from 'react';
import * as S from './styles';

export default function TopComponent() {
  return (
    <S.Container>
      <S.LeftContainer>
        <S.LeftContainerContent>
          <S.LeftContainerTitle>Page Title</S.LeftContainerTitle>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </div>
        </S.LeftContainerContent>
      </S.LeftContainer>
      <S.RightContainer />
    </S.Container>
  );
}
