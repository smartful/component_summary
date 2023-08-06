import styled from '@emotion/styled';

export const Text = styled.span`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  font-weight: ${(props) => props.weight};
`;
