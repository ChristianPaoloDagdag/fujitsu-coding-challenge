import React from 'react';
import * as S from './styles';

export default function VideoSection() {
  const opts = {
    width: '100%',
    height: '100%',
  };

  return (
    <S.Container>
      <S.Heading>Heading</S.Heading>
      <S.TextContainer>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        {'\n'}
        {'\n'}
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </S.TextContainer>
      <S.Video videoId="EWIr5Hqj2ys" opts={opts} />
    </S.Container>
  );
}
