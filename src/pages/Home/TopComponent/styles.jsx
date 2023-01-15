import styled from 'styled-components';
import kv from '../../../assets/Background/kv.jpg';
import gradient from '../../../assets/Background/bg_gradient.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 500px;
  width: 100%;

  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

export const LeftContainer = styled.div`
  align-items: center;
  background-image: url(${gradient});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  display: flex;
  flex-direction: column;
  height: 45%;
  justify-content: center;
  width: 100%;

  @media (min-width: 850px) {
    height: 100%;
  }
`;

export const LeftContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0px 25px;
  max-width: 400px;
  word-wrap: break-word;
`;

export const LeftContainerTitle = styled.span`
  font-size: 36px;
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const RightContainer = styled.div`
  background-image: url(${kv});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100%;
  width: 100%;
`;
