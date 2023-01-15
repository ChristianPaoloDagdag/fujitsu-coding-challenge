import YouTube from 'react-youtube';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  gap: 60px;
  align-items: center;
`;

export const Heading = styled.div`
  font-size: 28px;
  text-align: center;
  width: 910px !important;
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const TextContainer = styled.div`
  max-width: 910px;
  white-space: pre-line;
  word-break: break-word;
  margin-left: 50px;
  margin-right: 50px;
`;

export const Video = styled(YouTube)`
  @media (min-width: 500px) {
    width: 450px;
    height: 200px;
  }

  @media (min-width: 700px) {
    width: 650px;
    height: 470px;
  }

  @media (min-width: 994px) {
    width: 910px;
    height: 512px;
  }
`;
