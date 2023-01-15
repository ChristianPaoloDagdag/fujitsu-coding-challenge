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

export const ContentOne = styled.div`
  max-width: 910px;
`;

export const Heading = styled.div`
  font-size: 28px;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin-bottom: 60px;
  text-align: center;
`;

export const Subtitle = styled.div`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  height: 16px;
  margin-bottom: 20px;

  @media (max-width: 956px) {
    margin-left: 50px;
    margin-right: 50px;
  }
`;

export const TextContent = styled.div`
  word-wrap: break-word;

  @media (max-width: 956px) {
    margin-left: 50px;
    margin-right: 50px;
  }
`;

export const ContentTwo = styled.div`
align-items: center;
display: flex;
flex-direction: column;
gap: 25px;
max-width: 910px; !important;

&.second {
  flex-direction: column-reverse;

  @media (min-width: 872px) {
    flex-direction: row-reverse;
  }
}

@media (min-width: 872px) {
  flex-direction: row;
}

@media (max-width: 956px) {
  margin-left: 50px;
  margin-right: 50px;
}
`;

export const ContentTwoImage = styled.img`
  width: 50%;

  @media (max-width: 956px) {
    width: 100%;
  }
`;

export const ContentTwoText = styled.div`
  width: 50%;

  @media (max-width: 956px) {
    width: 100%;
  }
`;

export const ContentThree = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
`;

export const ContentTreeContent = styled.div`
  align-items: center;
  background-color: pink;
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 
`;

export const ContentTreeImage = styled.img`
  border-radius: 80px;
  height: 150px;
  width: 150px;
`;

export const ContentTreeText = styled.div`
  text-align: center;
  width: 300px;
`;
