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

export const CustomTable = styled.table`
  border: 1px solid;
  border-color: #d3d3d3;
  border-collapse: collapse;
`;

export const CustomDataDate = styled.td`
  border: 1px solid;
  border-color: #d3d3d3;
  width: 200px;
  height: 70px;
  padding-left: 10px;
`;

export const CustomDataContent = styled.td`
  border: 1px solid;
  border-color: #d3d3d3;
  padding-left: 50px;
  word-break: break-word;
  padding-right: 25px;
`;
