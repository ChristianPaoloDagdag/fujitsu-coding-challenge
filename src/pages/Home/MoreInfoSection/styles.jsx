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

export const Content = styled.div`
  cursor: pointer;
  display: flex;
  flex-directiion: row;
  gap: 25px;
  margin-left: 25px;
  margin-right: 25px;
  max-width: 1280px;

  @media (max-width: 680px) {
    align-items: center;
    flex-direction: column;
  }

  &.contentTwo {
    flex-direction: row-reverse;

    @media (max-width: 680px) {
      align-items: center;
      flex-direction: column;
    }
  }
`;

export const ContentImage = styled.img`
  width: 50%;

  @media (max-width: 680px) {
    width: 80%;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  @media (max-width: 680px) {
    width: 80%;
  }
`;

export const ContentTitle = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const ContentSubtext = styled.div`
  word-wrap: break-word;
`;

export const ContentMore = styled.div`
  margin-top: 20px;
`;
