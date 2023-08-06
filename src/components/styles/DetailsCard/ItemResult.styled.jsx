import styled from '@emotion/styled';

export const ItemResult = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 8%;
  padding: 7px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
`;
