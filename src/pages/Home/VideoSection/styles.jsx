import YouTube from 'react-youtube';
import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-bottom: 60px;
  padding-top: 60px;
  width: 100%;
`;

export const Heading = styled.div`
  font-size: 28px;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  max-width: 910px !important;
  text-align: center;
`;

export const TextContainer = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  max-width: 910px;
  white-space: pre-line;
  word-break: break-word;
`;

export const Video = styled(YouTube)`
  @media (min-width: 500px) {
    height: 200px;
    width: 450px;
  }

  @media (min-width: 700px) {
    height: 470px;
    width: 650px;
  }

  @media (min-width: 994px) {
    height: 512px;
    width: 910px;
  }
`;
