import React from 'react';
import * as S from './styles';

export default function DateTableSection() {
  return (
    <S.Container>
      <S.Heading>Heading</S.Heading>
      <S.CustomTable>
        <tr>
          <S.CustomDataDate>yyyymmdd</S.CustomDataDate>
          <S.CustomDataContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </S.CustomDataContent>
        </tr>
        <tr>
          <S.CustomDataDate>yyyymmdd</S.CustomDataDate>
          <S.CustomDataContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </S.CustomDataContent>
        </tr>
        <tr>
          <S.CustomDataDate>yyyymmdd</S.CustomDataDate>
          <S.CustomDataContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </S.CustomDataContent>
        </tr>
      </S.CustomTable>
    </S.Container>
  );
}
