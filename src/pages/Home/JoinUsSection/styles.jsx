import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 60px;
  padding-bottom: 60px;
  padding-top: 60px;
  width: 100%;
`;

export const TextContainer = styled.div`
  margin-left: 80px;
  width: 50%;

  @media (max-width: 1016px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-left: 0px;
    width: 100%;
  }
`;

export const TextTitle = styled.div`
  font-size: 28px;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin-bottom: 20px;
  width: 400px;
`;

export const TextContent = styled.div`
  margin-bottom: 30px;
  width: 400px;
  word-break: break-word;
`;

export const ButtonContainer = styled.div`
  width: 400px;
`;

export const Button = styled.button`
  background-color: black;
  border: none;
  color: white;
  display: inline-block;
  padding: 15px 50px;
  text-align: center;
  text-decoration: none;
  width: 200px;
`;

export const Image = styled.img`
  margin-right: 80px;
  width: 50%;

  @media (max-width: 1016px) {
    display: none;
  }
`;
