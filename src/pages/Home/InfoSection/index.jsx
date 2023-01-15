import React from 'react';
import * as S from './styles';
import ImageOne from '../../../assets/Background/001.jpg';
import ImageTwo from '../../../assets/Background/002.jpg';

export default function InfoSection() {
  return (
    <S.Container>
      <S.ContentOne>
        <S.Heading>Heading</S.Heading>
        <S.Subtitle>Heading</S.Subtitle>
        <S.TextContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </S.TextContent>
      </S.ContentOne>
      <S.ContentTwo>
        <S.ContentTwoImage src={ImageOne} />
        <S.ContentTwoText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </S.ContentTwoText>
      </S.ContentTwo>
      <S.ContentTwo className="second">
        <S.ContentTwoImage src={ImageTwo} />
        <S.ContentTwoText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </S.ContentTwoText>
      </S.ContentTwo>
      <S.ContentThree>
        <S.ContentTreeContent>
          <S.ContentTreeImage src={ImageOne} />
          <S.ContentTreeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </S.ContentTreeText>
        </S.ContentTreeContent>
        <S.ContentTreeContent>
          <S.ContentTreeImage src={ImageOne} />
          <S.ContentTreeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </S.ContentTreeText>
        </S.ContentTreeContent>
        <S.ContentTreeContent>
          <S.ContentTreeImage src={ImageOne} />
          <S.ContentTreeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </S.ContentTreeText>
        </S.ContentTreeContent>
      </S.ContentThree>
    </S.Container>
  );
}
